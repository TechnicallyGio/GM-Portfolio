"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../projects";

interface ProjectCardProps {
  project: Project;
  variant?: "professional" | "freelance";
  featured?: boolean;
}

export default function ProjectCard({
  project,
  variant = "professional",
  featured = false,
}: ProjectCardProps) {
  const colors = {
    professional: {
      accent: "from-blue-600 to-blue-500",
      border: "border-blue-500/20",
      tag: "bg-blue-500/10 text-blue-400",
      badge: "bg-blue-500/20 text-blue-300",
    },
    freelance: {
      accent: "from-amber-600 to-amber-500",
      border: "border-amber-500/20",
      tag: "bg-amber-500/10 text-amber-400",
      badge: "bg-amber-500/20 text-amber-300",
    },
  };

  const currentColors = colors[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-xl ${currentColors.border} transition-all duration-300 hover:bg-white/10 ${featured ? "ring-2 ring-offset-2 ring-offset-black/50" : ""} `}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden md:h-64">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {featured && (
          <div
            className={`absolute top-4 right-4 rounded-full bg-gradient-to-r px-3 py-1 ${currentColors.accent} text-sm font-medium text-white`}
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">
              {project.name}
            </h3>
            {project.clientType && (
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${currentColors.badge}`}
              >
                {project.clientType}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/60">
          {project.description}
        </p>

        {/* Business Impact */}
        {project.businessImpact && (
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-sm leading-relaxed text-white/80">
              <span className="font-semibold">Impact:</span>{" "}
              {project.businessImpact}
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium ${currentColors.tag}`}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${currentColors.tag}`}
            >
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r px-6 py-3 ${currentColors.accent} font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
        >
          View Project
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
