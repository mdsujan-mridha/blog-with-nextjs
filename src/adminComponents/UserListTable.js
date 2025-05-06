'user client';
import React, { useState } from 'react';
import UserModal from './UserModal';

import { useSession } from 'next-auth/react';
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const UserListTable = ({ users, onUpdate }) => {

    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: session, status } = useSession();

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    }

    const handleDelete = async (userId) => {
        if (!session?.user?.accessToken) {
            console.error('No access token found.');
            return;
        }

        try {
            const response = await fetch(`${apiDomain}/admin/user/${userId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${session.user.accessToken}`,
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log('User deleted successfully:', data);
                // Optionally update state
                // setUsers((prev) => prev.filter((user) => user._id !== userId));
            } else {
                const errorData = await response.json();
                console.error('Error deleting user:', errorData);
            }

        } catch (error) {
            console.log('Network or server error:', error);
        }
    };


    const handleModalUpdate = () => {
        onUpdate?.(selectedItem);
        setIsModalOpen(false);
    };

    return (
        <div className="overflow-x-auto bg-gray-900 rounded-xl p-4 shadow-md">
            <table className="w-full table-auto border-collapse text-white">
                <thead>
                    <tr className="bg-gray-700 text-gray-200 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left border">Profile</th>
                        <th className="py-3 px-6 text-left border">Name</th>
                        <th className="py-3 px-6 text-left border">Role</th>
                        <th className="py-3 px-6 text-left border">Email</th>
                        <th className="py-3 px-6 text-center border">Action</th>
                    </tr>
                </thead>
                <tbody className="text-sm font-light">
                    {users && users.length > 0 ? (
                        users.map((user, index) => (
                            <tr
                                key={user?._id ? user?._id : index}
                                className="border-b border-gray-700 hover:bg-gray-800 transition duration-300"
                            >
                                <td className="py-3 px-6 border">
                                    <img
                                        src={user?.image || 'https://via.placeholder.com/40'}
                                        alt={user?.name || 'User'}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-3 px-6 border">{user?.name || 'N/A'}</td>
                                <td className="py-3 px-6 border capitalize">{user?.role || 'User'}</td>
                                <td className="py-3 px-6 border">{user?.email || 'N/A'}</td>
                                <td className="py-3 px-6 border text-center ">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded "
                                        // onClick={() => handleEditClick(user?._id)}
                                        onClick={() => handleEditClick(user)}
                                    >

                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user?._id)}
                                        className="bg-orange-700 hover:bg-red-700 text-white py-1 px-3 rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-4 text-gray-400">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {
                isModalOpen && selectedUser && (
                    <UserModal
                        handleEditClick={handleEditClick}
                        setIsModalOpen={setIsModalOpen}
                        selectedUser={selectedUser}
                        setSelectedUser={setSelectedUser}
                        handleModalUpdate={handleModalUpdate}

                    />
                )
            }
        </div>
    );
};

export default UserListTable;
