"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend & DB",
    items: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "Prisma ORM", "MongoDB"],
  },
  {
    category: "AI & ML",
    items: ["Pandas", "PyTorch", "OpenAI API", "Pinecone", "Plotly","Scikit-learn", "TensorFlow", "Keras"],
  },
  {
    category: "Tools & Other",
    items: ["Git", "Vercel", "Zustand", "JWT Auth", "ShadCN/UI", "REST APIs"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden opacity-5 pointer-events-none select-none flex z-0">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[20rem] font-bold uppercase mx-8">SKILLS & EXPERTISE</span>
          <span className="text-[20rem] font-bold uppercase mx-8">SKILLS & EXPERTISE</span>
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-4 text-white">
            Technical <span className="text-primary italic font-light">Arsenal</span>.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            A comprehensive toolkit for building scalable, high-performance web applications and intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-black/80 hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-xl font-medium text-white mb-6 uppercase tracking-wider group-hover:text-primary transition-colors">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
