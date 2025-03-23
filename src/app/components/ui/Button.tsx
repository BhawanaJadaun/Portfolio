"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  className,
  onClick,
}) => {
  const baseStyles = "flex items-center justify-center rounded-full font-medium transition-shadow shadow-lg bg-white text-black hover:bg-gray-300";

  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, sizeStyles[size], className)}
    >
      {children}
    </button>
  );
};

export default Button;
