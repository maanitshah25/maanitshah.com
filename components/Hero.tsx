"use client";

import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Myself from "../public/myself1-img.jpg";

const Hero = () => {
    return (
        <section className="min-h-screen text-center p-10 mt-4">
            <div className="relative mx-auto w-64 h-64 mt-16 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <Image src={Myself} alt="" className="rounded-full" />
            </div>
            <h2 className="text-4xl py-1 text-white font-semibold font-serif">
                Hello, I am Maanit
            </h2>
            <h3 className="text-xl text-orange-500 font-medium font-serif">
            <Typewriter
                words={[
                    "Full-stack Developer",
                    "AI/ML",
                    "UI/UX",
                    "Mobile/Web",
                    "Designer",
                    "Creative Problem Solver",
                    "Leader",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={2000}
            />
            </h3>
            <p className="text-lg py-4 leading-8 text-gray-300 max-w-3xl mx-auto font-serif">
                A Computer Science and Technology Management student at University of California, Davis, looking 
                for an opportunity in a dynamic organization to gain a better insight into the real-world 
                applications of Artificial Intelligence, Information Technology and Web Development.
            </p>
        </section>
    );
};

export default Hero