"use client";

import React, { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { SparklesText } from "@/registry/magicui/sparkles-text";
import { ShimmerButton } from "@/registry/magicui/shimmer-button";
import Image from "next/image";
import Header from "./ui/Header";
import ContactForm from "../pages/Contact/ContactForm";
import { FaTimes } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("bhawanajadaun0001@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      data-aos="fade-down"
      className="flex flex-col items-center justify-center h-screen px-4  text-center bg-black"
    >
      {/* Main Heading */}

      <Header as="h1" size="lg" className="font-semibold mt-25">
        <SparklesText text="I help founders turn ideas " />
        <SparklesText text="into seamless digital experiences" />
      </Header>

      {/* Subheading with Profile Image */}
      <Header
        as="h2"
        size="sm"
        className="text-green-600 font-medium mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
      >
        Hello, I&apos;m Bhawana Jadaun
        <Image
          src="/images/hero.jpg"
          alt="Bhawana Jadaun"
          width={56}
          height={56}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full"
        />
        <Header as="span" size="sm" className="font-extrabold text-sky-800">
          {" "}
          <motion.span
            initial={{ x: -20 }}
            animate={{ x: 20 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
            className="gradient-text"
          >
            <Typewriter
              words={[
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.span>
        </Header>
      </Header>

      {/* Button Container */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 w-full max-w-md sm:max-w-xl">
        {/* Connect Button */}
        <ShimmerButton
          onClick={() => setIsFormVisible(true)}
          className="w-full sm:w-auto rounded-full bg-black/5 shadow-lg text-white font-medium px-6 py-3"
        >
          Let&apos;s Connect
        </ShimmerButton>

        {/* Copy Email Button */}
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto text-sm sm:text-base rounded-full text-white border border-gray-500 hover:bg-gray-700 transition shadow-lg"
        >
          {copied ? <ClipboardCheck size={20} /> : <Clipboard size={20} />}
          {copied ? "Copied!" : "bhawanajadaun0001@gmail.com"}
        </button>
      </div>

      {/* Screen Reader Notification */}
      <span className="sr-only" aria-live="polite">
        {copied && "Email copied to clipboard"}
      </span>

      {/* Contact Form Modal */}
      {isFormVisible && (
        <div className="fixed mt-20 inset-0 flex items-center justify-center bg-black/50  bg-opacity-50 p-4 sm:p-6 z-50">
          <div className="bg-black/55 text-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsFormVisible(false)}
              className="absolute top-3 right-3  text-white hover:text-red-500 transition mt-20"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Get in Touch</h2>
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
