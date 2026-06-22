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

interface ProjectsSectionProps {
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

const projectsData: DetailItem[] = [
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

export function ProjectsSection({ onSelectItem }: ProjectsSectionProps) {
  return (
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
            className="w-full h-full flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={heavySpring}
            onClick={() => onSelectItem(project)}
          >
            <div
              data-magnetic="true"
              className="group relative w-full h-full min-h-[200px] md:min-h-[280px] border border-white/10 flex flex-col justify-between p-6 md:p-8 cursor-none transition-colors duration-500 hover:border-white/30 hover:bg-white/[0.02] flex-grow"
            >
              {/* Background logic layer (revealed on hover) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 backdrop-blur-md bg-white/5 flex items-center justify-center pointer-events-none overflow-hidden">
                <pre className="text-[10px] md:text-xs text-indigo-400/40 font-mono tracking-widest leading-relaxed p-8 opacity-50 transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out whitespace-pre-wrap">
                  {project.code}
                </pre>
              </div>

              <div className="relative z-10 flex flex-col justify-between gap-4 h-full w-full flex-grow">
                <div>
                  <h2 className="text-[10px] md:text-xs font-medium text-zinc-600 tracking-[0.3em] uppercase mb-2">
                    Project 0{idx + 1}
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
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-xs md:text-sm text-zinc-400 font-light max-w-lg mb-4 leading-relaxed break-words"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-3 border-t border-white/10 mt-auto">
                    {project.stats.map((stat, statIdx) => (
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
