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
            className="w-full"
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={heavySpring}
            onClick={() => onSelectItem(cert)}
          >
            <div
              data-magnetic="true"
              className="group relative w-full aspect-[16/9] border border-white/10 flex flex-col justify-end p-8 md:p-12 overflow-hidden cursor-none transition-colors duration-500 hover:border-white/30 hover:bg-white/[0.02]"
            >
              {/* Background logic layer (revealed on hover) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 backdrop-blur-md bg-white/5 flex items-center justify-center pointer-events-none">
                <pre className="text-[10px] md:text-xs text-indigo-400/40 font-mono tracking-widest leading-relaxed p-8 opacity-50 transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out whitespace-pre-wrap">
                  {cert.code}
                </pre>
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-xs md:text-sm font-medium text-zinc-600 tracking-[0.3em] uppercase mb-4">
                    Certificate 0{idx + 1}
                  </h2>
                </div>

                <div>
                  <motion.h3
                    className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ ...springPhysics, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {cert.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm md:text-base text-zinc-400 font-light max-w-lg mb-8 md:mb-12 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {cert.description}
                  </motion.p>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                    {cert.stats.map((stat, statIdx) => (
                      <motion.div
                        key={statIdx}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          ...springPhysics,
                          delay: 0.3 + statIdx * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mb-3 font-light">
                          {stat.label}
                        </p>
                        <p className="text-2xl md:text-3xl xl:text-4xl font-thin tracking-tighter">
                          {stat.value}
                          {stat.suffix && (
                            <span className="text-lg md:text-2xl text-zinc-600 font-light ml-1">
                              {stat.suffix}
                            </span>
                          )}
                        </p>
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
