"use client"

import fakeData from '@/lib/fakeBlogData';

import Link from 'next/link';
import React from 'react';

const RecentPost = () => {
    const fakeBlogData = fakeData.fakeBlogData;
    const blogData = fakeBlogData.slice(0, 5);
    return (
        <div className='px-12 py-10 border-t-2 border-slate-50 border-opacity-10 min-h-96 mb-12'>
            <div className=' flex justify-between items-center'>
                <h1 className=' text-white text-xl'>Recent Blog</h1>
                <Link href="/" className=' text-white text-xl'> View more </Link>
            </div>
            <div className='flex flex-wrap gap-5 mt-5 flex-col lg:flex-row justify-between'>
                {
                    blogData.map((blog, index) => (
                        <div key={index} className='w-72 h-60 p-2'>
                            <img src={blog.image} alt={blog.title} className='rounded-md w-full h-56' />
                            <div>
                                <h1 className='text-white text-xl'> {blog.title} </h1>
                                <p className='text-white'> {blog.meta_description} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default RecentPost;