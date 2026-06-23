"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import type { Project } from "../projects";

interface FeaturedWorkSectionProps {
  workType: "professional" | "freelance";
  projects: Project[];
}

export default function FeaturedWorkSection({
  workType,
  projects,
}: FeaturedWorkSectionProps) {
  const config = {
    professional: {
      label: "Professional",
      title: "Professional Work",
      description:
        "Enterprise solutions and business-critical applications for established clients",
      labelClass: "border-blue-500/20 bg-blue-500/10 text-blue-400",
      ctaText: "View All Professional Work",
    },
    freelance: {
      label: "Freelance",
      title: "Freelance Projects",
      description:
        "Innovative side projects and startup MVPs built with passion",
      labelClass: "border-white/10 bg-white/[0.04] text-zinc-300",
      ctaText: "View All Freelance Projects",
    },
  };

  const currentConfig = config[workType];
  const featuredProject = projects.find(
    (p) => p.featured && p.workType === workType,
  );

  if (!featuredProject) return null;

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span
            className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${currentConfig.labelClass}`}
          >
            {currentConfig.label}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {currentConfig.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
            {currentConfig.description}
          </p>
        </motion.div>

        {/* Featured Project */}
        <div className="mb-8">
          <ProjectCard
            project={featuredProject}
            variant={workType}
            featured={true}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:bg-white/[0.06]"
          >
            {currentConfig.ctaText}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
