"use client";

import { useState, useEffect } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", updateCursorPosition);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: isHovering ? "40px" : "20px",
        height: isHovering ? "40px" : "20px",
        borderRadius: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Transparent black background
        border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle white border
        backdropFilter: "blur(5px)", // Glassmorphism effect
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
      }}
    />
  );
};

export default CustomCursor;
