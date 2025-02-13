import React from "react";
import Image from "next/image";
import { BsFillPinFill, BsBagFill, BsCalendar2 } from "react-icons/bs";
import GDSC from '../public/GDSC-img.jpeg'
import AiSummit from '../public/AiSummit-img.jpeg'
import Icarus from '../public/Icarus-img.jpeg'

const Experience = () => {
    return (
        <section id="Experience">
          <div>
            <h3 className="text-4xl py-2 mt-14 text-white font-serif font-semibold">Experience</h3>
          </div>
          <p className="text-lg mb-2 font-serif">
            Always eager to find new opportunities and explore different areas. Connect with me on LinkedIn to 
            keep up with my career journey!
          </p>
          <div className="flex mb-8 space-x-4">
            <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mt-4">
              <a href="http://www.linkedin.com/in/maanit-shah">LinkedIn →</a>
            </button>
            <button className="flex items-center bg-transparent border border-white text-white px-4 py-2 rounded-full mt-4">
              <a href="https://drive.google.com/file/d/182eA__rtt7ejO7Np5k-r9Utglibu_Md8/view?usp=sharing">View Resume →</a>
            </button>
          </div>
          <div className="bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex items-center mb-4">
              <Image src={Icarus} alt="" className="h-16 w-16 mr-4 rounded-full" />
              <div>
                <h3 className="text-3xl font-bold">Icarus Development</h3>
                <p className="text-xl text-orange-500">Software Developer</p>
              </div>
            </div>
            <p className="mb-4 font-serif text-lg">
              Developed a lecture summarization web application utilizing Python, JavaScript, Node.js, 
              TypeScript, and Amazon Web Services to streamline access to educational content and improve user 
              efficiency. Additionally, I created immersive audio for the game &quot;The Come Up&quot; using FL Studio, 
              enhancing the overall auditory experience. Through collaboration with a team of over 30 members, 
              I strengthened my multitasking abilities and teamwork skills by fostering effective communication 
              and project management.
            </p>
            <div className="flex items-center text-sm text-white">
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsBagFill/></span>
                <span className="ml-2">Internship</span>
              </div>
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsFillPinFill/></span>
                <span className="ml-2">Davis, CA</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons-outlined"><BsCalendar2/></span>
                <span className="ml-2">August 2024 - Present</span>
              </div>
            </div>
          </div>
          <div className="bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex items-center mb-4">
              <Image src={AiSummit} alt="" className="h-16 w-16 mr-4 rounded-full" />
              <div>
                <h3 className="text-3xl font-bold">Ai Summit</h3>
                <p className="text-xl text-orange-500">Tech Outreach Analyst</p>
              </div>
            </div>
            <p className="mb-4 font-serif text-lg">
              Enhanced speaker outreach for the AI Summit by implementing a Custom GPT Model, significantly 
              improving communication efficiency. Additionally, I automated data consolidation using Google 
              Apps Script, which increased data accuracy and reduced processing time. My research into over 100 
              emerging AI and robotics companies helped identify potential speakers, ensuring a seamless 
              execution of the summit. I also optimized CRM workflows and refined targeted email strategies, 
              leading to improved speaker engagement and response rates.
            </p>
            <div className="flex items-center text-sm text-white">
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsBagFill/></span>
                <span className="ml-2">Internship</span>
              </div>
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsFillPinFill/></span>
                <span className="ml-2">Mountain View, CA</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons-outlined"><BsCalendar2/></span>
                <span className="ml-2">July 2024 - November 2024</span>
              </div>
            </div>
          </div>
          <div className="bg-transparent border border-white text-white p-6 rounded-lg shadow-lg mb-6 font-serif">
            <div className="flex items-center mb-4">
              <Image src={GDSC} alt="" className="h-16 w-16 mr-4 rounded-full" />
              <div>
                <h3 className="text-3xl font-bold">Google Developer Student Club</h3>
                <p className="text-xl text-orange-500">Technical Lead</p>
              </div>
            </div>
            <p className="mb-4 font-serif text-lg">
              Developed multiple unique Web-Development and App-Development projects. Came up with solutions, including
              a working progress bar and linking Spotify API. Acquired multiple awards for Best product pitch and Best 
              User Experience.
            </p>
            <div className="flex items-center text-sm text-white">
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsBagFill/></span>
                <span className="ml-2">Part-time</span>
              </div>
              <div className="flex items-center mr-6">
                <span className="material-icons-outlined"><BsFillPinFill/></span>
                <span className="ml-2">Davis, CA</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons-outlined"><BsCalendar2/></span>
                <span className="ml-2">September 2022 - June 2024</span>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Experience