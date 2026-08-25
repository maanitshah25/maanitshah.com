"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full py-3 px-6 md:px-10 flex items-center justify-between bg-white/90 dark:bg-black/90 backdrop-blur-sm z-10 shadow-sm">
            <a href="#" className="text-lg md:text-xl font-semibold text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 font-serif">
                MHS.
            </a>
            <ul className="hidden md:flex space-x-8 items-center text-black dark:text-white text-sm">
                <li><a href="#about">About</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            <div className="flex items-center gap-3">
                <ThemeToggle />
                <a
                    href="https://drive.google.com/file/d/182eA__rtt7ejO7Np5k-r9Utglibu_Md8/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black dark:border-white text-black dark:text-white text-sm px-3.5 py-1.5 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
                >
                    Resume →
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
