"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { AccentBackground } from "@/components/AccentBackground";
import Image from "next/image";

interface DetailItem {
  title: string;
  description: string;
  code: string;
  stats: { label: string; value: string; suffix: string }[];
  githubUrl?: string;
  projectUrl?: string;
}

const easeCustom = [0.16, 1, 0.3, 1];
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

const projectsData = [
  {
    title: "Metro-Mind AI",
    description:
      "A decision-support dashboard and real-time train scheduling for the Kochi Metro.",
    githubUrl: "https://github.com/saran612",
    projectUrl: "#",
    code: `def __init__(self, in_features, out_features, bias=True):
    super(Linear, self).__init__()
    self.in_features = in_features
    self.out_features = out_features
    self.weight = Parameter(torch.Tensor(out_features, in_features))
    
    if bias:
        self.bias = Parameter(torch.Tensor(out_features))
    else:
        self.register_parameter('bias', None)
        
def forward(self, input):
    return F.linear(input, self.weight, self.bias)`,
    stats: [
      { label: "Real-time Scheduling Efficiency", value: "99.98%", suffix: "" },
      { label: "ML Predictive Accuracy", value: "96.4%", suffix: "" },
      { label: "System Load Optimization", value: "-420", suffix: "ms" },
    ],
  },
  {
    title: "Memora",
    description:
      "A Retrieval-Augmented Generation (RAG) for personal knowledge management capabilities.",
    githubUrl: "https://github.com/saran612",
    projectUrl: "#",
    code: `import cv2\nimport numpy as np\n\ndef process_frame(frame, threshold=0.8):\n    tensor = transform(frame).unsqueeze(0)\n    with torch.no_grad():\n        outputs = model(tensor)\n    return filter_boxes(outputs, threshold)`,
    stats: [
      { label: "Object Detection Latency", value: "12", suffix: "ms" },
      { label: "False Positive Reduction", value: "45.2%", suffix: "" },
      { label: "Concurrent Streams", value: "1,200+", suffix: "" },
    ],
  },
  {
    title: "AgriQCert",
    description:
      "A end-to-end platform for a digital product passport system for agricultural imports and exports.",
    githubUrl: "https://github.com/saran612",
    projectUrl: "#",
    code: `function verifyTransaction(signature: string, payload: any): boolean {\n  const hash = crypto.createHash('sha256').update(JSON.stringify(payload)).digest('hex');\n  return crypto.verify('sha256', Buffer.from(payload), pubKey, Buffer.from(signature, 'hex'));\n}`,
    stats: [
      { label: "Cryptographic Verification", value: "<1", suffix: "ms" },
      { label: "Throughput (TPS)", value: "85,000", suffix: "" },
      { label: "Consensus Finality", value: "400", suffix: "ms" },
    ],
  },
  {
    title: "Dark-Cloud",
    description:
      "A social platform for connecting like-minds around the world.",
    githubUrl: "https://github.com/saran612",
    projectUrl: "#",
    code: `func (c *Cache) Get(key string) (interface{}, bool) {\n    c.mu.RLock()\n    defer c.mu.RUnlock()\n    item, found := c.items[key]\n    if !found || item.Expiration > 0 && time.Now().UnixNano() > item.Expiration {\n        return nil, false\n    }\n    return item.Object, true\n}`,
    stats: [
      { label: "Cache Hit Ratio", value: "99.1%", suffix: "" },
      { label: "Memory Overhead", value: "1.2", suffix: "MB" },
      { label: "Response Time (p99)", value: "0.8", suffix: "ms" },
    ],
  },
  {
    title: "Arise",
    description: "An interactive productivity tracker web app.",
    githubUrl: "https://github.com/saran612",
    projectUrl: "#",
    code: `SELECT\n  user_id,\n  COUNT(*) as events,\n  APPROX_QUANTILES(duration_ms, 100)[OFFSET(95)] as p95_duration\nFROM event_logs\nWHERE timestamp >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 1 HOUR)\nGROUP BY user_id;`,
    stats: [
      { label: "Events Processed/Sec", value: "4.5M", suffix: "" },
      { label: "Query Acceleration", value: "14x", suffix: "" },
      { label: "Storage Compression", value: "82%", suffix: "" },
    ],
  },
  {
    title: "Drift",
    description:
      "A hybrid learning platform combining AI and interactive content.",
    githubUrl: "https://github.com/saran612",
    projectUrl: "#",
    code: `app.use(async (ctx, next) => {\n  const rateLimit = await checkRateLimit(ctx.ip);\n  if (!rateLimit.allowed) {\n    ctx.status = 429;\n    ctx.body = 'Too Many Requests';\n    return;\n  }\n  await next();\n});`,
    stats: [
      { label: "Request Routing", value: "3", suffix: "μs" },
      { label: "Active Connections", value: "2.5M", suffix: "" },
      { label: "DDoS Mitigation Rate", value: "100%", suffix: "" },
    ],
  },
];

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
];

