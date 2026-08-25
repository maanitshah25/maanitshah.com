import React from "react";
import { FaLinkedin, FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="Contact" className="py-12 md:py-16">
      <p className="text-orange-500 text-xs md:text-sm font-medium uppercase tracking-widest font-serif">
        Get in touch
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold font-serif text-black dark:text-white mt-1 mb-4">
        Contact
      </h3>
      <p className="text-sm md:text-base leading-relaxed text-black dark:text-white max-w-xl font-serif">
        Have an opportunity or idea worth exploring? My inbox is always open —
        reach out by email or say hi on social.
      </p>
      <div className="text-2xl md:text-3xl flex gap-8 py-6">
        <a
          href="mailto:maanithshah1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <AiFillMail />
        </a>
        <a
          href="http://www.linkedin.com/in/maanit-shah"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/maanitshah25"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_maanitshah?igsh=MXU2bjNjankwMTR5OQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com/channels/maanitshah25"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
      </div>
    </section>
  );
};

export default Contact;
