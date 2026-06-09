"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import projects from "./projects";
import StatsBar from "./_components/StatsBar";
import ServicesGrid from "./_components/ServicesGrid";
import FeaturedWorkSection from "./_components/FeaturedWorkSection";
import WhyWorkWithMe from "./_components/WhyWorkWithMe";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start">
      {/* Hero Section - Mobile First */}
      <header className="relative isolate flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-8 px-4 py-8 sm:px-6 sm:py-10 md:flex-row md:gap-12 md:px-10 lg:gap-24 lg:px-16 xl:gap-32 xl:px-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full space-y-4 text-center md:max-w-2xl md:space-y-6 md:text-left"
        >
          <h1 className="text-3xl leading-tight font-extrabold drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">
              Hi, I&apos;m Giovanni 👋
            </span>
          </h1>
          <p className="text-lg font-semibold tracking-wide text-gray-300 sm:text-xl md:text-2xl">
            Solutions Engineer &{" "}
            <span className="text-blue-400">Full-Stack Developer</span>
          </p>
          <p className="text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            I&apos;m a{" "}
            <strong className="text-white">
              business degree holder who fell in love with code
            </strong>
            . By day, I build enterprise e-commerce platforms with Stripe and
            Zoho integrations for established businesses. By night, I work on{" "}
            <strong className="text-blue-400">passion projects</strong> in
            aviation tech and help startups launch their MVPs.
          </p>

          {/* CTA Buttons - Mobile First Stack */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              View Services
              <Icon icon="mdi:arrow-right" className="h-5 w-5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-blue-500/50 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              See Case Studies
              <Icon icon="mdi:briefcase-outline" className="h-5 w-5" />
            </Link>
          </div>

          {/* Availability & Location Badge */}
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-2 text-xs font-medium text-green-400 backdrop-blur-xl sm:px-4 sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
              Available for Enterprise & Select Freelance Work
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-400 backdrop-blur-xl sm:px-4 sm:text-sm">
              <Icon icon="mdi:map-marker" className="h-3 w-3" />
              Houston, TX
            </div>
          </div>
        </motion.div>

        {/* Profile Image - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
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
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-gray-800 shadow-2xl backdrop-blur-3xl transition duration-300 ease-in-out group-hover:scale-105 sm:h-64 sm:w-64 md:h-75 md:w-75">
            <Image
              src="/images/profile_pic.png"
              alt="Giovanni Medrano headshot"
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:brightness-110"
              priority
            />
          </div>
        </motion.div>
      </header>

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Section */}
      <ServicesGrid />

      {/* Dual Featured Work Sections - Side by Side Desktop, Stacked Mobile */}
      <div className="relative z-10 w-full max-w-7xl space-y-0">
        {/* Professional Work */}
        <FeaturedWorkSection workType="professional" projects={projects} />

        {/* Freelance Projects */}
        <FeaturedWorkSection workType="freelance" projects={projects} />
      </div>

      {/* Final CTA Section - Mobile First */}
      <section className="relative z-10 w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 text-center backdrop-blur-xl sm:rounded-3xl sm:p-12 md:p-16"
        >
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to Scale Your Business?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-base text-gray-200 sm:mb-8 sm:text-lg md:text-xl">
            Let&apos;s discuss how I can help you achieve your goals with custom
            solutions tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 sm:w-auto sm:px-10 sm:py-5 sm:text-xl"
          >
            Start a Conversation
            <Icon
              icon="mdi:message-outline"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
