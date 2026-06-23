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
    <section className="mx-auto w-full max-w-6xl py-16 sm:py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center sm:mb-14"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Services &amp; Solutions
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Comprehensive expertise across development, design, and business
          strategy.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.04] sm:p-7"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-400">
              <Icon icon={service.icon} className="h-5 w-5" />
            </div>

            <h3 className="mb-2 text-lg font-medium text-white sm:text-xl">
              {service.title}
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-zinc-400">
              {service.description}
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-300"
            >
              Learn more
              <Icon
                icon="mdi:arrow-right"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-10 text-center sm:mt-12"
      >
        <Link
          href="/services"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:bg-white/[0.06] sm:w-auto"
        >
          View All Services
          <Icon icon="mdi:arrow-right" className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
}
