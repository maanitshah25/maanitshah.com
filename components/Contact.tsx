import React from "react";
import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="Contact">
      <div>
        <h3 className="text-4xl py-2 mt-14 text-white font-serif font-semibold">Contact Info</h3>
      </div>
      <div className="mb-4 font-serif text-lg">
        <p className="text-lg text-white w-8/12 ">
          If you have opportunities or are interested in collaboration, please email me. You can also connect on 
          social media for questions or just to say hi! My inbox is always open, and I'll try to get back as soon as
          possible.
        </p>
      </div>
      <div className="text-4xl flex justify-center gap-16 py-3 text-white">
        <a href="maanithshah1@gmail.com"><AiFillMail/></a>
        <a href="http://www.linkedin.com/in/maanit-shah"><FaLinkedin/></a>
        <a href="https://github.com/maanitshah25"><FaGithub/></a>
        <a href="https://www.instagram.com/_maanitshah?igsh=MXU2bjNjankwMTR5OQ%3D%3D&utm_source=qr"><FaInstagram/></a>
        <a href="https://discord.com/channels/maanitshah25"><FaDiscord/></a>
      </div>
    </section>
  );
};

export default Contact