"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaMagic,
  FaDharmachakra,
  FaGit,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import {
  SiTypescript,
  SiExpress,
  SiMysql,
  SiPostman,
  SiShadcnui,
  SiNetlify,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import Header from "../../components/ui/Header";

const TechStack = () => {
  return (
    <section
      id="tech"
      className="flex flex-col items-center text-center bg-black/80"
    >
      <header  className="mt-7 text-center">
        <Header
          as="h3"
          size="sm"
          className="text-white font-bold drop-shadow-md mt-10 tracking-wide"
        >
          I constantly try to improve
        </Header>
        <Header
          data-aos="fade-down"
          as="h1"
          size="lg"
          className="text-white font-bold drop-shadow-md mt-2"
        >
          <Header as="span" size="lg" gradient>
            My Tech
          </Header>{" "}
          Stack
        </Header>
      </header>

      <div className="flex flex-col items-start w-full p-5">
        {[
          {
            title: "Frontend",
            techs: [
              { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
              { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
              { icon: <FaReact className="text-cyan-400" />, name: "React" },
              {
                icon: <RiTailwindCssFill className="text-blue-400" />,
                name: "Tailwind CSS",
              },
              {
                icon: <IoLogoJavascript className="text-yellow-400" />,
                name: "JavaScript",
              },
              {
                icon: <RiNextjsFill className="text-white" />,
                name: "Next.js",
              },
              {
                icon: <FaDharmachakra className="text-sky-400" />,
                name: "Chakra UI",
              },
              { icon: <FaMagic className="text-pink-600" />, name: "Magic UI" },
              { icon: <SiShadcnui className="text-gray" />, name: "Shadcn UI" },
            ],
          },
          {
            title: "Backend",
            techs: [
              { icon: <FaNode className="text-green-500" />, name: "Node.js" },
              {
                icon: <SiExpress className="text-gray-400" />,
                name: "Express.js",
              },
              {
                icon: <DiMongodb className="text-green-600" />,
                name: "MongoDB",
              },
              { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
            ],
          },
          {
            title: "Deployment",
            techs: [
              {
                icon: <SiNetlify className="text-blue-400" />,
                name: "Netlify",
              },
              { icon: <IoLogoVercel className="text-white" />, name: "Vercel" },
              { icon: <FaAws className="text-orange-500" />, name: "AWS" },
            ],
          },
          {
            title: "Tools & more",
            techs: [
              { icon: <FaGit className="text-orange-500" />, name: "Git" },
              { icon: <FaGithub className="text-gray-400" />, name: "GitHub" },
              {
                icon: <SiPostman className="text-orange-400" />,
                name: "Postman",
              },
              {
                icon: <SiTypescript className="text-blue-500" />,
                name: "TypeScript",
              },
              {
                icon: <FaJava className="text-red-600" />,
                name: "Java",
              },
              {
                icon: <TbBrandFramerMotion className="text-blue-700" />,
                name: "TypeScript",
              },
            ],
          },
        ].map((section, index) => (
          <article  data-aos="fade-left" key={index} className="mt-5">
            <h2 className="text-2xl text-left font-extrabold drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent uppercase tracking-wider transition-transform duration-300 ease-in-out hover:scale-105">
              {section.title}
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center gap-4 mt-3">
              {section.techs.map((tech, idx) => (
                <li
                  key={idx}
                  className="relative border-2 border-gray-700 text-white flex items-center gap-2 bg-black/5 
                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-500/30 before:via-transparent before:to-sky-500/30 
                 before:blur-sm before:rounded-3xl px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110"
                >
                  <p className="flex items-center gap-2 text-white">
                    {tech.icon} {tech.name}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
