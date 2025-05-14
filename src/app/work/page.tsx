"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const filters = ["All", "Frontend", "Full Stack", "Design", "Branding"];

const projects = [
  {
    id: 1,
    title: "Flight Logger",
    image: "/images/projects/flight-logger.png",
    tags: ["Design", "Frontend", "React", "Figma"],
  },
  {
    id: 2,
    title: "ShortFinal",
    image: "/images/projects/short-final.png",
    tags: ["Full Stack", "Laravel", "React", "Branding"],
  },
  {
    id: 3,
    title: "Garnica Cleaning",
    image: "/images/projects/garnica.png",
    tags: ["Frontend"],
  },
  {
    id: 4,
    title: "Swim School Marketing Collateral",
    image: "/images/projects/referral.png",
    tags: ["Design", "Illustrator"],
  },
  {
    id: 5,
    title: "AORUX",
    image: "/images/projects/ax.png",
    tags: ["Branding", "Full Stack"],
  },
  {
    id: 6,
    title: "AMILAGROS CO'",
    image: "/images/projects/amg.png",
    tags: ["Branding", "Packaging / Labeling"],
  },
  {
    id: 6,
    title: "VATSCAN",
    image: "/images/projects/amg.png",
    tags: ["Design", "Mobile App", "React"],
  },
];

export default function Work() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedFilter));

  return (
    <>
      <header className="relative top-10 px-6 py-16 sm:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-extrabold text-white">
            Featured Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Here are some of my recent projects. I enjoy working on a variety of
            technologies and platforms, and I am always looking for new
            challenges to tackle. If you have a project in mind, feel free to
            reach out!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedFilter === filter
                  ? "bg-white text-gray-900"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 transition-all duration-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="transform overflow-hidden rounded-2xl bg-blue-950 shadow-lg transition-all duration-800 ease-in-out hover:scale-105 hover:bg-gray-700 hover:shadow-xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-48 w-full object-cover grayscale filter transition-all duration-500 ease-in-out hover:grayscale-0"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>
    </>
  );
}
