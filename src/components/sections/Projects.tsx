"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "CureAI — AI-Powered Medical Chatbot",
    category: "AI & Healthcare",
    description: "Built a production-ready medical AI chatbot using RAG architecture — indexed a 940-page medical textbook into 9,500+ Pinecone vectors for semantic symptom search.",
    tech: ["Flask", "PostgreSQL", "PyTorch", "Pinecone", "HuggingFace"],
    github: "https://github.com/arifarman22/CureAI",
    image: "/cureai.png",
    color: "from-blue-500/20 to-indigo-900/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "AnalytIQ — AI-Powered Data Analytics",
    category: "AI & Data Science",
    description: "Full-stack AI analytics platform allowing users to upload datasets and receive automated EDA, statistical summaries, and visualizations via natural language prompts.",
    tech: ["React 18", "FastAPI", "Pandas", "NumPy", "Plotly", "OpenAI API"],
    link: "https://analyt-iq.vercel.app",
    image: "/analytiQ.png",
    color: "from-purple-500/20 to-fuchsia-900/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "Al-Quran — Full-Stack Quran Web App",
    category: "Full Stack Development",
    description: "Production-ready Quran app with per-ayah audio recitation, full-text search, bookmarks, and a 15-lesson structured learning path with memorization tracker.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Prisma 7", "Neon"],
    link: "https://al-qur-an-two.vercel.app",
    image: "/alquran.png",
    color: "from-emerald-500/20 to-teal-900/20",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "Akij Resources — Online Assessment",
    category: "EdTech Platform",
    description: "Production-ready online assessment platform with candidate registration, exam delivery, result tracking, and role-based access for candidates and admins.",
    tech: ["Next.js 16", "React 19", "Neon PostgreSQL", "Prisma ORM", "ShadCN"],
    link: "https://akij-resouces-online-task.vercel.app",
    image: "/akij.png",
    color: "from-indigo-500/20 to-blue-900/20",
    border: "group-hover:border-indigo-500/50",
  },
  {
    title: "PeakTech — E-commerce Platform",
    category: "E-commerce",
    description: "Decoupled e-commerce platform for electronics and machinery with product catalog, cart, user authentication, and order management.",
    tech: ["Next.js", "Express.js", "MySQL", "RESTful API", "JWT"],
    link: "https://peaktradebd.com",
    image: "/peaktrade.png",
    color: "from-orange-500/20 to-red-900/20",
    border: "group-hover:border-orange-500/50",
  },
  {
    title: "Sunson Technology — Company Website",
    category: "Business Website",
    description: "Full-stack web application for an international China-based tech client — built with TypeScript/Node.js backend and MongoDB for data persistence.",
    tech: ["TypeScript", "Node.js", "MongoDB", "REST API"],
    link: "https://sunson-tech.com",
    image: "/sunson.png",
    color: "from-gray-500/20 to-slate-900/20",
    border: "group-hover:border-gray-500/50",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4 text-white">
              Selected <span className="text-primary font-light">Works</span>.
            </h2>
            <p className="text-xl text-gray-400 max-w-xl font-light">
              A collection of projects showcasing my expertise in full-stack development, AI integration, and scalable architecture.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gray-500">
              <span className="w-12 h-[1px] bg-gray-500" />
              Scroll to explore
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col relative w-full pb-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`sticky top-32 w-full pt-8 group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ zIndex: index + 1 }}
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] shadow-2xl -z-10 transition-colors group-hover:border-white/10" />
              
              {/* Project Visual/Card - Entire thing is now a link */}
              <a 
                href={project.link || project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full lg:w-3/5 aspect-video md:aspect-[21/9] lg:aspect-[4/3] rounded-3xl overflow-hidden relative bg-gradient-to-br ${project.color} border border-white/5 ${project.border} transition-all duration-500 cursor-pointer block group/img`}
              >
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover/img:scale-[1.05] transition-transform duration-700 ease-out"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                    <div className="absolute bottom-6 right-6 z-20">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center opacity-0 translate-y-4 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-500 delay-100 hover:bg-white hover:text-black">
                        {project.link ? <ExternalLink size={22} /> : <Code size={22} />}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Fallback abstract visualization */
                  <div className="w-full h-full flex flex-col justify-between p-8 relative overflow-hidden group-hover/img:scale-[1.05] transition-transform duration-700 ease-out">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <h3 className="text-3xl md:text-5xl font-medium text-white/30 uppercase tracking-tighter z-0 absolute top-8 left-8 right-8 leading-none">
                      {project.title}
                    </h3>
                    <div className="z-20 mt-auto flex justify-end w-full">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center opacity-0 translate-y-4 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-500 delay-100 hover:bg-white hover:text-black">
                        {project.link ? <ExternalLink size={24} /> : <Code size={24} />}
                      </div>
                    </div>
                  </div>
                )}
              </a>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 flex flex-col py-8 px-6 lg:px-0">
                <div className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">0{index + 1} — {project.category}</div>
                <h3 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 mb-8 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors text-sm md:text-base"
                    >
                      Live Project <ExternalLink size={18} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
                    >
                      Source Code <Code size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
