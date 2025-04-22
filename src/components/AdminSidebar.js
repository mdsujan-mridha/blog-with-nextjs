'use client';

import {Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const navLinks = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'All Blogs', href: '/admin/blogs' },
    { name: 'Create Blog', href: '/admin/blogs/create' },
    { name: 'Featured Blogs', href: '/admin/blogs/featured' },
    { name: 'All Users', href: '/admin/users' },
    { name: 'All Videos', href: '/admin/videos' },
    { name: 'Add Video', href: '/admin/videos/create' },
];
const AdminSidebar = () => {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col w-64 p-4 border-r border-slate-700">
            {/* Mobile Toggle */}
            <div className="md:hidden flex justify-end mb-4">
                <button onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Sidebar Links */}
            <nav className={`space-y-3 ${open ? 'block' : 'hidden'} md:block`}>
                <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-3 py-2 rounded-md hover:bg-slate-700 transition ${pathname === link.href ? 'bg-slate-700 font-semibold' : ''
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default AdminSidebar;