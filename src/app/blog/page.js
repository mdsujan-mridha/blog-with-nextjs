'use client';

import { Cinzel } from "next/font/google";
import { useBlogContext } from "../context/BlogContext";
import BlogCard from "@/components/BlogCard";
import { useState } from "react";
const cinzelFont = Cinzel({
    subsets: ['latin'],
    weight: "500",

})
import { FaRegFaceSadTear } from "react-icons/fa6";
import BlogCardSkeleton from "@/components/BlogCardSkeleton";

const categories = [
    {
        name: "Web Development",
        subcategories: ["Front-End Development", "Back-End Development", "Full Stack"],
    },
    {
        name: "Mobile Development",
        subcategories: ["iOS", "Android", "React Native"],
    },
    {
        name: "UI/UX Design",
        subcategories: ["Wireframing", "Prototyping", "User Testing"],
    },
    {
        name: "Data Science",
        subcategories: ["Machine Learning", "Deep Learning", "Data Visualization"],
    },
    {
        name: "Programming Languages",
        subcategories: ["Python", "JavaScript", "Java", "C++", "Ruby"],
    },
    {
        name: "DevOps & Cloud",
        subcategories: ["AWS", "Docker", "Kubernetes"],
    },
    {
        name: "Open Source & Community",
        subcategories: ["Contributing to Open Source", "Community Building", "Open Source Leadership"],
    }
]

const page = () => {

    const { filteredBlogs, loading, error, setSelectedCategory } = useBlogContext();

    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (categoryName) => {
        setOpenCategory(openCategory === categoryName ? null : categoryName);
    };
    // console.log(blogs)

    return (
        <div className='min-h-screen bg-slate-950 relative py-10'>

            {/* header  */}
            <div className="bg-slate-950 relative px-14" style={{ height: '600px' }}>
                {/* apply a blob here  */}
                {/* animation for text  */}
                <div className="absolute top-0 bottom-0 right-0 left-0 z-40 inset-0 w-full h-full rounded-full bg-[conic-gradient(from_180deg,_#00FFFF,_#610aef)] blur-2xl opacity-80 animate-pulse mix-blend-multiply"></div>
                <div className="bg-slate-950 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] absolute">

                    <h1 className={`text-white text-center text-6xl pt-5  ${cinzelFont.className}`} style={{ fontSize: '180px' }}> Discover Our Latest Posts </h1>
                </div>
            </div>
            <div className="w-full px-12 flex gap-2 justify-between min-h-screen">
                <>
                    {
                        loading ? (<>

                            <div className="flex flex-col gap-5 w-2/3">
                                {
                                    Array.from({ length: 4 }).map((_, i) => <BlogCardSkeleton key={i} />)
                                }

                            </div>

                        </>) : (
                            <div className=" w-2/3">

                                {
                                    filteredBlogs && filteredBlogs.length > 0 ? (

                                        filteredBlogs &&
                                        filteredBlogs.map((blog) => (
                                            <BlogCard blog={blog} key={blog._id} />
                                        ))

                                    ) : (<div className="flex items-center justify-center flex-col gap-5 min-h-96">
                                        <h1 className="text-center text-6xl text-red-600">No blogs found for this category.</h1>
                                        <FaRegFaceSadTear className="text-8xl text-red-600" />

                                    </div>)
                                }

                            </div>
                        )
                    }

                </>
                <div className="w-1/4 flex flex-col mx-auto border-l-2 border-slate-800 pl-10">
                    {/* search  */}
                    <div className="w-full py-10">
                        <input type="text" placeholder="Search..." className="w-full h-10 px-4 rounded-md bg-slate-800 text-white" />
                    </div>
                    {/* category  */}
                    <div className="w-full py-10">
                        <ul>
                            {
                                categories.map((category, index) => (

                                    <li
                                        key={index}
                                        className="mb-2"
                                    >

                                        <div className="flex justify-between items-center cursor-pointer hover:text-yellow-400 transition duration-300"
                                            onClick={() => toggleCategory(category.name)}
                                        >
                                            <span className="text-white text-2xl" onClick={() => setSelectedCategory(category.name)}>{category.name}</span>
                                            <span className="text-white text-3xl">{openCategory === category.name ? '-' : '+'}</span>

                                        </div>
                                        {/* subcate */}
                                        {
                                            openCategory === category.name && (
                                                <ul className="pl-4 mt-2 space-y-1 text-sm text-slate-300">
                                                    {
                                                        category.subcategories.map((subcat, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="cursor-pointer hover:text-yellow-300 transition text-xl"
                                                                onClick={() => setSelectedCategory(subcat)}
                                                            >
                                                                • {subcat}
                                                            </li>
                                                        ))
                                                    }

                                                </ul>
                                            )
                                        }


                                    </li>

                                ))
                            }
                        </ul>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default page;
