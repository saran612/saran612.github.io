"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MenuBar() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Set the total delay to exactly 6 seconds (6000ms)
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 6000);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowMenu(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.nav
          initial={{ opacity: 0, y: -40, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -40, filter: "blur(5px)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // Slower, premium transition duration with blur fade
          className="fixed top-0 left-0 w-full z-[9000] px-4 md:px-8 py-5 flex justify-between items-center backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        >
          {/* Left: Navigation Menu */}
          <div className="flex-1 flex gap-4 md:gap-8 text-xs md:text-sm font-medium justify-start hidden lg:flex">
            <a
              href="#home"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Middle: Brand Name */}
          <a
            href="/"
            className="flex-shrink-0 text-xl md:text-2xl font-lequire1 tracking-tighter cursor-pointer hover:opacity-80 transition-opacity text-center block"
          >
            Saran
          </a>

          {/* Right: Social Links */}
          <div className="flex-1 flex gap-4 md:gap-8 text-xs md:text-sm font-medium justify-end hidden lg:flex">
            <a
              href="https://github.com/saran612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/saranx612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              LeetCode
            </a>
            <a
              href="https://www.linkedin.com/in/saran-karthick612/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/saran_0612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Twitter
            </a>
          </div>

          {/* Mobile/Tablet Fallback (since 8 items won't fit elegantly on small screens) */}
          <div className="flex-1 flex gap-4 text-xs font-medium justify-start lg:hidden">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Menu
            </a>
          </div>
          <div className="flex-1 flex gap-4 text-xs font-medium justify-end lg:hidden">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              Socials
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
