'use client';
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
import { createContext, useContext, useEffect, useState } from 'react';


const AdminBlogContext = createContext();

export const AdminBlogProvider = ({ children }) => {
    const [adminBlogs, setAdminBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchAdminBlogs = async () => {
            try {

                const res = await fetch(`${apiDomain}/admin/blog`);
                if (!res.ok) {
                    throw new Error(data.message || 'Failed to fetch blogs');
                }
                const data = await res.json();
                setAdminBlogs(data);
            } catch (error) {
                console.log('Error Fetching blogs', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchAdminBlogs();

    }, []);

    return (
        <AdminBlogContext.Provider value={{ adminBlogs, loading, error }}>
            {children}
        </AdminBlogContext.Provider>
    )
}

export const useAdminBlogContext = () => useContext(AdminBlogContext);


