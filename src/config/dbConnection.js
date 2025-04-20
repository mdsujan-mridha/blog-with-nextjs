
import mongoose from "mongoose";
let connect = false;

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    if (connect) {
        console.log("MongoDB is already connected 🚀");
        return;
    }
    try {
        await mongoose.connect(process.env.DB_URL);
        connect = true;
        console.log("MongoDB connected successfully 🚀");
    } catch (error) {
        console.error("MongoDB connection failed", error);
    }
}

export default connectDB;