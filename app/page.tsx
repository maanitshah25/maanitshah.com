"use client";

import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreeDShape from "@/components/ThreeDShape";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
        
export default function Home() {
  return (
    <div>
      <Head>
        <title>Maanit Shah Portfolio</title>
        <meta name="description" content="Welcome to Maanit Shah's personal portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black px-10">
        <Navbar />
        <Hero />
        <section id="Three" className="py-6">
          <div className="relative mx-auto w-full h-64">
            <ThreeDShape />
          </div>
        </section>        
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}