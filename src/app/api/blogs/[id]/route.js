import connectDB from "@/config/dbConnection"
import Blogs from "@/models/Blogs";


export const GET = async (request, { params }) => {
    const providerId = await params;
    try {
        await connectDB();
        const blog = await Blogs.findById(providerId.id);
        if (!blog) {
            return new Response(`Blog not found ${providerId.id}`, { status: 404 });
        }
        return new Response(JSON.stringify(blog), { status: 200 });
    } catch (error) {
        return new Response("Something went wrong", { status: 500 });
    }
}