"use client";

import { motion } from "framer-motion";
import { skillLogos } from "@/components/SkillLogos";

const heavySpring = {
  type: "spring" as const,
  stiffness: 80,
  damping: 25,
  mass: 2,
};

const skillsData = [
  "Python",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PyTorch",
  "TensorFlow",
  "FastAPI",
  "SQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Figma",
  "Docker",
  "AWS",
  "Git",
  "Github",
  "Arch",
  "Linux",
  "Ubuntu",
  "HTML",
  "CSS",
  "Photoshop",
  "npm",
  "Notion",
  "MATLAB",
  "MongoDB",
  "Markdown",
  "Kafka",
  "Bash",
  "Obsidian",
];

const MarqueeRow = ({
  skills,
  direction = "left",
}: {
  skills: string[];
  direction?: "left" | "right";
}) => {
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="w-full overflow-hidden flex py-3 relative">
      <motion.div
        className="flex gap-6 md:gap-8 items-center shrink-0"
        animate={{
          x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: 35,
          repeat: Infinity,
        }}
      >
        {duplicatedSkills.map((skill, idx) => {
          const logo = skillLogos[skill];
          return (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center p-3 border border-white/10 bg-[#0d0d0f] rounded-2xl md:rounded-3xl transition-all duration-300 shrink-0 aspect-square w-20 h-20 md:w-24 md:h-24 text-zinc-500 hover:text-white hover:border-white/20 hover:scale-105 hover:bg-[#121215] shadow-lg cursor-none"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 transform group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0 contrast-[1.1] opacity-70 group-hover:opacity-100">
                {logo}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export function SkillsSection() {
  return (
    <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center py-32 px-6 md:px-20 z-10 border-t border-white/5 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 z-20">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={heavySpring}
        >
          The Skills
        </motion.h2>
      </div>

      {/* 3D Perspective Marquee Wrapper */}
      <div 
        className="relative w-full py-16 flex flex-col gap-6 md:gap-8 overflow-visible"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          maskImage: "radial-gradient(circle at center, white 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, white 30%, transparent 80%)",
        }}
      >
        <motion.div
          style={{
            transform: "rotateX(20deg) rotateZ(-6deg)",
            transformStyle: "preserve-3d",
          }}
          className="flex flex-col gap-4 md:gap-6 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...heavySpring, delay: 0.2 }}
        >
          <MarqueeRow 
            skills={skillsData.slice(0, Math.ceil(skillsData.length / 2))} 
            direction="left" 
          />
          <MarqueeRow 
            skills={skillsData.slice(Math.ceil(skillsData.length / 2))} 
            direction="right" 
          />
        </motion.div>
      </div>
    </section>
  );
}
