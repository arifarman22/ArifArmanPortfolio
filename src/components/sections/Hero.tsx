"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HeroScene from "@/components/3d/HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* 3D Background */}
      <HeroScene />

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="text-sm font-medium tracking-wide text-gray-300">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter mb-6"
        >
          Arif Arman<span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-3xl text-gray-400 font-light max-w-3xl mb-12"
        >
          Full Stack Developer | AI Engineer building high-performance, intelligent web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-transform hover:scale-105"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent text-white border border-white/20 font-medium rounded-full hover:bg-white/10 transition-transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
