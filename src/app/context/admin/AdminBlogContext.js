'use client';

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
import { useSession } from 'next-auth/react';

import { createContext, useContext, useEffect, useState } from 'react';


const AdminBlogContext = createContext();

export const AdminBlogProvider = ({ children }) => {
    const [adminBlogs, setAdminBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { data: session, status } = useSession();

    // console.log(session?.user);
    useEffect(() => {
        if (status !== 'authenticated') return;

        const fetchAdminBlogs = async () => {
            try {

                const res = await fetch(`${apiDomain}/admin/blog`, {
                    headers: {
                        Authorization: `Bearer ${session?.user?.accessToken}`
                    }
                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message || 'Failed to fetch blogs');
                }

                setAdminBlogs(data);
            } catch (error) {
                console.log('Error Fetching blogs', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchAdminBlogs();

    }, [session, status]);

    return (
        <AdminBlogContext.Provider value={{ adminBlogs, loading, error }}>
            {children}
        </AdminBlogContext.Provider>
    )
}

export const useAdminBlogContext = () => useContext(AdminBlogContext);


