import React from "react";
import Image from "next/image";
import { BsFillPinFill, BsBagFill, BsCalendar2 } from "react-icons/bs";
import GDSC from "../public/GDSC-img.jpeg";
import AiSummit from "../public/AiSummit-img.jpeg";
import Icarus from "../public/Icarus-img.jpeg";
import HackDavis from "../public/hackdavis.png"

const Experience = () => {
  return (
    <section id="Experience" className="py-12 md:py-8">
      <p className="text-orange-500 text-xs md:text-sm font-medium uppercase tracking-widest font-serif">
        Career
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold font-serif text-black dark:text-white mt-1 mb-3">
        Experience
      </h3>
      <p className="text-sm md:text-base mb-4 font-serif text-black dark:text-white max-w-xl">
        Always eager to find new opportunities and explore different areas. Connect with me on
        LinkedIn to keep up with my career journey!
      </p>
      <div className="flex gap-3 mb-8">
        <a
          href="http://www.linkedin.com/in/maanit-shah"
          className="border border-black dark:border-white text-black dark:text-white text-sm px-3.5 py-1.5 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
        >
          LinkedIn →
        </a>
        <a
          href="https://drive.google.com/file/d/182eA__rtt7ejO7Np5k-r9Utglibu_Md8/view?usp=sharing"
          className="border border-black dark:border-white text-black dark:text-white text-sm px-3.5 py-1.5 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
        >
          View Resume →
        </a>
      </div>

      <div className="mb-6 font-serif text-black dark:text-white">
        <div className="flex items-center mb-3">
          <Image src={HackDavis} alt="" className="h-11 w-11 mr-3 rounded-full object-cover" />
          <div>
            <h4 className="text-lg font-semibold">HackDavis</h4>
            <p className="text-sm text-orange-500">Director</p>
          </div>
        </div>
        <p className="mb-3 text-sm md:text-base leading-relaxed">
          Led sponsorship for UC Davis' <span className="font-semibold">1000+ attendee hackathon</span>, raising 
          about <span className="font-semibold">$27,000</span> across <span className="font-semibold">10-12</span> sponsors 
          including <span className="font-semibold">Anthropic, Figma, and Reconstruct.</span> Built an automated workflow 
          to research and prioritize prospective sponsors, improving outreach response rates.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-black/70 dark:text-white/70">
          <div className="flex items-center gap-1.5">
            <BsFillPinFill />
            <span>Davis, CA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BsCalendar2 />
            <span>June 2025 - Present</span>
          </div>
        </div>
      </div>

      <div className="mb-6 font-serif text-black dark:text-white">
        <div className="flex items-center mb-3">
          <Image src={AiSummit} alt="" className="h-11 w-11 mr-3 rounded-full object-cover" />
          <div>
            <h4 className="text-lg font-semibold">TechEquity</h4>
            <p className="text-sm text-orange-500">AI Systems Engineer</p>
          </div>
        </div>
        <p className="mb-3 text-sm md:text-base leading-relaxed">
          Built a custom PowerShell benchmark harness to evaluate three local LLMs, driving team adoption
          of <span className="font-semibold">qwen3:8b</span> as primary model 
          and <span className="font-semibold">phi4-mini</span> as backup.
          Engineered a local AI agent stack, <span className="font-semibold">ClawMax</span> and <span className="font-semibold">OpenClaw</span> on <span className="font-semibold">WSL</span> with 
          a Windows to Ollama network bridge, enabling the team to run and orchestrate LLM agents on shared infrastructure.
          Built an internal AI meeting note agent, producing structured Slack summaries and an external version drafting 
          client emails with sensitive content guardrails.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-black/70 dark:text-white/70">
          <div className="flex items-center gap-1.5">
            <BsFillPinFill />
            <span>Mountain View, CA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BsCalendar2 />
            <span>July 2024 - Present</span>
          </div>
        </div>
      </div>

      <div className="mb-6 font-serif text-black dark:text-white">
        <div className="flex items-center mb-3">
          <Image src={Icarus} alt="" className="h-11 w-11 mr-3 rounded-full object-cover" />
          <div>
            <h4 className="text-lg font-semibold">Icarus Development</h4>
            <p className="text-sm text-orange-500">Software Developer</p>
          </div>
        </div>
        <p className="mb-3 text-sm md:text-base leading-relaxed">
          Built the core of StenoStudy, an <span className="font-semibold">AI lecture-summarization tool</span> for a UC Davis professor that turned recorded 
          lectures into structured notes. The product was <span className="font-semibold">later acquired by CourseAssist.</span>
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-black/70 dark:text-white/70">
          <div className="flex items-center gap-1.5">
            <BsFillPinFill />
            <span>Davis, CA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BsCalendar2 />
            <span>August 2024 - February 2025</span>
          </div>
        </div>
      </div>

      <div className="mb-4 font-serif text-black dark:text-white">
        <div className="flex items-center mb-3">
          <Image src={GDSC} alt="" className="h-11 w-11 mr-3 rounded-full object-cover" />
          <div>
            <h4 className="text-lg font-semibold">Google Developer Student Club</h4>
            <p className="text-sm text-orange-500">Technical Lead</p>
          </div>
        </div>
        <p className="mb-3 text-sm md:text-base leading-relaxed">
          Technical lead for multiple team projects, owning architecture & guiding a small team from concept to shipped 
          product across each cycle. Three led projects earned internal Best-in-category 
          recognition (UX, Design, Advanced Project) at GDSC showcases.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-black/70 dark:text-white/70">
          <div className="flex items-center gap-1.5">
            <BsFillPinFill />
            <span>Davis, CA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BsCalendar2 />
            <span>September 2022 - June 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
