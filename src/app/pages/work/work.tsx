"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaReact, FaNodeJs, FaStar } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiShadcnui } from "react-icons/si";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { CgArrowTopRightO } from "react-icons/cg";
import Header from "../../components/ui/Header";

const Work = () => {
  return (
    <section id="work" className="p-5 bg-black/80 mt-12">
      <div data-aos="fade-right" className="text-center mt-5 sm:mt-20">
        <Header
          as="h3"
          size="sm"
          className="text-white font-bold drop-shadow-md"
        >
          FEATURED CASE STUDIES
        </Header>
        <Header
          as="h1"
          size="lg"
          className="text-white font-bold drop-shadow-md mt-2"
        >
          <Header as="span" size="lg" gradient>
            Current
          </Header>{" "}
          work
        </Header>
      </div>

      {[
        {
          title: "Prescripto",
          description:
            "Developed Prescripto, a doctor appointment app built with the MERN stack.",
          features: [
            "Admin panel where admins can add and update doctor profiles.",
            "Doctor panel allowing access using email and password.",
            "Doctors can update their profiles.",
          ],
          techStack: [
            { icon: FaReact, name: "React.js" },
            { icon: RiTailwindCssFill, name: "Tailwind CSS" },
            { icon: FaNodeJs, name: "Node.js" },
            { icon: SiExpress, name: "Express.js" },
          ],
          image: "/images/Prescripto.png",
          bgColor: "bg-sky-900/40 border-sky-950",
          link: "https://prescriptofrontend.vercel.app/",
          github: "https://github.com/BhawanaJadaun/Prescripto",
        },
        {
          title: "FitHub",
          description:
            "FitHub is a gym listing platform where users can add their gym.",
          features: [
            "Users can explore listed gyms.",
            "Users can submit an enquiry request to the admin to add their gym.",
            "Admin reviews the request and publishes the gym on the platform.",
          ],
          techStack: [
            { icon: FaReact, name: "React.js" },
            { icon: RiTailwindCssFill, name: "Tailwind CSS" },
            { icon: FaNodeJs, name: "Node.js" },
            { icon: SiExpress, name: "Express.js" },
            { icon: SiShadcnui, name: "ShadCN UI" },
          ],
          image: "/images/FitHub.png",
          bgColor: "bg-cyan-800/45 border-cyan-950",
          link: "https://your-link-here.com",
          github: "https://github.com/BhawanaJadaun/Fithub",
        },
      ].map((project, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="flex flex-col-reverse md:flex-row md:items-center gap-10 lg:gap-10 mt-8"
        >
          {/* Image Container */}
          <div
            className={`p-3 sm:p-5 rounded-2xl border-2 md:w-lg lg:w-xl ${project.bgColor}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-auto rounded-xl hover-rotate-3d transition-transform"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center gap-4 md:max-w-[500px] lg:max-w-[600px]">
            <h1 className="text-3xl flex items-center gap-2 text-sky-500">
              <MdOutlineHorizontalRule className="w-7 font-extrabold" />
              {project.title}
              <Link href={project.link} target="_blank">
                <CgArrowTopRightO className="text-white hover:text-sky-500 cursor-pointer" />
              </Link>
              <Link href={project.github} target="_blank">
                <FaGithub className="text-white hover:text-sky-500 cursor-pointer" />
              </Link>
            </h1>

            <p className="text-white ml-7">{project.description}</p>

            <ul className="text-white list-disc pl-5 space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaStar className="text-sky-600" /> {feature}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 lg:gap-1.5 xl:gap-2 mt-4 p-2">
              {project.techStack.map(({ icon: Icon, name }, i) => (
                <div
                  key={i}
                  className="relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-3xl border-2 border-gray-700 text-white flex items-center gap-1 sm:gap-1.5 bg-black/5 
       before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-500/30 before:via-transparent before:to-sky-500/30 before:blur-sm before:rounded-3xl"
                >
                  <Icon className="text-sky-400 text-sm sm:text-base" />
                  <span className="text-xs sm:text-sm font-semibold">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Work;
