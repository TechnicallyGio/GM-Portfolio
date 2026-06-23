"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface Stat {
  icon: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: "mdi:clock-time-eight-outline",
    value: "5+",
    label: "Years Professional Experience",
  },
  {
    icon: "mdi:briefcase-check-outline",
    value: "50+",
    label: "Projects Delivered",
  },
  {
    icon: "mdi:account-group-outline",
    value: "Active",
    label: "Freelance Clients",
  },
  {
    icon: "mdi:domain",
    value: "10+",
    label: "Industries Served",
  },
];

export default function StatsBar() {
  return (
    <section className="mx-auto w-full max-w-6xl py-8 sm:py-10">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-center transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.04] sm:p-6"
          >
            <Icon
              icon={stat.icon}
              className="mx-auto mb-3 h-6 w-6 text-blue-400 sm:h-7 sm:w-7"
            />
            <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-zinc-400 sm:text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
