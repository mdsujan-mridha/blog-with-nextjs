


import connectDB from "@/config/dbConnection";
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    // callbacks 
    callbacks: {
        //invoked successfully after sign in
        async signIn({ profile }) {
            // 1.Connect to Database
            await connectDB()
            // 2. Check if user already exists in DB
            const userExists = await User.findOne({ email: profile.email })
            // 3. If not, create a new user in DB
            if (!userExists) {
                const userName = profile.name.slice(0, 20);

                await User.create({
                    name: userName,
                    email: profile.email,
                    image: profile.picture,
                })

            }
            // 4. Return true to allow sign in
            return true

        },
        // modifies the session object after sign in
        async session({ session }) {
            // 1. Get the user from the database using the session object
            const user = await User.findOne({ email: session.user.email })
            // 2. Add the user to the session object
            session.user.id = user._id.toString()
            // add user role to session object
            session.user.role = user.role; // ✅ added
            // 3. Return the modified session object
            return session

        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}