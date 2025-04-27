
'use client'

import { Cinzel } from 'next/font/google';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { MdAccountCircle,MdDashboard  } from "react-icons/md";
import { GoSignOut } from "react-icons/go";



const cinzelFont = Cinzel({

    subsets: ['latin'],
    weight: "500",

})

const Navbar = () => {

    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);

    const pathName = usePathname();
    console.log(useSession())

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

    useEffect(() => {

        const setAuthProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setAuthProviders();

    }, [])

    // console.log(providers)

    // console.log(session)

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
                {
                    session?.user ? (
                        <div className="flex items-center gap-4">
                            <img src={session.user.image} alt="" className="w-10 h-10 rounded-full" />
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1">{session.user?.name}</div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-primary text-white">
                                    <li className='text-black text-xl font-bold'><Link href="/account"><MdAccountCircle /> Profile</Link></li>
                                    {
                                       session.user.role === "admin" ?  (
                                            <li className='text-black text-xl font-bold'>
                                                <Link href="/admin"><MdDashboard  /> Dashboard</Link>
                                            </li>
                                        ): null
                                    }

                                    <li className='text-black text-xl font-bold'> <button onClick={() => signOut()} className='text-lg font-bold '> <GoSignOut />  Logout </button> </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <>
                            {
                                providers &&
                                Object.values(providers).map((provider, index) => (
                                    <Link onClick={() => signIn(provider.id)} href="#" className="btn btn-ghost text-4xl" key={index}>
                                        <button className="relative bg-gradient-to-r from-blue-400 to-purple-500 p-[2px] rounded-md">
                                            <div className="flex items-center justify-center bg-black px-6 py-2  text-white text-2xl">
                                                Login
                                            </div>
                                        </button>
                                    </Link>
                                ))
                            }
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;