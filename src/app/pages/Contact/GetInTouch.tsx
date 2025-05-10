"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Header from "../../components/ui/Header";
import ContactForm from "./ContactForm";
import { FaTimes } from "react-icons/fa"; // Import close icon
import Image from "next/image";

const GetInTouch = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center py-16 px-4 md:px-10 relative overflow-hidden">
      {/* Flying Bird Animation */}
      <figure className="flying-bird relative w-full h-96"> 
  <Image
    src="/images/bg2.png"
    alt="Flying Bird"
    fill
    className="bird-animation object-contain"
  />
</figure>


      {/* Main Content */}
      <main
        className="w-full max-w-4xl flex flex-col items-center text-center"
      >
        <header>
          <Header
            as="h1"
            size="md"
            className="text-white font-bold drop-shadow-md mt-2"
          >
            FROM CONCEPT TO
          </Header>
          <Header as="span" size="md" gradient>
            CREATION
          </Header>
          <Header
            as="h1"
            size="lg"
            className="text-2xl md:text-4xl font-semibold mt-2"
          >
            LET'S{" "}
            <Header as="span" size="sm" gradient className="italic">
              MAKE IT
            </Header>{" "}
            HAPPEN!
          </Header>
        </header>

        {/* Get In Touch Button */}
        <nav className="mt-6">
          <button
            onClick={() => setIsFormVisible(true)}
            className="flex items-center gap-3 bg-black/5 hover:bg-white text-white hover:text-black px-6 py-3 border border-white rounded-full transition-all duration-300 relative group"
          >
            Get In Touch
            <span className="bg-white text-black p-2 rounded-full transition-all duration-300 transform group-hover:translate-x-2">
              <FaArrowRight size={16} />
            </span>
          </button>
        </nav>

        {/* Description */}
        <article className="mt-4 text-gray-300">
          <Header as="p" size="lg" data-aos="fade-right">
            I'm available for full-time roles & freelance projects.
          </Header>
          <Header
            as="p"
            size="lg"
            data-aos="fade-right"
            className="mt-2 block text-gray-400"
          >
            I thrive on crafting dynamic web applications and delivering
            seamless user experiences.
          </Header>
        </article>
      </main>

      {/* Contact Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-black/55 text-black p-5 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setIsFormVisible(false)}
              className="absolute top-2 right-2 text-white p-2  rounded-full hover:text-red-600 transition mt-25"
            >
              <FaTimes size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default GetInTouch;
