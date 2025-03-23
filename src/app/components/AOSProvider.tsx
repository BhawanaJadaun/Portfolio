"use client"; // Mark this as a client component

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation"; // Get current route

export default function AOSProvider() {
  const pathname = usePathname(); // Get current route path

  useEffect(() => {
    AOS.init({
      offset:300,
      easing: "ease-in-out",
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on route change
  }, [pathname]);

  return null; // This component does not render anything
}
