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
      {/* Hero */}
      <header className="relative flex w-full max-w-6xl flex-col-reverse items-center justify-center gap-10 py-12 sm:py-16 md:flex-row md:gap-16 md:py-20 lg:gap-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full space-y-6 text-center md:max-w-2xl md:text-left"
        >
          {/* Availability + location */}
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Available for select work
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400">
              <Icon icon="mdi:map-marker-outline" className="h-3.5 w-3.5" />
              Houston, TX
            </span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Giovanni
          </h1>

          <p className="text-lg font-medium text-zinc-300 sm:text-xl">
            Solutions Engineer &amp;{" "}
            <span className="text-blue-400">Full-Stack Developer</span>
          </p>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg md:mx-0">
            i love to code.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-400 sm:w-auto"
            >
              View Services
              <Icon icon="mdi:arrow-right" className="h-4 w-4" />
            </Link>
            <Link
              href="/work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:bg-white/[0.06] sm:w-auto"
            >
              See Case Studies
              <Icon icon="mdi:briefcase-outline" className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group relative flex-shrink-0"
        >
          <div className="absolute -inset-3 -z-10 rounded-full bg-blue-500/15 blur-2xl" />
          <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/10 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] sm:h-60 sm:w-60 md:h-72 md:w-72">
            <Image
              src="/images/profile_pic.png"
              alt="Giovanni Medrano headshot"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </header>

      <StatsBar />

      <ServicesGrid />

      <div className="w-full max-w-6xl">
        <FeaturedWorkSection workType="professional" projects={projects} />
        <FeaturedWorkSection workType="freelance" projects={projects} />
      </div>

      <WhyWorkWithMe />

      {/* Final CTA */}
      <section className="w-full max-w-6xl py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-12 md:p-16"
        >
          <div className="absolute top-[-6rem] left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Ready to scale your business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
            Let&apos;s discuss how I can help you achieve your goals with custom
            solutions tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-400"
          >
            Start a Conversation
            <Icon icon="mdi:arrow-right" className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
