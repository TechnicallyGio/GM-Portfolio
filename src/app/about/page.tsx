"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative overflow-hidden text-white">
      {" "}
      {/* Added responsive padding */}
      {/* Optional: Add a solid bg color */}
      {/* Removed 3D Canvas Background */}
      {/* Content */}
      <motion.section
        className="relative z-10 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
          About Me
        </h1>

        <div className="space-y-4 text-base leading-relaxed text-gray-200 md:text-lg">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hi, I&apos;m{" "}
            <strong className="text-indigo-400">Giovanni Medrano</strong> — a
            self-taught website developer and graphic designer based in{" "}
            <strong>New York, USA</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            My passion for building clean, user-focused websites started with
            curiosity and grew into a freelance career. I create digital
            experiences that combine functionality and aesthetics.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            I&apos;ve worn many hats professionally — from aquatics and retail
            to aviation and technology — giving me a well-rounded, adaptable
            approach to every project.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            I&apos;m especially passionate about{" "}
            <strong className="text-indigo-300">aviation</strong>. The mix of
            structure and exploration inspires my work and mindset — always
            aiming high, but grounded in detail.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            In my free time, I build websites on a freelance basis, helping
            individuals and small businesses bring their ideas to life.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
