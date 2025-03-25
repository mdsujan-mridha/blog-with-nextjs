"use client";

import { Cinzel, Poppins, Roboto } from 'next/font/google';
import Link from 'next/link';

import React from 'react';


const cinzelFont = Cinzel({

    subsets: ['latin'],
    weight: "500",

})

const robotoFont = Roboto({
    subsets: ['latin'],
    weight: "500",
})

const PopinsFont = Poppins({
    subsets: ['latin'],
    weight: "400",
});

const HeroSection = () => {

    return (
        <>
            <div className={`relative text-center py-20 bg-gradient-to-r text-white `}>
                <h1 className={`text-6xl font-bold mb-4 ${cinzelFont.className}`}>Welcome to My Digital Space 🚀</h1>
                <p className={`text-2xl mb-8 ${robotoFont.className}`}>
                    Exploring Ideas, Sharing Knowledge, and Building Connections
                </p>
                <p className={`text-sm mb-8 max-w-2xl mx-auto ${PopinsFont.className}`}>
                    Hi, I’m Sujan This is where I share my thoughts on technology, design, lifestyle, etc. Join me as I dive into the latest trends, tutorials, and personal stories. Let’s learn and grow together!
                </p>
                <div className="space-x-4 gap-10 relative items-center justify-center flex">
                    <div className="relative inline-flex group">
                        <div
                            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <Link href="#" title="Get quote now"
                            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button">Get it now
                        </Link>
                    </div>
                    <button className="relative overflow-hidden rounded-lg px-20 py-6">
                        {/* Button Body */}
                        <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-300">
                            Hover me
                        </span>

                        {/* Animated Border */}
                        <span
                            aria-hidden
                            className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 
        before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 
        before:via-red-500 before:to-amber-400"
                        />
                    </button>
                </div>
               
            </div>
        </>
    );
};

export default HeroSection;