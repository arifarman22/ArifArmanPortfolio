"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    role: "Digital Officer & Lead Developer",
    company: "IndoAsia Trading LTD, Dhaka",
    period: "Jun 2025 – Dec 2025",
    description: [
      "Led full digital operations including web platform development, order management systems, and IT infrastructure for a mid-sized trading company.",
      "Built and deployed full-stack web applications using React.js and Next.js; integrated third-party APIs and automated key business workflows.",
      "Managed data systems and implemented scalable digital solutions to support the company's growing operations.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "SoftVence, Dhaka",
    period: "Jan 2026",
    description: [
      "Built and maintained responsive UI components using React.js and Next.js with cross-browser compatibility and mobile-first design.",
      "Developed reusable component libraries with React hooks; utilized Next.js SSR for optimized page load performance in production apps.",
      "Collaborated with the team via Git, code reviews, and clean code best practices; translated UI/UX specs into pixel-accurate interfaces.",
    ],
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-32 bg-secondary/30 relative" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">
              Crafting digital experiences with <span className="text-primary italic">precision</span>.
            </h2>
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                AI Engineer and Full Stack Developer with hands-on experience building production-grade intelligent applications. Skilled in LLM integration, RAG pipelines, vector search, NLP, and Python-based ML frameworks.
              </p>
              <p>
                Strong software engineering foundation with React, Next.js, and Node.js — capable of designing and deploying complete AI-powered systems end-to-end.
              </p>
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="uppercase tracking-widest text-sm font-semibold text-white mb-2">Education</div>
                  <div className="text-xl text-gray-300">B.Sc. in CSE</div>
                  <div className="text-gray-500">Daffodil Int. University • 2025</div>
                  <div className="text-gray-500">CGPA: 3.46 / 4.0</div>
                </div>
                <div>
                  <div className="uppercase tracking-widest text-sm font-semibold text-white mb-2">Certifications</div>
                  <div className="text-gray-300">Full Stack Web Dev — FreeCodeCamp</div>
                  <div className="text-gray-300">Full Stack Java Dev — LinkedIn</div>
                </div>
              </div>
              <div className="pt-6">
                <div className="uppercase tracking-widest text-sm font-semibold text-white mb-2">Activities</div>
                <ul className="text-gray-500 space-y-1">
                  <li>• Executive Member — DIU CPC</li>
                  <li>• Volunteer — ICPC Dhaka Regional</li>
                  <li>• Cricket Player — DIU Cricket Team</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Experience List */}
          <motion.div
            style={{ y }}
            className="flex flex-col gap-12"
          >
            <h3 className="text-2xl font-medium uppercase tracking-widest text-white/50 mb-4 border-b border-white/10 pb-4">
              Experience
            </h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative pl-8 border-l-2 border-white/10 hover:border-primary transition-colors"
              >
                <div className="absolute w-4 h-4 bg-black border-2 border-white/20 rounded-full -left-[9px] top-1 group-hover:border-primary group-hover:bg-primary transition-all" />
                <div className="text-sm font-medium text-primary mb-2">{exp.period}</div>
                <h4 className="text-2xl font-semibold text-white mb-1">{exp.role}</h4>
                <div className="text-lg text-gray-400 font-light mb-4">{exp.company}</div>
                <ul className="space-y-2 text-gray-500">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary/50 mt-1.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
