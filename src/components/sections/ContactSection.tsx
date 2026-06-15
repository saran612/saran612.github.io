"use client";

import { motion } from "framer-motion";

const springPhysics = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 1,
};

const heavySpring = {
  type: "spring" as const,
  stiffness: 80,
  damping: 25,
  mass: 2,
};

export function ContactSection() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/saran612",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saran-karthick612/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Mail",
      href: "mailto:freelancexsaran@gmail.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        >
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.356 1.516-2.155 2.618-1.328L12 10.91l9.382-7.38c1.102-.827 2.618-.028 2.618 1.327z" />
        </svg>
      ),
    },
    {
      name: "Medium",
      href: "https://medium.com/@saran612",
      icon: (
        <img
          src="https://imgs.search.brave.com/4R4hFITz_F_be0roUiWbTZKhsywr3fnLTMTkFL5HFow/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvOTZhYmQ1N2Q4/NDg4ZDcyODIyMDZi/MzFmOWNhNjE3Y2E4/Y2YzMThjNjljNDIx/ZjllZmNhYTcwODhl/YTcwNDEzYy9tZWRp/dW0uY29tLw"
          alt="Medium"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 object-contain filter grayscale invert group-hover:invert-0 transition-all duration-[1000ms]"
        />
      ),
    },
    {
      name: "Reddit",
      href: "https://www.reddit.com/user/asksAr/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        >
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-2.467 3.928c-1.115 0-2.093-.306-2.152-.326a.34.34 0 0 0-.214.629c.092.031 1.151.378 2.366.378 1.206 0 2.222-.325 2.316-.358a.34.34 0 1 0-.203-.648c-.053.018-1.002.325-2.113.325z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/saran_0612",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative h-[100vh] w-full flex flex-col items-center justify-center -mt-32 px-6 overflow-hidden"
    >
      {/* Background 'contact' text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="font-handwriting text-[15rem] md:text-[25rem] lg:text-[35rem] text-white/[0.02] -rotate-6 whitespace-nowrap select-none mix-blend-screen">
          contact
        </span>
      </motion.div>

      <motion.h2
        className="relative z-10 text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-24 text-center leading-none"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={heavySpring}
        viewport={{ once: true, margin: "-100px" }}
      >
        Build the future.
      </motion.h2>

      <motion.div
        className="relative w-full max-w-4xl flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ...heavySpring, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {socials.map((social, i) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-scale="1.5"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-[1000ms] group cursor-none relative text-white"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...springPhysics, delay: 0.5 + i * 0.1 }}
          >
            <div className="flex items-center justify-center">
              {social.icon}
            </div>
            {/* Tooltip on hover */}
            <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-[700ms] text-xs text-zinc-500 uppercase tracking-widest font-light pointer-events-none">
              {social.name}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Back to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 w-16 h-16 rounded-full border border-white/20 font-medium text-xs tracking-widest uppercase flex items-center justify-center hover:bg-white hover:text-black transition-all duration-[3000ms] z-50 cursor-none"
        data-cursor-scale="1.5"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ ...heavySpring, delay: 1 }}
      >
        Top
      </motion.button>
    </section>
  );
}
