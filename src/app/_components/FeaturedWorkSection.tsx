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
      title: "Professional Work",
      description:
        "Enterprise solutions and business-critical applications for established clients",
      accent: "from-blue-600 to-blue-500",
      textAccent: "text-blue-400",
      ctaText: "View All Professional Work",
    },
    freelance: {
      title: "Freelance Projects",
      description:
        "Innovative side projects and startup MVPs built with passion",
      accent: "from-amber-600 to-amber-500",
      textAccent: "text-amber-400",
      ctaText: "View All Freelance Projects",
    },
  };

  const currentConfig = config[workType];
  const featuredProject = projects.find(
    (p) => p.featured && p.workType === workType,
  );

  if (!featuredProject) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2
            className={`mb-4 bg-gradient-to-r text-3xl font-bold md:text-4xl ${currentConfig.accent} bg-clip-text text-transparent`}
          >
            {currentConfig.title}
          </h2>
          <p className="mx-auto max-w-2xl text-white/60">
            {currentConfig.description}
          </p>
        </motion.div>

        {/* Featured Project */}
        <div className="mx-auto mb-8 max-w-4xl">
          <ProjectCard
            project={featuredProject}
            variant={workType}
            featured={true}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Link
            href="/work"
            className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl ${currentConfig.textAccent} font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10`}
          >
            {currentConfig.ctaText}
            <svg
              className="h-5 w-5"
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
