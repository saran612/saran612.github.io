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

interface DetailModalProps {
  selectedItem: DetailItem;
  onClose: () => void;
}

const heavySpring = {
  type: "spring" as const,
  stiffness: 80,
  damping: 25,
  mass: 2,
};

export function DetailModal({ selectedItem, onClose }: DetailModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-12 bg-black/60 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={heavySpring}
        className="relative w-full max-w-5xl bg-black/40 border border-white/20 p-8 md:p-16 overflow-hidden flex flex-col cursor-none backdrop-blur-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-none z-50 text-xs font-medium tracking-widest uppercase"
          onClick={onClose}
          data-cursor-scale="1.5"
        >
          Close
        </button>

        <div className="relative z-10 flex flex-col h-full justify-between gap-12">
          <div>
            <motion.h3 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6">
              {selectedItem.title}
            </motion.h3>

            <motion.p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl leading-relaxed">
              {selectedItem.description}
            </motion.p>

            {/* Action Buttons */}
            {(selectedItem.githubUrl || selectedItem.projectUrl) && (
              <div className="flex flex-wrap gap-4 mt-8">
                {selectedItem.githubUrl && (
                  <a
                    href={selectedItem.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-scale="1.5"
                    className="px-6 py-3 border border-white/20 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 cursor-none flex items-center gap-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}

                {selectedItem.projectUrl && (
                  <a
                    href={selectedItem.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-scale="1.5"
                    className="px-6 py-3 border border-white/20 rounded-full text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500 cursor-none flex items-center gap-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Project
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            {selectedItem.stats.map((stat, statIdx) => (
              <div key={statIdx}>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3 font-light">
                  {stat.label}
                </p>
                <p className="text-2xl md:text-3xl font-thin tracking-tighter">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-lg md:text-xl text-zinc-600 font-light ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-6 bg-white/5 border border-white/10 rounded-sm">
            <pre className="text-xs md:text-sm text-indigo-400/80 font-mono tracking-widest leading-relaxed whitespace-pre-wrap overflow-x-auto">
              {selectedItem.code}
            </pre>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
