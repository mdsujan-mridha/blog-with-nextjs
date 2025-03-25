"use client"
import React, { useState } from 'react';
import BlogCard from './BlogCard';
import Link from 'next/link';
import homeBannerImage from "@/app/assets/Image -1.png";
import Image from 'next/image';
import fakeData from '@/lib/fakeBlogData';

const HomeBlog = () => {

    const fakeBlogData = fakeData.fakeBlogData;
    const fakeSubBlogData = fakeData.fakeBlogDataSub;
    //    console.log(fakeBlogData);
    const categories = [
        "Web Development",
        "AI & Machine Learning",
        "Programming Languages",
        "Cybersecurity",
        "Mobile Development",
        "Blockchain",
        "Game Development",
        "Career & Skills",
        "UI/UX Design",
    ]


    return (
        <div className=''>
            <div className='flex gap-6 overflow-x-auto p-4 scrollbar-hide'>
                {
                    categories.map((category, index) => (
                        <div
                            style={{
                                "--background": "30 41 59",
                                "--highlight": "255 255 255",
                                "--bg-color":
                                    "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
                                "--border-color": `linear-gradient(145deg,
          rgb(var(--highlight)) 0%,
          rgb(var(--highlight) / 0.3) 33.33%,
          rgb(var(--highlight) / 0.14) 66.67%,
          rgb(var(--highlight) / 0.1) 100%)
        `,
                            }}
                            className="px-2 flex h-24 w-full md:w-72 lg:w-72 flex-col items-center justify-center rounded-xl border border-transparent text-center
      [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
                            key={index}
                        >
                            <p className="text-xl font-medium text-white"> {category}</p>
                        </div>
                    ))
                }
            </div>
            {/* ================== */}
            <div className="top-0 z-[-2]  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
                <div className='flex flex-col lg:flex-row gap-5 mt-10 px-12 justify-between py-10 items-start'>
                    {/* home blog =================================================================             */}
                    <div className=' w-2/3'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-white text-xl font-bold'>Top Blogs </h1>
                            <Link href="/" className='text-white'> View more-- </Link>
                        </div>
                        <div className='flex flex-col gap-5 mt-5'>
                            {
                                fakeBlogData.map((blog, index) => (
                                    <BlogCard key={index} blog={blog} />
                                ))
                            }
                        </div>
                    </div>
                    {/* side bar================================================================================== */}
                    <div className='w-2/6 shadow-lg p-2'>
                        <Image src={homeBannerImage} alt="banner" className='w-full' />
                        <div className='flex flex-col gap-5 mt-2'>
                            {
                                fakeSubBlogData.map((blog, index) => (
                                    <div className='flex gap-2 w-full h-40 p-1 rounded-md shadow-md justify-between flex-row-reverse border-b border-opacity-40 border-slate-500' key={index}>
                                        <div className='w-2/3 flex flex-col gap-2'>
                                            <h1 className='text-white bg-blue-600 w-60 px-5 rounded-md'> {blog?.category} </h1>
                                            <h2 className='text-white text-lg font-medium'> {blog.title} </h2>
                                            <p className='text-white'> {blog.meta_description} </p>
                                        </div>
                                        <div className=' w-1/4'>
                                            <img src={blog.image} alt="robot" className='rounded-md h-28 w-full' />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeBlog;




