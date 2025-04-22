
'use client';

import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }) {
    return (
        <div className="flex">
            {/* Sidebar stays on the left */}
            <div className="w-64 min-h-screen bg-gray-900 text-white">
                <AdminSidebar />
            </div>

            {/* Page content area */}
            <div className="flex-1 p-6 bg-slate-900 min-h-screen">
                {children}
            </div>
        </div>
    );
}

