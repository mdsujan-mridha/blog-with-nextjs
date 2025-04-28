import connectDB from "@/config/dbConnection";
import cloudinary from "@/lib/Cloudinary";
import Blogs from "@/models/Blogs";
import { verifyAdmin, withAuth } from "@/utils/VerifyAdmin";
import { exportTraceState } from "next/dist/trace";
import { NextResponse } from "next/server"

async function createBlog(request) {

    try {
        await connectDB();
        const formData = await request.formData();
        const title = formData.get('title');
        const meta_description = formData.get('meta_description');
        const category = formData.get('category');
        const content = JSON.parse(formData.get('content'));
        const description = formData.get('description');
        const image = formData.get('image'); // this should be a File object

        let imageUrl = null;

        if (image && image.name) {
            const buffer = Buffer.from(await image.arrayBuffer());

            // convert to base64 and upload to cloudinary

            const base64Image = `data:${image.type};base64,${buffer.toString('base64')}`;
            const uploadResponse = await cloudinary.uploader.upload(base64Image, {
                folder: 'blogs',
            });
            imageUrl = uploadResponse.secure_url;
        }

        const newBlog = {
            title,
            meta_description,
            category,
            content,
            description,
            image: imageUrl,
        }

        await Blogs.create(newBlog);

        return NextResponse.json({ message: "Blog created successfully" }, { status: 201 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}


// get admin blogs

async function getBlogs(request) {

    try {
        await connectDB();
        const blogs = await Blogs.find({}).sort({ createdAt: -1 });
        return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}



export const POST = withAuth(createBlog, "admin")
export const GET = withAuth(getBlogs, "admin")