"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import "../globals.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Tech", href: "/#tech" },
  ];

 const handleNavigation = (item: { name: string; href: string }) => {
  if (pathname === "/" && item.href.startsWith("#")) {
    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
  } else {
    router.push(item.href);
  }
  setShowMenu(false);
};


  // Prevent scrolling when the menu is open
  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  return (
    <header className="w-screen">
      <nav className="fixed top-0 left-0 w-screen bg-black shadow-md p-2 z-50">
        <div className="w-full px-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" aria-label="Go to Home">
            <Image src="/images/LOGO.png" alt="Fitbnexus Logo" width={25} height={25} priority />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center bg-black/30 text-white border-2 border-black/40 
            p-2 rounded-3xl w-[350px] h-14 justify-center">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item)}
                  className="text-white hover:bg-sky-600 hover:text-black p-4 rounded-b-full"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle menu"
          >
            {showMenu ? <RxCross2 size={30} /> : <IoIosMenu size={30} />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-screen h-screen bg-black/90 z-50 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setShowMenu(false)}
              aria-label="Close menu"
            >
              <RxCross2 size={30} />
            </button>
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-white text-lg hover:text-sky-600"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/bhawana-jadaun-801674307/"
              target="_blank"
              className="text-white flex items-center"
              aria-label="LinkedIn"
            >
              <span>LinkedIn</span> <GoArrowUpRight />
            </Link>
            <Link
              href="https://github.com/BhawanaJadaun"
              target="_blank"
              className="text-white flex items-center"
              aria-label="GitHub"
            >
              <span>GitHub</span> <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
