'use client';


import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const TiptapEditor = dynamic(() => import('@/components/TiptapEditor'), { ssr: false });

const page = () => {

    const [title, setTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('metaDescription', metaDescription);
        formData.append('category', category);
        formData.append('content', content);
        formData.append('image', image);

        console.log(formData)

    }


    return (
        <div className='min-h-screen bg-slate-900'>
            <div className='text-white max-w-5xl mx-auto bg-slate-950 p-4 rounded-lg shadow-md'>
                <h1 className='text-3xl font-bold mb-6 text-center'> Create New Blog </h1>

                <form className='space-y-6' onSubmit={handleSubmit}>

                    <input

                        type="text"
                        placeholder='Blog Title'
                        className='w-full p-3 bg-slate-800 text-white rounded-md'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Blog Category'
                        className='w-full p-3  bg-slate-800 text-white rounded-md'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder='Set meta description'
                        className='w-full p-3  bg-slate-800 text-white rounded-md'
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                        required
                    />

                    {/* rich text */}
                    <TiptapEditor content={content} onChange={setContent} />

                    <input

                        type="file"
                        accept='image/*'
                        onChange={(e) => setImage(e.target.files[0])}
                        className='w-full p-3  bg-slate-800 text-white rounded-md'
                    />
                    <button
                        type='submit'
                        className='w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200'
                    >
                        Create Blog
                    </button>
                </form>

            </div>
        </div>
    );
};

export default page;