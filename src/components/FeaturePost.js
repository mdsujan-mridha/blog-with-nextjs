

import React from 'react';
import fakeData from '@/lib/fakeBlogData';
const FeaturePost = () => {

    const featureBlogData = fakeData.featureBlogData;
    // console.log(featureBlogData);
    const firstPost = featureBlogData[0];
    const otherPosts = featureBlogData.slice(1, 5);

    return (
        <div className='px-12 flex gap-5 items-center h-96 w-full mb-10'>
            <div className='w-1/2 h-full p-2 rounded-md relative'>
                <img src={firstPost.image} alt="robot" className='rounded-md h-96 w-full' />
                <div className='absolute bottom-0 left-5 right-0'>
                    <h1 className='text-white text-xl'> {firstPost.title} </h1>
                    <p className='text-white'> {firstPost.meta_description} </p>
                </div>
            </div>
            <div className=' w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-96 gap-3'>
                {/* 2nd column */}
                {
                    otherPosts.map((post, index) => (
                        <div className='h-48 p-1 rounded-md relative' key={index}>
                            <img src={post.image} alt="robot" className='rounded-md h-full w-full' />
                            <div className='absolute bottom-2 left-5 right-0'>
                                <p className='text-white'> {post.meta_description} </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default FeaturePost;