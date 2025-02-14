"use client";

import React from "react";
import Image from "next/image";
import Baby from '../public/baby-img.jpg'
import Family from '../public/family-img.jpg'
import Friends from '../public/friends-img.jpg'
import Myself4 from '../public/myself4-img.jpg'
import Certificate from '../public/certificate-img.jpg'
import Myself5 from '../public/myself5-img.jpg'
import Certificate1 from '../public/certificate1-img.jpg'

const About = () => {
  return (
    <section id="about" className="py-6">
      <div className="dark:bg-black bg-white text-black dark:text-white p-8 rounded-lg">
        <h3 className="text-4xl mb-4 font-bold text-black dark:text-white font-serif">
          About Me
        </h3>
          <p className="text-lg mb-6 leading-8 text-black dark:text-white font-serif">
            I am a Third Year Computer Science student at the University of California, Davis, with a minor in 
            Tech Management. Passionate about leveraging technology to solve real-world problems, I have 
            developed a versatile skill set that includes proficiency in Python, C++, JavaScript, and frameworks
            such as React Native and Node.js.
          </p>
          <p className="text-lg mb-6 leading-8 text-black dark:text-white font-serif">
            My journey in tech began with UC Davis coding clubs and hands-on projects, where I gained valuable experience 
            in software development and database management. As the Technical Lead for the Google Developer 
            Student Club, I have honed my leadership skills while collaborating on innovative solutions. I am 
            eager to continue expanding my expertise and contribute to impactful projects.
          </p>
          <p className="text-lg mb-6 leading-8 text-black dark:text-white font-serif">
            Outside of work, you can often find me playing sports such as Soccer, Cricket, Squash or Volleyball. 
            I&apos;m a massive music fanatic and have songs playing on my headphones throughout the day. 
            I love going to the gym and hanging out with friends, 
            enjoying the simple pleasures of life. Whether it&apos;s an intense game or a relaxing afternoon, these 
            activities keep me balanced and inspired. I believe in capturing such unplanned moments by
            finding joy in both the excitement of sports and the tranquility of leisure.
          </p>
          
          <div className="flex justify-center space-x-6 mt-2">
            <div className="w-52 h-52 rounded-lg overflow-hidden">
              <Image src={Baby} alt="Image 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-52 h-52 rounded-lg overflow-hidden">
              <Image src={Family} alt="Image 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-52 h-52 rounded-lg overflow-hidden">
              <Image src={Friends} alt="Image 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-52 h-52 rounded-lg overflow-hidden">
              <Image src={Myself4} alt="Image 4" className="w-full h-full object-cover" />
            </div>
            <div className="w-52 h-52 rounded-lg overflow-hidden">
              <Image src={Myself5} alt="Image 5" className="w-full h-full object-cover" />
            </div>
            <div className="w-52 h-52 rounded-lg overflow-hidden">
              <Image src={Certificate} alt="Image 6" className="w-full h-full object-cover" />
            </div>
            <div className="w-52 h-52 rounded-lg overflow-hidden">
              <Image src={Certificate1} alt="Image 8" className="w-full h-full object-cover" />
            </div>
          </div>
      </div>
    </section>
  );
};

export default About