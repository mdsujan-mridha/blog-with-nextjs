
'use client';
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
import { createContext, useContext, useEffect, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);


    useEffect(() => {

        const fetchBlogs = async () => {
            try {
                const res = await fetch(`${apiDomain}/blogs`);
                const data = await res.json();
                setBlogs(data);
                setFilteredBlogs(data);

            } catch (err) {
                console.log('Error Fetching blogs', err);
                setError(err);
            }

            finally {
                setLoading(false);
            }
        }
        fetchBlogs();

    }, []);

    // filtered Whenever change category 
    useEffect(() => {
        if (!selectedCategory) {
            setFilteredBlogs(blogs);
        }
        else {
            const filtered = blogs.filter((blog) =>

                blog.category?.toLowerCase().includes(selectedCategory.toLowerCase())
            );
            setFilteredBlogs(filtered);
        }
    }, [selectedCategory, blogs])

    return (
        <BlogContext.Provider value={{ blogs, loading, error, filteredBlogs, setFilteredBlogs, selectedCategory, setSelectedCategory }}>
            {children}
        </BlogContext.Provider>
    )

}

export const useBlogContext = () => useContext(BlogContext);