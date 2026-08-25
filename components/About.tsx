"use client";

import React from "react";
import Image from "next/image";
import Picture1 from "../public/vietnam-2.jpg";
import Picture2 from "../public/grad.jpg";
import Picture3 from "../public/cluster-win.jpg";
import Picture5 from "../public/friends.jpg";
import Picture4 from "../public/vietnam-1.jpg";
import Picture6 from "../public/bungee.jpg";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-8">
      <p className="text-orange-500 text-xs md:text-sm font-medium uppercase tracking-widest font-serif">
        About
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold font-serif text-black dark:text-white mt-1 mb-6">
        A bit about me
      </h3>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-black dark:text-white font-serif">
          <p>
            I&apos;m a Computer Science student at UC Davis, minoring in Technology
            Management, who likes turning ideas into shipped products. I&apos;ve led
            sponsorship for a 1,000+ person hackathon at{" "}
            <span className="font-semibold">HackDavis</span>, engineered a local
            LLM agent stack at{" "}
            <span className="font-semibold">Tech Equity&apos;s AI Summit</span>, and
            built the core of StenoStudy at{" "}
            <span className="font-semibold">Icarus Development</span> and a lot more.
          </p>
          <p>
            Outside of code, I&apos;m usually on a soccer or cricket field, at the
            gym, hiking, or with headphones in, chasing the same balance of focus and
            fun that keeps my work interesting.
          </p>
        </div>

        <div className="grid grid-cols-4 grid-rows-3 gap-3 h-[380px] md:h-[420px]">
          <div className="relative col-start-1 col-span-2 row-start-1 row-span-2 rounded-xl overflow-hidden">
            <Image
              src={Picture1}
              alt="Vietnam1"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative col-start-3 col-span-1 row-start-1 row-span-1 rounded-xl overflow-hidden">
            <Image
              src={Picture2}
              alt="Grad"
              fill
              sizes="(max-width: 768px) 25vw, 12vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative col-start-4 col-span-1 row-start-1 row-span-2 rounded-xl overflow-hidden">
            <Image
              src={Picture3}
              alt="Cluster Win"
              fill
              sizes="(max-width: 768px) 25vw, 12vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative col-start-3 col-span-1 row-start-2 row-span-1 rounded-xl overflow-hidden">
            <Image
              src={Picture4}
              alt="As a kid"
              fill
              sizes="(max-width: 768px) 25vw, 12vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative col-start-1 col-span-2 row-start-3 row-span-1 rounded-xl overflow-hidden">
            <Image
              src={Picture5}
              alt="Portrait"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-50 col-start-3 col-span-2 row-start-3 row-span-1 rounded-xl overflow-hidden">
            <Image
              src={Picture6}
              alt="Grad"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
