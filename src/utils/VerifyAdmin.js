// utils/withAuth.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export function withAuth(handler, requiredRole = "admin") {
  
  return async (req, ...args) => {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    // console.log(token, "token from withAuth");

    if (!token) {
      return NextResponse.json({ message: "Unauthorized: No token" }, { status: 401 });
    }

    if (token?.role!==requiredRole) {
      return NextResponse.json({ message: "Forbidden: Insufficient permissions" }, { status: 403 });
    }

    // Attach token info if needed
    req.user = token.user;

    // Proceed to actual handler
    return handler(req, ...args);
  };
}
