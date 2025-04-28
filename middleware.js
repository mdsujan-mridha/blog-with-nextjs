import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    // 1. Allow request if the following is true
    if (pathname.startsWith("/_next") || pathname.startsWith("/api/auth") || pathname === "/") {
        return NextResponse.next();
    }

    // 2. Redirect if no token and trying to access a protected route
    if (!token && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    // 3. Block non-admin users
    if (pathname.startsWith("/admin") && token?.user?.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
    }
    // For Admin APIs
    if (pathname.startsWith("/api/admin") && token?.user?.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 4. Otherwise, continue to the requested page
    return NextResponse.next();
}
