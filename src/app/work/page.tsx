"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TabSelector from "../_components/TabSelector";
import ProjectCard from "../_components/ProjectCard";
import projects from "../projects";

const tabs = [
  { id: "professional", label: "Professional Work" },
  { id: "freelance", label: "Freelance Projects" },
];

const professionalFilters = [
  "All",
  "Full-Stack Development",
  "Design & Branding",
  "E-Commerce",
];

const freelanceFilters = [
  "All",
  "Full-Stack Development",
  "Design & Branding",
  "Startup MVPs",
];

export default function Work() {
  const [activeTab, setActiveTab] = useState<"professional" | "freelance">(
    "professional",
  );
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter projects by work type
  const projectsByType = projects.filter(
    (project) => project.workType === activeTab,
  );

  // Further filter by category
  const filteredProjects =
    selectedFilter === "All"
      ? projectsByType
      : projectsByType.filter((project) =>
          project.categories.includes(selectedFilter),
        );

  // Get the appropriate filters for the active tab
  const currentFilters =
    activeTab === "professional" ? professionalFilters : freelanceFilters;

  // Reset filter when switching tabs
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as "professional" | "freelance");
    setSelectedFilter("All");
  };

  const config = {
    professional: {
      title: "Professional Work",
      description:
        "Enterprise solutions and business-critical applications for established clients",
    },
    freelance: {
      title: "Freelance Projects",
      description:
        "Innovative side projects and startup MVPs built with passion",
    },
  };

  const currentConfig = config[activeTab];

  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Header - Mobile First */}
      <header className="mb-8 text-center sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-3xl font-extrabold text-white sm:mb-4 sm:text-4xl md:text-5xl"
        >
          My Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl"
        >
          Explore my professional client work and freelance passion projects
        </motion.p>
      </header>

      {/* Tab Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 sm:mb-10"
      >
        <TabSelector
          tabs={tabs}
          activeTab={activeTab}
          onChangeAction={handleTabChange}
          variant={activeTab}
        />
      </motion.div>

      {/* Tab Content Description */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 text-center sm:mb-10"
      >
        <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
          {currentConfig.title}
        </h3>
        <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base">
          {currentConfig.description}
        </p>
      </motion.div>

      {/* Filter Buttons - Mobile First Horizontal Scroll */}
      <motion.div
        key={`${activeTab}-filters`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-8 sm:mb-10"
      >
        <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-2 sm:justify-center sm:gap-3">
          {currentFilters.map((filter) => (
            <button
              key={filter}
              aria-pressed={selectedFilter === filter}
              onClick={() => setSelectedFilter(filter)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
                selectedFilter === filter
                  ? activeTab === "professional"
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg shadow-amber-500/30"
                  : "border-2 border-white/10 bg-white/5 text-gray-300 backdrop-blur-xl hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Project Grid - Mobile First */}
      <div className="grid grid-cols-1 gap-4 transition-all duration-300 ease-in-out sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <ProjectCard project={project} variant={activeTab} />
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16 text-center sm:py-20"
        >
          <div className="mx-auto mb-4 h-12 w-12 text-gray-500 sm:h-16 sm:w-16">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-full w-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>
          <p className="text-lg text-gray-400 sm:text-xl">
            No projects found in this category.
          </p>
        </motion.div>
      )}

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
