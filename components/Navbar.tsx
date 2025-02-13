"use client";

import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full py-4 flex justify-between bg-black z-10 shadow-md">
            <h1>
                <a href="#" className="text-2xl font-semibold text-white ml-8 font-serif">
                    Maanit Himanshu Shah.
                </a>
            </h1>
            <ul className="flex space-x-10 items-center pr-20">
                <li><a href="#about" className="text-white text-lg">About</a></li>
                <li><a href="#Projects" className="text-white text-lg">Projects</a></li>
                <li><a href="#Experience" className="text-white text-lg">Experience</a></li>
                <li><a href="#Contact" className="text-white text-lg">Contact</a></li>
            </ul>
            <div className="mr-8 mt-1">
                <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full">
                    <a href="https://drive.google.com/file/d/182eA__rtt7ejO7Np5k-r9Utglibu_Md8/view?usp=sharing">View Resume →</a>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;