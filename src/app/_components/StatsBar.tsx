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
    <section className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:px-16">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 sm:p-6"
          >
            <div className="mb-2 flex justify-center sm:mb-3">
              <Icon
                icon={stat.icon}
                className="h-6 w-6 text-blue-400 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8"
              />
            </div>
            <div className="mb-1 text-xl font-bold text-white sm:text-2xl md:text-3xl">
              {stat.value}
            </div>
            <div className="text-xs font-medium text-gray-300 sm:text-sm md:text-base">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
