"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const reasons = [
  {
    icon: "mdi:briefcase-account",
    title: "Business-First Mindset",
    description:
      "I studied business before code, so every technical decision considers ROI. I speak both languages: developer and entrepreneur.",
  },
  {
    icon: "mdi:swap-horizontal-circle",
    title: "Dual Perspective",
    description:
      "Enterprise experience by day, startup agility by night. I bring the best of both worlds to every project I take on.",
  },
  {
    icon: "mdi:hand-heart",
    title: "Selective & Committed",
    description:
      "I choose projects I'm genuinely excited about. When something clicks, I'm all in—building long-term partnerships over quick wins.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="mx-auto w-full max-w-6xl py-16 sm:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center sm:mb-14"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Why Work With Me?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-400 sm:text-lg">
          I&apos;m not your typical developer. Here&apos;s what makes our
          collaboration different.
        </p>
      </motion.div>

      {/* Three Column Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.04] sm:p-7"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-400">
              <Icon icon={reason.icon} className="h-5 w-5" />
            </div>

            <h3 className="mb-2 text-lg font-medium text-white sm:text-xl">
              {reason.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
