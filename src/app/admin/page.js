"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {  useLayoutEffect } from "react";

export default function AdminPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useLayoutEffect(() => {
        if (status === "unauthenticated") {
            router.push("/");
        }
        if (status === "authenticated" && session.user.role !== "admin") {
            router.push("/");
        }
    }, [status, session, router]);

    if (status === "loading") {
        return <div>Loading...</div>; // 🌀 Loading spinner to prevent hydration errors
    }

    return (
        <div>
            <h1>Welcome to Admin Dashboard</h1>
        </div>
    );
}
