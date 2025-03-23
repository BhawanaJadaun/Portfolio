"use client";
import React from "react";
import { MdStarRate } from "react-icons/md";

const words = [
  "Performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

const TapeSection = () => {
  return (
    <div className="py-16 relative overflow-hidden bg-black/95">
      {/* First Moving Tape (Left to Right) */}
      <div className="absolute p-2 top-0 left-0 w-full bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-6">
        <div className="flex gap-4 py-3 animate-marquee whitespace-nowrap">
          {words.map((word, index) => (
            <div key={index} className="inline-flex gap-4 items-center">
              <span className="text-gray-900 uppercase font-extrabold text-sm">
                {word}
              </span>
              <MdStarRate size={16} className="text-gray-900 -rotate-12" />
            </div>
          ))}
        </div>
      </div>

      {/* Second Moving Tape (Right to Left, Crossing the First One) */}
      <div className="absolute p-2 top-10 left-0 w-full bg-gradient-to-r from-emerald-300 to-sky-600 rotate-6">
        <div className="flex gap-4 py-3 animate-marquee2 whitespace-nowrap">
          {words.map((word, index) => (
            <div key={index} className="inline-flex gap-4 items-center">
              <span className="text-gray-900 uppercase font-extrabold text-sm">
                {word}
              </span>
              <MdStarRate size={16} className="text-gray-900 -rotate-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TapeSection;
