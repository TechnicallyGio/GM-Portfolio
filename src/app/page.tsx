"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";
import projects from "./projects";

export default function Home() {
  const featuredProject = projects.filter((project) => project.featured);

  return (
    <>
      <header className="relative isolate flex flex-col-reverse items-center justify-center gap-12 px-6 py-16 md:flex-row md:px-20 lg:px-32 xl:px-48">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute rounded-full bg-blue-400 opacity-20 blur-xl"
            style={{ top: "10%", left: "10%", width: "150px", height: "150px" }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full bg-blue-700 opacity-30 blur-2xl"
            style={{
              top: "70%",
              right: "20%",
              width: "200px",
              height: "200px",
            }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute rounded-full bg-slate-700 opacity-30 blur-2xl"
            style={{
              top: "10%",
              right: "20%",
              width: "100px",
              height: "100px",
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute rounded-full bg-blue-600 opacity-25 blur-xl"
            style={{
              bottom: "5%",
              left: "40%",
              width: "100px",
              height: "100px",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-2xl space-y-6 text-center text-white md:text-left"
        >
          <h1 className="text-5xl leading-tight font-extrabold drop-shadow-md md:text-6xl">
            <span className="bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">
              Giovanni Medrano
            </span>
          </h1>
          <p className="text-xl font-semibold tracking-wide text-gray-300">
            <span className="text-blue-700">Full Stack</span> Website Developer
          </p>
          <p className="text-lg leading-relaxed text-gray-400">
            Crafting engaging and performant web experiences is my passion. I
            enjoy tackling complex challenges with clean code and intuitive
            design. Let&apos;s build something amazing together.
          </p>

          <div className="flex flex-col gap-4">
            {featuredProject.length > 0 ? (
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {featuredProject.map((project, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-base-300 overflow-hidden rounded-lg transition-transform hover:scale-105"
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
                      className="h-32 w-full object-cover"
                    />
                    <div className="p-3 text-center">
                      <h3 className="text-lg font-bold text-white hover:text-blue-400">
                        {project.name}
                      </h3>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-2 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      >
                        View Project
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">
                No featured projects at the moment.
              </p>
            )}

            <div className="pt-2 text-center">
              <Link
                href="/work"
                className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="group relative z-10 flex-shrink-0"
        >
          <div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-yellow-500 to-red-800 opacity-75 blur-lg"
            style={{
              zIndex: -1,
              backgroundSize: "200% 200%",
              animation: "gradient 5s ease-in-out infinite",
            }}
          />
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-gray-800 shadow-xl transition duration-300 ease-in-out group-hover:scale-105 md:h-72 md:w-72">
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
    </>
  );
}
