import connectDB from "@/config/dbConnection";
import { withAuth } from "@/utils/VerifyAdmin";
import User from "@/models/User";
import { NextResponse } from "next/server"


// delete user 
async function deleteUser(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        // 1.find user by id
        const user = await User.findById(id);
        // 2.check user exists or not
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        // 3. check user is admin or not is user role is admin then return error message
        if (user.role?.toLowerCase() === "admin") {
            return NextResponse.json({ message: "You can't delete admin user" }, { status: 403 });
        }
        // 4. if user is not admin then delete user and return success message
        await User.deleteOne(id);
        return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong when delete user" }, { status: 500 });
    }
}

export const DELETE = withAuth(deleteUser, "admin");