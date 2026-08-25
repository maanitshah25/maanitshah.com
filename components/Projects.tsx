import React from "react";
import Image from "next/image";
import StudySpace from "../public/StudySpace4.png";
import Marketplace from "../public/Marketplace.png";
import FOMO from "../public/Fomo1.jpg";

const Project = () => {
  return (
    <section id="Projects" className="py-12 md:py-8">
      <p className="text-orange-500 text-xs md:text-sm font-medium uppercase tracking-widest font-serif">
        Work
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold font-serif text-black dark:text-white mt-1 mb-8">
        Projects
      </h3>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-10 font-serif">
        <div className="flex-1 order-2 md:order-1">
          <h4 className="text-xl font-serif font-semibold mb-1 text-black dark:text-white">StudySpace</h4>
          <p className="text-sm mb-3 text-orange-500">Web Development</p>
          <p className="text-sm md:text-base mb-4 leading-relaxed text-black dark:text-white">
            StudySpace aims to enhance the effectiveness of study sessions by providing rewards and
            integrating all the essential tools needed for productive learning, including a Pomodoro
            Timer, a To-Do List, and a Study Playlist.
          </p>
          <a
            href="https://github.com/maanitshah25/studyspace"
            className="inline-block border border-black dark:border-white text-black dark:text-white text-sm px-3.5 py-1.5 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Image src={StudySpace} alt="" className="w-full max-h-72 object-cover rounded-xl" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-10 font-serif">
        <div className="w-full md:w-1/2">
          <Image src={FOMO} alt="" className="w-full max-h-72 object-cover rounded-xl" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-serif font-semibold mb-1 text-black dark:text-white">FOMO</h4>
          <p className="text-sm mb-3 text-orange-500">App Development</p>
          <p className="text-sm md:text-base mb-4 leading-relaxed text-black dark:text-white">
            FOMO is an app designed to help UC Davis students easily browse and add events happening
            in the city of Davis, CA, and navigate through daily news and events, keeping them
            informed and engaged.
          </p>
          <a
            href="https://github.com/maanitshah25/Fomo"
            className="inline-block border border-black dark:border-white text-black dark:text-white text-sm px-3.5 py-1.5 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-4 font-serif">
        <div className="flex-1 order-2 md:order-1">
          <h4 className="text-xl font-serif font-semibold mb-1 text-black dark:text-white">Aggie Marketplace</h4>
          <p className="text-sm mb-3 text-orange-500">App Development</p>
          <p className="text-sm md:text-base mb-4 leading-relaxed text-black dark:text-white">
            A marketplace designed to facilitate the buying and selling of items among UC Davis
            students, providing them with an easy and efficient platform to conduct their
            transactions.
          </p>
          <a
            href="https://github.com/maanitshah25/marketplace"
            className="inline-block border border-black dark:border-white text-black dark:text-white text-sm px-3.5 py-1.5 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Image src={Marketplace} alt="" className="w-full max-h-72 object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Project;
