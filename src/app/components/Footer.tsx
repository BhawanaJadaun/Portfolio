"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-6 w-full border-t border-gray-900 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left">
      {/* Logo */}
      <div className="flex justify-center sm:justify-start items-center">
        <Image src="/images/LOGO.png" alt="Logo" width={30} height={30} />
      </div>

      {/* Copyright */}
      <p className="text-xs sm:text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Bhawana Jadaun. All Rights Reserved.
      </p>

      {/* Social Media Links */}
      <nav aria-label="Social media">
        <ul className="flex justify-center sm:justify-end gap-4 sm:gap-6">
          {[
            {
              href: "https://www.linkedin.com/in/bhawana-jadaun-801674307/",
              icon: <FaLinkedin size={20} />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/BhawanaJadaun",
              icon: <FaGithub size={20} />,
              label: "GitHub",
            },
            {
              href: "mailto:bhawanajadaun0001@gmail.com",
              icon: <FaEnvelope size={20} />,
              label: "Email",
            },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={item.label}
              >
                <div className="p-3 rounded-full border border-gray-400 transition-all duration-300 group-hover:bg-gray-500 group-hover:text-black">
                  {item.icon}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
