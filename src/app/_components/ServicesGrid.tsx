"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "mdi:code-braces",
    title: "Full-Stack Development",
    description:
      "Custom web applications with modern frameworks, responsive design, and scalable architecture.",
  },
  {
    icon: "mdi:palette-outline",
    title: "UI/UX Design",
    description:
      "User-centered interfaces, prototyping, and comprehensive design systems that drive engagement.",
  },
  {
    icon: "mdi:cog-outline",
    title: "Solutions Engineering",
    description:
      "Technical architecture, system integration, and enterprise-grade scalability solutions.",
  },
  {
    icon: "mdi:brush-variant",
    title: "Graphics & Branding",
    description:
      "Visual identity design, marketing collateral, packaging, and brand strategy development.",
  },
  {
    icon: "mdi:cart-outline",
    title: "Multi-Channel Sales",
    description:
      "E-commerce platforms, POS integration, and omnichannel strategy implementation.",
  },
  {
    icon: "mdi:warehouse",
    title: "Inventory Management",
    description:
      "Supply chain solutions, real-time tracking systems, and warehouse automation.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center sm:mb-12"
      >
        <h2 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl lg:text-5xl">
          Services & Solutions
        </h2>
        <p className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg md:text-xl">
          Comprehensive expertise across development, design, and business
          strategy.
        </p>
      </motion.div>

      {/* Services Grid - Mobile First */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:from-white/10 hover:to-blue-500/5 sm:rounded-2xl sm:p-8"
          >
            {/* Icon */}
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/30 sm:mb-4 sm:h-14 sm:w-14">
              <Icon
                icon={service.icon}
                className="h-6 w-6 text-blue-400 sm:h-7 sm:w-7"
              />
            </div>

            {/* Title */}
            <h3 className="mb-2 text-lg font-semibold text-white sm:mb-3 sm:text-xl md:text-2xl">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mb-3 text-sm leading-relaxed text-gray-300 sm:mb-4 sm:text-base">
              {service.description}
            </p>

            {/* Learn More Link */}
            <Link
              href="/services"
              className="inline-flex items-center text-xs font-medium text-blue-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300 sm:text-sm"
            >
              Learn More
              <Icon icon="mdi:arrow-right" className="ml-1 h-4 w-4" />
            </Link>

            {/* Hover Gradient Effect */}
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:scale-150 sm:h-32 sm:w-32" />
          </motion.div>
        ))}
      </div>

      {/* CTA Button - Mobile First */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 text-center sm:mt-12"
      >
        <Link
          href="/services"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
        >
          View All Services
          <Icon icon="mdi:arrow-right" className="h-5 w-5" />
        </Link>
      </motion.div>
    </section>
  );
}
