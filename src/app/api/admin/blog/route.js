import connectDB from "@/config/dbConnection";
import cloudinary from "@/lib/Cloudinary";
import Blogs from "@/models/Blogs";
import { NextResponse } from "next/server"

export async function POST(request) {

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