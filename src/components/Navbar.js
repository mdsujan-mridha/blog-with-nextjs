

import { Cinzel } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const cinzelFont = Cinzel({

    subsets: ['latin'],
    weight: "500",

})

const Navbar = () => {

    const menuItem = [
        {
            _id: 1,
            name: 'Home',
            link: "/"

        },
        {
            _id: 2,
            name: 'Blogs',
            link: "/blog"

        },
        {
            _id: 3,
            name: 'Contact',
            link: "/contact"

        },
        {
            _id: 4,
            name: 'About',
            link: "/about"

        },

    ]

    return (
        <div className="navbar bg-slate-950 px-12 text-primary text-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-950 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl">
                        {
                            menuItem.map((item) => (
                                <li key={item._id}>
                                    <Link href={item.link}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Link href="#" className="btn btn-ghost text-4xl"
                    style={{
                        background: '#2D3BFF',
                        backgroundImage: 'linear-gradient(to right, #2D3BFF 21%, #1CFFCA 71%)',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}

                >Logic Programming </Link>
            </div>
            <div className="navbar-center hidden lg:flex text-2xl">
                <ul className="menu menu-horizontal px-1 text-2xl">
                    {
                        menuItem.map((item) => (
                            <li key={item._id}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="#" className="btn btn-ghost text-4xl">
                    <button className="relative bg-gradient-to-r from-blue-400 to-purple-500 p-[2px] rounded-md">
                        <div className="flex items-center justify-center bg-black px-6 py-2  text-white text-2xl">
                            Login
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;