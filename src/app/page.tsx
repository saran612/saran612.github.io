"use client";

import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { AccentBackground } from "@/components/AccentBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DetailModal } from "@/components/sections/DetailModal";

interface DetailItem {
  title: string;
  description: string;
  code: string;
  stats: { label: string; value: string; suffix: string }[];
  githubUrl?: string;
  projectUrl?: string;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DetailItem | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedItem]);

  // Parallax animation setup for micro-interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 25, mass: 1.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const xOffset = useTransform(smoothMouseX, [-1, 1], [-10, 10]);
  const yOffset = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  const invertedXOffset = useTransform(smoothMouseX, [-1, 1], [15, -15]);
  const invertedYOffset = useTransform(smoothMouseY, [-1, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const manifestoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ["start center", "center center"],
  });

  const manifestoColor = useTransform(
    manifestoProgress,
    [0, 1],
    ["#71717A", "#FFFFFF"],
  );

  return (
    <div className="relative w-full bg-black text-white font-sans selection:bg-white selection:text-black min-h-screen">
      <AccentBackground />

      {/* SECTION 1: HERO */}
      <HeroSection
        mounted={mounted}
        xOffset={xOffset}
        yOffset={yOffset}
        invertedXOffset={invertedXOffset}
        invertedYOffset={invertedYOffset}
        handleMouseMove={handleMouseMove}
      />

      {/* SECTION 2: ABOUT */}
      <AboutSection manifestoRef={manifestoRef} manifestoColor={manifestoColor} />

      {/* SECTION 3: PROJECTS */}
      <ProjectsSection onSelectItem={setSelectedItem} />

      {/* SECTION 4: SKILLS */}
      <SkillsSection />

      {/* SECTION 5: CERTIFICATES */}
      <CertificatesSection onSelectItem={setSelectedItem} />

      {/* SECTION 6: CONTACT & EXIT */}
      <ContactSection />

      {/* FLOATING GLASSMORPHIC DETAIL MODAL */}
      {selectedItem && (
        <DetailModal selectedItem={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
