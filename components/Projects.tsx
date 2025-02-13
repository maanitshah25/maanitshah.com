import React from "react";
import Image from "next/image";
import StudySpace from '../public/StudySpace4.png'
import Marketplace from '../public/Marketplace.png'
import FOMO from '../public/Fomo1.jpg'

const Project = () => {
    return (
        <section id="Projects" className="py-6">
          <h3 className="text-4xl mb-4 font-bold font-serif text-white">
            Projects
          </h3>
          <div className="flex items-center bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-serif font-semibold mb-2">StudySpace</h2>
              <h3 className="text-lg font-serif mb-6 text-orange-500">Web Development</h3>
              <p className="text-lg mb-6 mr-10 font-serif">
              StudySpace aims to enhance the effectiveness of study sessions by providing rewards and integrating 
              all the essential tools needed for productive learning, including a Pomodoro Timer, a To-Do List, 
              and a Study Playlist.
              </p>
              <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mt-4">
                <a href="https://github.com/maanitshah25/studyspace">View Project →</a>
              </button>
            </div>
            <div className="flex-col">
              <Image src={StudySpace} alt="" className="w-full max-h-96 flex object-cover rounded-xl" />
            </div>
          </div>
          <br></br>
          <div className="flex items-center bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex-col w-auto">
              <Image src={FOMO} alt="" className="w-full max-h-96 object-cover rounded-xl" />
            </div>            
            <div className="w-1/2 pl-8">
              <h2 className="text-3xl font-serif font-semibold mb-2">FOMO</h2>
              <h3 className="text-lg font-serif mb-6 text-orange-500">App Development</h3>
              <p className="text-lg mb-6 font-serif">
              FOMO is an app designed to help UC Davis students easily browse and add events happening in the 
              city of Davis, CA. Additionally, users can navigate through daily news and events, keeping them 
              informed and engaged with the latest happenings around them.
              </p>
              <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mt-4">
                <a href="https://github.com/maanitshah25/Fomo">View Project →</a>
              </button>
            </div>
          </div>
          <br></br>
          <div className="flex items-center bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-serif font-semibold mb-2">Aggie Marketplace</h2>
              <h3 className="text-lg font-serif mb-6 text-orange-500">App Development</h3>
              <p className="text-lg mb-6 mr-10 font-serif">
              A marketplace designed to facilitate the buying and selling of items among UC Davis students, 
              providing them with an easy and efficient platform to conduct their transactions.  
              </p>
              <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mt-4">
                <a href="https://github.com/maanitshah25/marketplace">View Project →</a>
              </button>
            </div>
            <div className="flex-col">
              <Image src={Marketplace} alt="" className="w-full max-h-96 object-cover rounded-xl" />
            </div>
          </div>
        </section>
    );
};

export default Project