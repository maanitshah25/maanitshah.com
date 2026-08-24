"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Myself from "../public/myself1-img.jpg";

const ROLES = [
    "Full-stack Developer",
    "AI/ML Engineer",
    "UI/UX Designer",
    "Mobile & Web Developer",
    "Creative Problem Solver",
    "Leader",
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 2400);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen px-6 md:px-16 pt-32 pb-16 flex items-center">
            <div className="mx-auto w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-20">
                {/* Photo */}
                <div className="relative shrink-0 mx-auto md:mx-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 via-orange-300 to-transparent blur-2xl opacity-40 dark:opacity-30 scale-110" />
                    <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-[3px] bg-gradient-to-tr from-orange-500 to-orange-200 dark:to-orange-900">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-black">
                            <Image
                                src={Myself}
                                alt="Maanit Himanshu Shah"
                                className="w-full h-100 object-cover rounded-full hover:scale-105 transition-all duration-300"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Text */}
                <div className="text-center md:text-left flex-1">
                    <p className="text-orange-500 font-medium tracking-wide uppercase text-sm mb-2 font-serif">
                        Hey, I&apos;m
                    </p>
                    <h2 className="text-4xl md:text-5xl text-black dark:text-white font-semibold font-serif">
                        Maanit Himanshu Shah
                    </h2>

                    <div className="h-8 md:h-9 mt-3 overflow-hidden">
                        <p
                            key={roleIndex}
                            className="text-lg md:text-xl text-orange-500 font-medium font-serif animate-fade-slide"
                        >
                            {ROLES[roleIndex]}
                        </p>
                    </div>

                    <p className="italic text-2xl md:text-3xl font-serif text-black dark:text-white mt-6 border-l-4 border-orange-500 pl-4">
                        &ldquo;Compiling ideas into impact.&rdquo;
                    </p>

                    <p className="text-base md:text-lg py-6 leading-8 text-black dark:text-white max-w-2xl mx-auto md:mx-0 font-serif">
                        A Computer Science and Technology Management student at University of California, Davis,
                        looking for an opportunity in a dynamic organization to gain a better insight into the
                        real-world applications of Artificial Intelligence, Information Technology and Web
                        Development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
