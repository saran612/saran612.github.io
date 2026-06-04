"use client";

import { motion, AnimatePresence, MotionValue } from "framer-motion";

interface HeroSectionProps {
  mounted: boolean;
  xOffset: MotionValue<number>;
  yOffset: MotionValue<number>;
  invertedXOffset: MotionValue<number>;
  invertedYOffset: MotionValue<number>;
  handleMouseMove: (e: React.MouseEvent) => void;
}

export function HeroSection({
  mounted,
  xOffset,
  yOffset,
  invertedXOffset,
  invertedYOffset,
  handleMouseMove,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative h-[100vh] w-full flex flex-col items-center justify-center z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        xOffset.set(0);
        yOffset.set(0);
      }}
    >
      <AnimatePresence>
        {mounted && (
          <motion.div layout className="flex flex-col items-center relative">
            <motion.div
              style={{ x: xOffset, y: yOffset }}
              className="relative z-10"
            >
              <motion.h1
                className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl tracking-tighter text-center leading-tight sm:leading-tight cursor-default flex flex-wrap justify-center gap-[1vw]"
                data-cursor-scale="2.0"
              >
                <motion.span
                  className="inline-block font-extralight"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                >
                  Intelligence
                </motion.span>
                <motion.span
                  className="inline-block font-normal"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
                >
                  . Automated .
                </motion.span>
                <motion.strong
                  className="inline-block font-bold"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 1.3 }}
                >
                  Beautifully
                </motion.strong>
              </motion.h1>
            </motion.div>

            <motion.div
              className="absolute -bottom-24 w-1 h-1 bg-white rounded-full mix-blend-difference"
              style={{ x: invertedXOffset, y: invertedYOffset }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0.2, 1], scale: [0, 1, 0.8, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.4, 0.8, 1],
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
