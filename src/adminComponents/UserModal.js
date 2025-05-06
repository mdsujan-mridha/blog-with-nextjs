
'use client'
import React from 'react';

const UserModal = ({ handleEditClick, setIsModalOpen, selectedUser, handleModalUpdate }) => {

    // console.log(selectedUser, 'selected user in modal')

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg w-96 max-w-md shadow-lg min-h-96">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="btn btn-sm btn-circle btn-ghost left-2 top-1"
                    >✕</button>
                    <div className='mt-24'>
                        <h2 className="text-2xl font-semibold mb-4 text-center border-b-2">Update user</h2>
                        <div>
                            <input

                                type="text"
                                className="w-full border p-2 rounded mt-1 mb-4"
                                value={selectedUser?.name || ''}
                                onChange={(e) =>
                                    handleEditClick({ ...selectedUser, name: e.target.value })
                                }
                                placeholder="Name"

                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="w-full border p-2 rounded mt-1 mb-4"
                                value={selectedUser?.email || ''}
                                onChange={(e) =>
                                    handleEditClick({ ...selectedUser, email: e.target.value })
                                }
                                placeholder="Email"

                            />
                        </div>
                        <div>
                            <select
                                className="w-full border p-2 rounded mt-1 mb-4"
                                value={selectedUser?.role || ''}
                                onChange={(e) =>
                                    handleEditClick({ ...selectedUser, role: e.target.value })
                                }
                            >
                                <option value="">Choose Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>

                            </select>
                        </div>
                        <div className="flex justify-center items-center space-x-4 mb-4">
                            <button
                                onClick={handleModalUpdate}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserModal;