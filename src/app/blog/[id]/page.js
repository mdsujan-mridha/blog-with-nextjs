'use client';

import { fetchSingleBlog } from '@/lib/requiest';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import DateObject from 'react-date-object';

const page = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const date = new DateObject(blog?.createdAt);


    useEffect(() => {

        const fetchSingleBlogData = async () => {

            if (!id) return;

            try {
                const blog = await fetchSingleBlog(id);
                setBlog(blog);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);

            } finally {
                setLoading(false);

            }

        }
        if (blog === null) {
            fetchSingleBlogData();
        }

    }, [id, blog])

    console.log(blog, "single blog data")
    return (
        <div className='min-h-screen bg-slate-950 px-12'>
            <div className='w-full flex justify-between items-center py-10 gap-5'>
                <div className=' w-4/5 flex flex-col gap-10'>
                    <h1 className='text-white text-center font-bold text-5xl'> {blog?.title} </h1>
                    <img src={blog?.image} alt="robot" width={1000} height={1000} className='rounded-md h-auto w-full' />
                    <p className='text-white text-2xl font-semibold text-center'> {blog?.meta_description} </p>
                    <div className='flex justify-between items-center text-white font-bold'>
                        <p>  {blog?.author} </p>
                        <p>  {date?.format()} </p>
                    </div>
                    <p className='text-white font-medium text-md'>
                        {blog?.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;