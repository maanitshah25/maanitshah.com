"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full py-4 flex justify-between bg-white dark:bg-black  z-10 shadow-md">
            <h1>
                <a href="#" className="text-2xl font-semibold text-black dark:text-white ml-8 font-serif">
                    Maanit Himanshu Shah.
                </a>
            </h1>
            <ul className="flex space-x-10 items-center pr-20 text-black dark:text-white text-lg">
                <li><a href="#about">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            <div className="mr-8 mt-1">
                <button className="flex items-center bg-transparent border border-black dark:border-white text-black dark:text-white px-4 py-2 rounded-full">
                    <a href="https://drive.google.com/file/d/182eA__rtt7ejO7Np5k-r9Utglibu_Md8/view?usp=sharing">View Resume →</a>
                </button>
            </div>
            <div className="absolute top-0 right-0 mt-6 mr-52">
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;