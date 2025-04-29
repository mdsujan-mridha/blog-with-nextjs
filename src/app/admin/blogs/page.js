'use client';

import { useAdminBlogContext } from '@/app/context/admin/AdminBlogContext';
import React from 'react';

const page = () => {

    const { adminBlogs, loading, error } = useAdminBlogContext();
    if (loading) return <p className="text-center text-gray-300">Loading...</p>;
    if (error) return <p className="text-center text-red-400">Error: {error.message}</p>;
    console.log(adminBlogs, 'admin blogs')
    return (
        <div>
            <h1 className='text-white text-center'> All Blogs for admin </h1>
        </div>
    );
};

export default page;