'use client';

import { useAdminBlogContext } from '@/app/context/admin/AdminBlogContext';
import React from 'react';

const page = () => {

    const { error, loading, adminBlogs } = useAdminBlogContext();
    console.log(adminBlogs, 'admin blogs')


    return (
        <div>
            <h1 className='text-white text-center'> All Blogs for admin </h1>
        </div>
    );
};

export default page;