"use client";

import { motion } from "framer-motion";

interface DetailItem {
  title: string;
  description: string;
  code: string;
  stats: { label: string; value: string; suffix: string }[];
  githubUrl?: string;
  projectUrl?: string;
}

interface CertificatesSectionProps {
  onSelectItem: (item: DetailItem) => void;
}

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

const certificatesData: DetailItem[] = [
  {
    title: "Supervised Machine Learning",
    description:
      "An online non-credit course authorized by DeepLearning.AI and Stanford University and offered through Coursera.",
    code: `CERT-ID: AWS-ASA-73921\nVALIDATION: OK\nISSUER: Amazon Web Services\nSCORE: 920/1000`,
    stats: [
      { label: "Designation", value: "Machine Learning", suffix: "" },
      { label: "Validation Details", value: "Completed", suffix: "" },
    ],
  },
  {
    title: "NPTEL ",
    description:"Introduction to Internet of Things",
    code: `import tensorflow as tf\n\nmodel = tf.keras.models.Sequential([\n  tf.keras.layers.Dense(128, activation='relu'),\n  tf.keras.layers.Dense(10)\n])`,
    stats: [
      { label: "Score", value: "90%", suffix: "" },
      { label: "Top", value: "5%", suffix: "" },
    ],
  },
  {
    title: "Machine Learning with Python",
    description:
      "Advanced certification in React, UI/UX principles, and responsive web design.",
    code: `const UI = () => (\n  <div className="grid">\n    <PremiumAesthetic />\n  </div>\n);\nexport default UI;`,
    stats: [
      { label: "Focus", value: "Machine Learning", suffix: "" },
      { label: "Projects completed", value: "5", suffix: "" },
    ],
  },
  {
    title: "Oracle Cloud Infrastructure 2025 .",
    description: "Certified AI Foundations Associate",
    code: `SELECT \n  user_id, \n  COUNT(*) \nFROM \n  analytics.events \nGROUP BY \n  user_id;`,
    stats: [
      { label: "Focus", value: "Cloud Infrastructure", suffix: "" },
      { label: "time", value: "25+ hours", suffix: "" },
    ],
  },
];

export function CertificatesSection({ onSelectItem }: CertificatesSectionProps) {
  return (
    <section
      id="certificates"
      className="relative min-h-[120vh] w-full flex flex-col items-center justify-center py-32 px-6 md:px-20 z-10 border-t border-white/5"
    >
      <div className="w-full max-w-[1600px] mx-auto mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <motion.h2
          className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={heavySpring}
        >
          Certificates
        </motion.h2>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full max-w-[1600px] mx-auto">
        {certificatesData.map((cert, idx) => (
          <motion.div
            key={idx}
            className="w-full h-full flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={heavySpring}
            onClick={() => onSelectItem(cert)}
          >
            <div
              data-magnetic="true"
              className="group relative w-full h-full min-h-[200px] md:min-h-[280px] border border-white/10 flex flex-col justify-between p-6 md:p-8 cursor-none transition-colors duration-500 hover:border-white/30 hover:bg-white/[0.02] flex-grow"
            >
              {/* Background logic layer (revealed on hover) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 backdrop-blur-md bg-white/5 flex items-center justify-center pointer-events-none overflow-hidden">
                <pre className="text-[10px] md:text-xs text-indigo-400/40 font-mono tracking-widest leading-relaxed p-8 opacity-50 transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out whitespace-pre-wrap">
                  {cert.code}
                </pre>
              </div>

              <div className="relative z-10 flex flex-col justify-between gap-4 h-full w-full flex-grow">
                <div>
                  <h2 className="text-[10px] md:text-xs font-medium text-zinc-600 tracking-[0.3em] uppercase mb-2">
                    Certificate 0{idx + 1}
                  </h2>
                </div>

                <div className="flex flex-col justify-between flex-grow gap-4">
                  <div>
                    <motion.h3
                      className="text-2xl md:text-3xl xl:text-4xl font-black tracking-tighter mb-2 break-words"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ ...springPhysics, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {cert.title}
                    </motion.h3>

                    <motion.p
                      className="text-xs md:text-sm text-zinc-400 font-light max-w-lg mb-4 leading-relaxed break-words"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {cert.description}
                    </motion.p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-3 border-t border-white/10 mt-auto">
                    {cert.stats.map((stat, statIdx) => (
                      <motion.div
                        key={statIdx}
                        className="flex items-center gap-1.5"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          ...springPhysics,
                          delay: 0.3 + statIdx * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <span className="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest font-light">
                          {stat.label}:
                        </span>
                        <span className="text-xs md:text-sm text-zinc-300 font-medium tracking-tight">
                          {stat.value}
                          {stat.suffix && stat.suffix}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
