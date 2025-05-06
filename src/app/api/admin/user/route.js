

// find all users for admin 
import connectDB from "@/config/dbConnection";
import { NextResponse } from "next/server"
import User from "@/models/User";
import { withAuth } from "@/utils/VerifyAdmin";

async function getUsers(request) {
    try {

        await connectDB();
        const users = await User.find({}).sort({ createdAt: -1 });
        if (!users) {
            return NextResponse.json({ message: "No users found" }, { status: 404 });
        }
        return NextResponse.json(users, { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong when fetch all users" }, { status: 500 });
    }
}

export const GET = withAuth(getUsers, "admin");
