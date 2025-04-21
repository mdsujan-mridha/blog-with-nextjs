

import React from 'react';

const BlogCardSkeleton = () => {
    return (
        <div className='flex gap-2 w-full h-52 p-1 rounded-md shadow-md bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] justify-between border-b-2 border-slate-500 border-opacity-10 animate-pulse'>
            <div className='w-2/3 flex flex-col gap-2'>
                <div className='h-6 w-60 bg-slate-700 rounded-md'></div>
                <div className='h-6 w-1/2 bg-slate-700 rounded-md'></div>
                <div className='h-4 w-3/4 bg-slate-700 rounded-md'></div>
                <div className='h-4 w-5/6 bg-slate-700 rounded-md'></div>
            </div>
            <div className='w-1/4'>
                <div className='h-48 w-full bg-slate-700 rounded-md'></div>
            </div>
        </div>
    );
};

export default BlogCardSkeleton;
