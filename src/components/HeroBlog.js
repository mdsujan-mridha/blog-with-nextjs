
import techImage from "@/app/assets/tech.jpg";
import Image from "next/image";
import React from 'react';

const HeroBlog = () => {
    return (
        <div className="mx-auto flex min-h-screen w-full items-center">
            <div className="w-full rounded-md bg-gradient-to-r cursor-pointer from-pink-500 via-red-500 to-yellow-500 p-1">
                <div className="flex w-full items-center inset-0 -z-10 h-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    <div className="flex items-center gap-10">
                        <div className="w-1/2">
                            <Image src={techImage} alt="tech" className='rounded-md w-fit'/>
                        </div>
                        <div className=" text-white flex flex-col">
                            <h1 className="text-white text-4xl"> Building a Stunning Animated Button with Tailwind CSS </h1>
                            <p className="text-justify text-white text-lg mt-5">
                                Learn how to create a visually appealing animated glow button using Tailwind CSS. This tutorial covers hover effects, gradients, and animations to make your buttons stand out!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBlog;


