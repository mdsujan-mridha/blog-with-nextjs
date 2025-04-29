'use client';

import BlogDataTable from '@/adminComponents/BlogDataTable';
import { useAdminBlogContext } from '@/app/context/admin/AdminBlogContext';
import React from 'react';

const page = () => {

    const { adminBlogs, loading, error } = useAdminBlogContext();
    if (loading) return <p className="text-center text-gray-300">Loading...</p>;
    if (error) return <p className="text-center text-red-400">Error: {error.message}</p>;
    // console.log(adminBlogs, 'admin blogs')
    const handleDelete = (id) => {
        console.log('Deleting item with id:', id);
        // call DELETE API here
    };

    const handleUpdate = (item) => {
        console.log('Updating item:', item);
        // open update modal/form or route to edit page
    };
    return (
        <div>
            <h1 className='text-white text-center'> All Blogs for admin </h1>
            <BlogDataTable blogs={adminBlogs} onDelete={handleDelete} onUpdate={handleUpdate} />
        </div>
    );
};

export default page;