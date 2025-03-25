
import React from 'react';


const BlogCard = ({ blog }) => {
    return (
        <div className='flex gap-2 w-full h-52 p-1 rounded-md shadow-md bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] justify-between border-b-2 border-slate-500 border-opacity-10'>
            <div className='w-2/3 flex flex-col gap-2'>
                <h1 className='text-white bg-blue-600 w-60 px-5 rounded-md'> {blog?.category} </h1>
                <h2 className='text-white text-xl font-medium'> {blog.title} </h2>
                <p className='text-white'> {blog.meta_description} </p>
                <p className='text-white'> {blog.description} </p>
            </div>
            <div className=' w-1/4'>
                <img src={blog.image} alt="robot" className='rounded-md h-48 w-full' />
            </div>
        </div>
    );
};

export default BlogCard;