import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import StudySpace from "../public/StudySpace4.png";
import Marketplace from "../public/Marketplace.png";
import FOMO from "../public/Fomo1.jpg";

type ProjectItem = {
  title: string;
  tag: string;
  description: string;
  github?: string;
  image?: StaticImageData;
  placeholder?: boolean;
};

const PROJECTS: ProjectItem[] = [
  {
    title: "StudySpace",
    tag: "Web Development",
    description:
      "A gamified study platform that rewards focused time with points and a leaderboard, pairing a Pomodoro timer with progress-based incentives.",
    github: "https://github.com/maanitshah25/studyspace",
    image: StudySpace,
  },
  {
    title: "FOMO",
    tag: "App Development",
    description:
      "An event-discovery app for UC Davis students that surfaces nearby events with ML-driven personalization and real-time listings.",
    github: "https://github.com/maanitshah25/Fomo",
    image: FOMO,
  },
  {
    title: "Aggie Marketplace",
    tag: "App Development",
    description:
      "A marketplace that makes buying and selling items among UC Davis students easy and efficient.",
    github: "https://github.com/maanitshah25/marketplace",
    image: Marketplace,
  },
  {
    title: "Signal",
    tag: "TBD",
    description: "Coming Soon.",
    placeholder: true,
  },
  {
    title: "WorkforceOS",
    tag: "TBD",
    description: "Coming Soon.",
    placeholder: true,
  },
];

const Project = () => {
  return (
    <section id="Projects" className="py-12 md:py-16">
      <p className="text-orange-500 text-xs md:text-sm font-medium uppercase tracking-widest font-serif">
        Work
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold font-serif text-black dark:text-white mt-1 mb-8">
        Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {PROJECTS.map((project, i) => (
          <div key={i} className="group">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              {project.placeholder ? (
                <div className="w-full h-full flex items-center justify-center rounded-xl border-2 border-dashed border-black/15 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.03]">
                  <span className="text-xs uppercase tracking-widest text-black/40 dark:text-white/40 font-serif">
                    Coming soon
                  </span>
                </div>
              ) : (
                <Image
                  src={project.image as StaticImageData}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>

            <div className="flex items-center justify-between mt-4">
              <h4
                className={`text-lg font-semibold font-serif ${
                  project.placeholder
                    ? "text-black/40 dark:text-white/40 italic"
                    : "text-black dark:text-white"
                }`}
              >
                {project.title}
              </h4>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="text-black dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
              )}
            </div>
            <p className="text-sm text-orange-500 mt-0.5 font-serif">{project.tag}</p>
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/70 mt-2 font-serif">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
