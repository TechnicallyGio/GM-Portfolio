"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Let&apos;s Work Together
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
            Have a project in mind? I&apos;m always interested in discussing new
            opportunities and collaborations.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto max-w-2xl space-y-8"
        >
          {/* Get In Touch Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
              Get In Touch
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/20">
                  <Icon
                    icon="mdi:email-outline"
                    className="h-6 w-6 text-blue-400"
                  />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">Email</h3>
                  <a
                    href="mailto:contact@aorux.com"
                    className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
                  >
                    contact@aorux.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/20">
                  <Icon
                    icon="mdi:linkedin"
                    className="h-6 w-6 text-blue-400"
                  />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/gmedrano/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
                  >
                    linkedin.com/in/gmedrano
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/20">
                  <Icon icon="mdi:github" className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">GitHub</h3>
                  <a
                    href="https://github.com/technicallygio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
                  >
                    github.com/technicallygio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl md:p-10">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400"></span>
              <h3 className="text-lg font-semibold text-white">
                Current Availability
              </h3>
            </div>
            <p className="mb-4 text-gray-300">
              Accepting select projects for Q3 2026
            </p>
            <p className="text-sm text-gray-400">
              I typically respond within 24-48 hours. Looking forward to
              hearing from you!
            </p>
          </div>

          {/* Response Time Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <h3 className="mb-4 text-lg font-semibold text-white">
              What to Expect
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-green-400"
                />
                <span className="text-gray-300">
                  Initial response within 24-48 hours
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-green-400"
                />
                <span className="text-gray-300">
                  Free consultation to discuss your needs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-green-400"
                />
                <span className="text-gray-300">
                  Detailed proposal with timeline and pricing
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
