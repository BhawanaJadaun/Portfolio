"use client";
import { useEffect, useState } from "react";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import Header from "../../components/ui/Header";
import Image from "next/image";
import { IoMail } from "react-icons/io5";

const About = () => {
  const controls = useAnimation();
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!isTouched && event.clientX > 100) setIsTouched(true);

      if (isTouched) {
        controls.start({
          x: event.clientX - 40,
          transition: { type: "spring", stiffness: 100, damping: 10 },
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [controls, isTouched]);

  return (
    <main
      id="about"
      className="bg-gradient-to-b from-black to-gray-900 text-white px-12 md:px-12 py-12 md:py-20 lg:px-16 lg:py-24 relative overflow-hidden"
    >
      <section className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-8">
        {/* Custom Cursor (Hidden on Small Screens) */}
        <motion.img
          src="/images/stick.png"
          alt="Custom Stick Cursor"
          animate={controls}
          initial={{ x: -100 }}
          className="w-32 md:w-64 absolute pointer-events-none opacity-90 top-1/2 -translate-y-1/2 hidden md:block z-0"
        />

        {/* Image Section */}
        <figure className="mb-8 lg:mb-0 relative w-72 h-72 md:w-96 md:h-96">
          <Image
            src="/images/main.png"
            alt="Bhawana Jadaun's Profile"
            width={300} // Explicit width
            height={300} // Explicit height
            className="rounded-lg shadow-xl object-cover"
          />
        </figure>

        {/* Text Section */}
        <article className="max-w-2xl text-center lg:text-left space-y-6">
          <header>
            <Header as="h3" size="lg" className="tracking-wide text-gray-400">
              MORE ABOUT ME
            </Header>
            <Header
              as="h1"
              size="lg"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
            >
              Full-Stack Developer and a little bit of{" "}
              <Header as="span" size="lg" gradient className="font-[cursive]">
                everything
              </Header>
            </Header>
          </header>

          <p className="text-gray-300 text-base md:text-lg">
            I&apos;m <b className="text-white">Bhawana Jadaun</b>, a proactive
            full-stack developer passionate about creating dynamic web
            experiences. From frontend to backend, I thrive on solving complex
            problems with clean, efficient code. My expertise spans React,
            Next.js, and Node.js, and I&apos;m always eager to learn more.
          </p>

          <p className="text-gray-300 text-base md:text-lg">
            When I&apos;m not coding, I&apos;m exploring new ideas and staying
            curious. Life&apos;s about balance, and I love embracing every part
            of it.
          </p>

          <p className="text-gray-300 text-base md:text-lg">
            I believe in waking up each day eager to make a difference!
          </p>

          {/* Social Links */}
          <section className="mt-6">
            <header className="text-lg md:text-xl flex items-center justify-center lg:justify-start gap-2">
              <span>Connect with me</span> <IoEllipsisHorizontalOutline />
            </header>
            <nav className="flex gap-4 mt-2 justify-center lg:justify-start  z-10">
              <a
                href="https://github.com/BhawanaJadaun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-3xl transition"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/bhawana-jadaun-801674307/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-3xl transition"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:bhawanajadaun0001@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-white text-3xl transition"
              >
                <IoMail />
              </a>
            </nav>
          </section>
        </article>
      </section>
    </main>
  );
};

export default About;
