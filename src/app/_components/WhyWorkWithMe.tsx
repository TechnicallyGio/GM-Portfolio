"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const reasons = [
  {
    icon: "mdi:briefcase-account",
    title: "Business-First Mindset",
    description:
      "I studied business before code, so every technical decision considers ROI. I speak both languages: developer and entrepreneur.",
    color: "blue",
  },
  {
    icon: "mdi:swap-horizontal-circle",
    title: "Dual Perspective",
    description:
      "Enterprise experience by day, startup agility by night. I bring the best of both worlds to every project I take on.",
    color: "purple",
  },
  {
    icon: "mdi:hand-heart",
    title: "Selective & Committed",
    description:
      "I choose projects I'm genuinely excited about. When something clicks, I'm all in—building long-term partnerships over quick wins.",
    color: "amber",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Why Work With Me?
        </h2>
        <p className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg md:text-xl">
          I&apos;m not your typical developer. Here&apos;s what makes our
          collaboration different.
        </p>
      </motion.div>

      {/* Three Column Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 sm:p-8"
          >
            {/* Icon */}
            <div
              className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                reason.color === "blue"
                  ? "bg-blue-500/20"
                  : reason.color === "purple"
                    ? "bg-purple-500/20"
                    : "bg-amber-500/20"
              }`}
            >
              <Icon
                icon={reason.icon}
                className={`h-7 w-7 ${
                  reason.color === "blue"
                    ? "text-blue-400"
                    : reason.color === "purple"
                      ? "text-purple-400"
                      : "text-amber-400"
                }`}
              />
            </div>

            {/* Content */}
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              {reason.title}
            </h3>
            <p className="leading-relaxed text-gray-300">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
