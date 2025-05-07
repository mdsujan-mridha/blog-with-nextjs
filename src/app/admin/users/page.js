'use client';
import UserListTable from '@/adminComponents/UserListTable';
import LoadingSpiner from '@/utils/LoadingSpiner';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const page = () => {

    const [users, setUsers] = useState([null]);
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // if (status !== 'authenticated') return;
        const fetchUsers = async () => {
            try {
                const res = await fetch(`${apiDomain}/admin/user`, {
                    headers: {
                        Authorization: `Bearer ${session?.user?.accessToken}`
                    }
                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message || 'Failed to fetch users');
                }
                setUsers(data);
            } catch (error) {
                console.log('Error Fetching users', error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();

    }, [])

    // console.log(users);

    return (
        <div>
            <h1 className='text-center text-white text-2xl font-bold py-10'> All users List </h1>
            {
                loading ? <LoadingSpiner /> : users?.length > 0 ? (
                    <UserListTable users={users} onUpdate={() => { }} />
                ) : (
                    <p className='text-center text-white'>No users found</p>
                )
            }
        </div>
    );
};

export default page;