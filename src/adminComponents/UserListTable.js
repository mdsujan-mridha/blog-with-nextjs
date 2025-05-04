import React from 'react';

const UserListTable = ({ users }) => {
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
                                <td className="py-3 px-6 border text-center space-x-2">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">
                                        Edit
                                    </button>
                                    <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded">
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
        </div>
    );
};

export default UserListTable;
