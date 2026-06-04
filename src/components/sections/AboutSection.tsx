"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React from "react";

interface AboutSectionProps {
  manifestoRef: React.RefObject<HTMLDivElement | null>;
  manifestoColor: MotionValue<string>;
}

const heavySpring = {
  type: "spring" as const,
  stiffness: 80,
  damping: 25,
  mass: 2,
};

export function AboutSection({ manifestoRef, manifestoColor }: AboutSectionProps) {
  return (
    <section
      id="about"
      ref={manifestoRef}
      className="relative h-[100vh] w-full flex items-center justify-center px-6 md:px-20 z-10 py-32"
    >
      <motion.div
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={heavySpring}
      >
        {/* Photo Box (Left) */}
        <div className="md:col-span-5 w-full flex justify-center md:justify-end">
          <motion.div
            className="w-full max-w-md aspect-[3/4] bg-white/5 border border-white/10 rounded-sm relative overflow-hidden group"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute inset-0 flex items-center justify-center z-10 text-center pointer-events-none">
              <Image
                src="/saran.jpeg"
                alt="Saran Karthick"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black/80 to-transparent z-0 group-hover:opacity-50 transition-opacity duration-700" />
          </motion.div>
        </div>

        {/* Content (Right) */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4 leading-none">
            Saran <br className="hidden md:block" />
            Karthick
          </h2>

          <p className="text-zinc-500 uppercase tracking-widest text-sm mb-12 font-medium">
            b.Tech Student <span className="mx-2">•</span> Machine Learning
            Engineer
          </p>

          <motion.p
            className="text-xl md:text-3xl font-light tracking-tight leading-relaxed max-w-2xl"
            style={{ color: manifestoColor }}
          >
            I engineer the underlying logic of the new internet. Focused on{" "}
            <strong className="font-bold text-white">Machine Learning</strong>
            , Intelligent Automations, and crafting seamless human-computer
            experiences.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
