"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projects from "./projects";

export default function Home() {
  const featuredProject = projects.filter((project) => project.featured);
  const maxFeaturedProjectsMobile = 2; // Limit on smaller screens

  return (
    <div className="flex flex-col items-center justify-start py-10">
      <header className="relative isolate flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 md:flex-row md:gap-24 md:px-10 lg:gap-32 lg:px-16 xl:gap-40 xl:px-20 2xl:gap-48 2xl:px-24">
        {/* Animated Background Circles with Northern Lights Colors */}

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-xl space-y-6 text-center text-white md:max-w-2xl md:text-left"
        >
          <h1 className="text-4xl leading-tight font-extrabold drop-shadow-md md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">
              Giovanni Medrano
            </span>
          </h1>
          <p className="text-xl font-semibold tracking-wide text-gray-300 md:text-2xl">
            <span className="text-blue-700">Full Stack</span> Website Developer
          </p>
          <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
            Crafting engaging and performant web experiences is my passion. I
            enjoy tackling complex challenges with clean code and intuitive
            design. Let&apos;s build something amazing together.
          </p>

          <div className="flex flex-col gap-4 md:gap-6">
            {featuredProject.length > 0 ? (
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {featuredProject
                  .slice(0, maxFeaturedProjectsMobile)
                  .map((project, idx) => (
                    <motion.div
                      key={project.slug}
                      className="bg-base-300 overflow-hidden rounded-md transition-transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        width={1000}
                        height={1000}
                        className="h-32 w-full object-cover md:h-48"
                      />
                      <div className="p-3 text-center md:p-4">
                        <h3 className="text-lg font-bold text-white hover:text-blue-400 md:text-xl">
                          {project.name}
                        </h3>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="md:text-md mt-2 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                        >
                          View Project
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                {featuredProject.length > maxFeaturedProjectsMobile && (
                  <div className="pt-2 text-center sm:hidden">
                    <Link
                      href="/work"
                      className="btn btn-outline btn-sm border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      View All{" "}
                      {featuredProject.length - maxFeaturedProjectsMobile}+ More
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-lg text-gray-400">
                No featured projects at the moment.
              </p>
            )}

            <div className="hidden pt-3 text-center sm:block">
              <Link
                href="/work"
                className="btn btn-outline btn-md border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Profile Image (Bigger and Collapsing in Reverse) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }} // Start slightly bigger
          animate={{ opacity: 1, scale: 1 }} // Animate to normal size
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative z-10 flex-shrink-0"
        >
          <div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-yellow-500 to-red-800 opacity-75 blur-2xl"
            style={{
              zIndex: -1,
              backgroundSize: "200% 200%",
              animation: "gradient 5s ease-in-out infinite",
            }}
          />
          <div className="shadow-3xl relative h-75 w-75 overflow-hidden rounded-full border-4 border-gray-800 shadow-2xl backdrop-blur-3xl transition duration-300 ease-in-out group-hover:scale-105">
            <Image
              src="/images/profile_pic.png"
              alt="Giovanni Medrano headshot"
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:brightness-110"
            />
          </div>
        </motion.div>
      </header>
    </div>
  );
}
