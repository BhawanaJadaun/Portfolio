"use client";

import React from "react";
import clsx from "clsx";

interface HeaderProps {
  as?: "h1" | "h2" | "h3" | "p" | "span"; // Allow multiple elements
  size?: "lg" | "md" | "sm"; // Define size variations
  gradient?: boolean; // Enable gradient text
  className?: string; // Additional custom styles
  children: React.ReactNode;
}

const sizeClasses = {
  h1: { lg: "text-4xl sm:text-6xl", md: "text-3xl sm:text-5xl", sm: "text-2xl sm:text-4xl" },
  h2: { lg: "text-4xl sm:text-5xl", md: "text-3xl sm:text-4xl", sm: "text-xl sm:text-2xl" },
  h3: { lg: "text-2xl sm:text-3xl", md: "text-xl sm:text-2xl", sm: "text-lg sm:text-xl" },
  p: { lg: "text-lg sm:text-xl", md: "text-base sm:text-lg", sm: "text-sm sm:text-base" },
  span: { 
    lg: "text-6xl sm:text-6xl", // ⬆ Increased size here 
    md: "text-5xl sm:text-5xl",
    sm: "text-4xl sm:text-3xl",
  },
};

const Header: React.FC<HeaderProps> = ({
  as = "h1",
  size = "lg",
  gradient,
  className,
  children,
}) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        "font-bold",
        sizeClasses[as]?.[size],
        gradient && "bg-gradient-to-r from-sky-500 to-green-800 text-transparent bg-clip-text",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Header;
