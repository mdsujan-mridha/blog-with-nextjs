

import { Pencil, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
const categories = ['All', 'Tech', 'Science', 'Web Development'];

const BlogDataTable = ({ blogs, onDelete, onUpdate }) => {

    const [search, setSearch] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items to display per page

    const filteredBlogs = blogs
        .filter((blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter((blog) =>
            filterCategory === 'All' ? true : blog.category === filterCategory
        );

    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

    const currentData = filteredBlogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        if (currentPage > totalPages) setCurrentPage(1)
    }, [filteredBlogs, totalPages])


    return (
        <div className='p-4 bg-transparent shadow-md rounded-xl'>
            <div className='flex justify-between items-center mb-4 flex-wrap gap-2'>
                <input type="text"
                    placeholder='Search title...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='p-2 rounded-md bg-gray-800 text-white outline-none  w-full md:w-1/3'
                />
                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className='border p-2 rounded-md'
                >
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }

                </select>

            </div>
            <table className='w-full bg-gray-800 text-white rounded-md'>
                <thead className='bg-gray-700 text-gray-200 uppercase'>
                    <tr>
                        <th className='p-2 border'>Title</th>
                        <th className='p-2 border'>Category</th>
                        <th className='p-2 border'>Date</th>
                        <th className='p-2 border text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentData.length > 0 ? (
                            currentData.map((blog, index) => (
                                <tr key={blog._id} className='hover:bg-gray-50'>
                                    <td className='p-2 border'>{blog.title}</td>
                                    <td className='p-2 border'>{blog.category}</td>
                                    <td className='p-2 border'>{new Date(blog.createdAt).toLocaleDateString()}</td>
                                    <td className="p-2 border text-center flex justify-center gap-5 items-center">
                                        <button
                                            onClick={() => onUpdate?.(item)}
                                            className="text-blue-600 hover:underline mr-2"
                                        >
                                            <Pencil size={18} />
                                        </button>
                                        <button
                                            onClick={() => onDelete?.(item.id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (<tr> <td colSpan={4} className='p-4 text-center text-gray-500'> No data found </td> </tr>)
                    }

                </tbody>
            </table >
            {/* Pagination */}
            <div className="flex justify-end mt-10 gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-3 py-1 border rounded ${currentPage === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-gray-700'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </div >
    );
};

export default BlogDataTable;