const certificatesData = [
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
    title: "Google Gemini Student Certificate ",
    description:
      "Completed the Google Gemini Student Certificate and skill lab badges.",
    code: `import tensorflow as tf\n\nmodel = tf.keras.models.Sequential([\n  tf.keras.layers.Dense(128, activation='relu'),\n  tf.keras.layers.Dense(10)\n])`,
    stats: [
      { label: "Focus", value: "Google AI Labs", suffix: "" },
      { label: "No of skill badges", value: "20+", suffix: "" },
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

export default function Home() {
  // Wait before mounting everything else for the black screen effect
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
    // Normalize coordinates between -1 and 1
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const manifestoRef = useRef(null);
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

      {/* SECTION 1: THE HOOK */}
      <section
        id="home"
        className="relative h-[100vh] w-full flex flex-col items-center justify-center z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
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

      {/* SECTION 2: ABOUT */}
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

      {/* SECTION 3: THE PROOF */}
      <section
        id="projects"
        className="relative min-h-[120vh] w-full flex flex-col items-center justify-center py-32 px-6 md:px-20 z-10"
      >
        <div className="w-full max-w-[1600px] mx-auto mb-16 md:mb-24">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={heavySpring}
          >
            The Projects
          </motion.h2>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full max-w-[1600px] mx-auto">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className="w-full"
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={heavySpring}
              onClick={() => setSelectedItem(project)}
            >
              <div
                data-magnetic="true"
                className="group relative w-full aspect-[16/9] border border-white/10 flex flex-col justify-end p-8 md:p-12 overflow-hidden cursor-none transition-colors duration-500 hover:border-white/30 hover:bg-white/[0.02]"
              >
                {/* Background logic layer (revealed on hover) */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 backdrop-blur-md bg-white/5 flex items-center justify-center pointer-events-none">
                  <pre className="text-[10px] md:text-xs text-indigo-400/40 font-mono tracking-widest leading-relaxed p-8 opacity-50 transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out whitespace-pre-wrap">
                    {project.code}
                  </pre>
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h2 className="text-xs md:text-sm font-medium text-zinc-600 tracking-[0.3em] uppercase mb-4">
                      Project 0{idx + 1}
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
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-sm md:text-base text-zinc-400 font-light max-w-lg mb-8 md:mb-12 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                      {project.stats.map((stat, statIdx) => (
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

      {/* SECTION 4: SKILLS */}
      <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center py-32 px-6 md:px-20 z-10 border-t border-white/5">
        <div className="w-full max-w-[1600px] mx-auto mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
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

        <div className="w-full max-w-[1600px] mx-auto flex flex-wrap gap-4 md:gap-6 lg:gap-8">
          {skillsData.map((skill, idx) => (
            <motion.div
              key={idx}
              data-cursor-scale="1.5"
              className="px-6 py-4 md:px-10 md:py-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-500 cursor-none group"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...springPhysics, delay: (idx % 8) * 0.1 }}
            >
              <span className="text-xl md:text-3xl lg:text-4xl font-thin tracking-tighter group-hover:font-medium transition-all duration-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CERTIFICATES */}
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
              onClick={() => setSelectedItem(cert)}
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

      {/* SECTION 6: THE EXIT */}
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
          {[
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
              href: "mailto:[freelancexsaran@gmail.com]",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              ),
            },
            {
              name: "Medium",
              href: "https://medium.com/@saran612",
              icon: (
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75S21.62 15.17 21.62 12s.53-5.75 1.19-5.75S24 8.83 24 12z" />
                </svg>
              ),
            },
            {
              name: "Reddit",
              href: "#",
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
          ].map((social, i) => (
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

      {/* FLOATING GLASSMORPHIC MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-12 bg-black/60 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
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
                onClick={() => setSelectedItem(null)}
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
        )}
      </AnimatePresence>
    </div>
  );
}
