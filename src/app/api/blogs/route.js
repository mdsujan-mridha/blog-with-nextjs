

import connectDB from "@/config/dbConnection";
import Blogs from "@/models/Blogs";



// getting all blogs from the database
export const GET = async (request) => {
    try {
        await connectDB();
        const blogs = await Blogs.find({});
        return new Response(JSON.stringify(blogs), {
            status: 200,
        });
        
    } catch (error) {
        console.log(error);
        return new Response("something went wrong", { status: 500 });

    }

}