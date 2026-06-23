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
  const isPro = variant === "professional";
  const tagClass = isPro
    ? "bg-blue-500/10 text-blue-400"
    : "bg-white/[0.05] text-zinc-300";
  const badgeClass = isPro
    ? "border-blue-500/20 bg-blue-500/10 text-blue-300"
    : "border-white/10 bg-white/[0.05] text-zinc-300";
  const ctaClass = isPro
    ? "bg-blue-500 text-white hover:bg-blue-400"
    : "border border-white/10 bg-white/[0.04] text-zinc-200 hover:bg-white/[0.08]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.04] ${featured ? "ring-1 ring-white/10" : ""}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden md:h-64">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {featured && (
          <div className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
              {project.name}
            </h3>
            {project.clientType && (
              <span
                className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${badgeClass}`}
              >
                {project.clientType}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {/* Business Impact */}
        {project.businessImpact && (
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
            <p className="text-sm leading-relaxed text-zinc-300">
              <span className="font-medium text-white">Impact:</span>{" "}
              {project.businessImpact}
            </p>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-medium ${tagClass}`}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${tagClass}`}
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
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${ctaClass}`}
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
