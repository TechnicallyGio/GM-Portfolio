"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const technicalSkills = [
  { icon: "mdi:react", name: "React & Next.js" },
  { icon: "mdi:language-typescript", name: "TypeScript" },
  { icon: "mdi:nodejs", name: "Node.js" },
  { icon: "mdi:database", name: "PostgreSQL & Prisma" },
  { icon: "mdi:tailwind", name: "Tailwind CSS" },
  { icon: "mdi:palette", name: "Figma & UI Design" },
];

const businessSkills = [
  { icon: "mdi:strategy", name: "Business Strategy" },
  { icon: "mdi:cart", name: "Multi-Channel Sales" },
  { icon: "mdi:warehouse", name: "Inventory Systems" },
  { icon: "mdi:chart-line", name: "E-commerce Solutions" },
  { icon: "mdi:cog", name: "Process Optimization" },
  { icon: "mdi:account-tie", name: "Client Consulting" },
];

const industries = [
  "E-commerce & Retail",
  "SaaS & Technology",
  "Food & Beverage",
  "Professional Services",
  "Construction & Trades",
  "Creative Agencies",
];

export default function About() {
  return (
    <div className="relative overflow-hidden px-4 text-white sm:px-6 md:px-10 lg:px-16">
      {/* Hero Section - Mobile First */}
      <motion.section
        className="relative z-10 mx-auto max-w-4xl py-8 sm:py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl sm:rounded-3xl sm:p-8 md:p-12">
          <h1 className="mb-4 text-center text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl">
            About Me
          </h1>

          <div className="space-y-4 text-sm leading-relaxed text-gray-200 sm:space-y-6 sm:text-base md:text-lg">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              Hi, I&apos;m{" "}
              <strong className="text-blue-400">Giovanni Medrano</strong> — a
              Solutions Engineer and Full-Stack Developer who bridges the gap
              between business strategy and technical execution.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              With a <strong>business degree</strong> and extensive self-taught
              technical expertise, I bring a unique perspective to every
              project. I don&apos;t just write code—I solve business problems
              with technology, helping brands scale efficiently and effectively.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              I maintain a{" "}
              <strong className="text-blue-300">
                dual professional practice
              </strong>
              , serving established clients with enterprise-grade solutions
              while also pursuing selective freelance projects and
              passion-driven startups. This balance allows me to stay at the
              forefront of technology while delivering real-world business
              value.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              My diverse professional background spans{" "}
              <strong className="text-blue-300">
                full-stack development, UI/UX design, solutions engineering,
                graphics design, multi-channel sales implementation, and
                inventory management systems
              </strong>
              . This multi-disciplinary approach allows me to see the complete
              picture and deliver comprehensive solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Currently, I serve clients on retainer, providing ongoing
              development, consulting, and strategic guidance. Whether
              you&apos;re a startup building your MVP or an established
              enterprise optimizing operations, I deliver solutions that drive
              measurable results.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Skills Grid Section - Mobile First */}
      <section className="relative z-10 mx-auto max-w-6xl py-8 sm:py-12 lg:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center text-2xl font-bold text-white sm:mb-12 sm:text-3xl md:text-4xl"
        >
          Expertise & Skills
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-xl sm:rounded-2xl sm:p-8"
          >
            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 sm:h-12 sm:w-12">
                <Icon
                  icon="mdi:code-braces"
                  className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6"
                />
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Technical Skills
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 rounded-lg bg-white/5 p-3 transition-all duration-300 hover:bg-white/10"
                >
                  <Icon
                    icon={skill.icon}
                    className="h-5 w-5 text-blue-400 sm:h-6 sm:w-6"
                  />
                  <span className="text-sm text-gray-200 sm:text-base">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-xl sm:rounded-2xl sm:p-8"
          >
            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] sm:h-12 sm:w-12">
                <Icon
                  icon="mdi:briefcase"
                  className="h-5 w-5 text-zinc-300 sm:h-6 sm:w-6"
                />
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Business Skills
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {businessSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 rounded-lg bg-white/5 p-3 transition-all duration-300 hover:bg-white/10"
                >
                  <Icon
                    icon={skill.icon}
                    className="h-5 w-5 text-zinc-400 sm:h-6 sm:w-6"
                  />
                  <span className="text-sm text-gray-200 sm:text-base">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Philosophy - Mobile First */}
      <section className="relative z-10 mx-auto max-w-4xl py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl sm:rounded-3xl sm:p-8 md:p-12"
        >
          <div className="mb-3 flex justify-center sm:mb-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 sm:h-16 sm:w-16">
              <Icon
                icon="mdi:lightbulb-on"
                className="h-6 w-6 text-blue-400 sm:h-8 sm:w-8"
              />
            </div>
          </div>
          <h2 className="mb-4 text-center text-2xl font-bold text-white sm:mb-6 sm:text-3xl md:text-4xl">
            The Intersection of Business & Technology
          </h2>
          <p className="text-center text-sm leading-relaxed text-gray-200 sm:text-base sm:leading-relaxed md:text-lg">
            My business education isn&apos;t just a credential—it&apos;s the
            foundation of how I approach technical solutions. I understand P&L
            statements, customer acquisition costs, and ROI just as well as I
            understand APIs, databases, and user interfaces. This dual
            perspective allows me to build solutions that don&apos;t just work
            technically, but drive real business value. Every line of code I
            write serves a business objective, and every design decision
            considers the bottom line.
          </p>
        </motion.div>
      </section>

      {/* Industries Served - Mobile First */}
      <section className="relative z-10 mx-auto max-w-4xl py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-white sm:mb-8 sm:text-3xl md:text-4xl">
            Industries Served
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 sm:p-4"
              >
                <span className="text-sm text-gray-200 sm:text-base">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Highlights - Mobile First */}
      <section className="relative z-10 mx-auto max-w-4xl py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:rounded-3xl sm:p-8 md:p-12"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-white sm:mb-8 sm:text-3xl md:text-4xl">
            Experience Highlights
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-green-400 sm:h-6 sm:w-6"
                />
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-white sm:text-base">
                    5+ Years Professional Development Experience
                  </h3>
                  <p className="text-xs text-gray-300 sm:text-sm">
                    Building enterprise web applications and digital solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-green-400 sm:h-6 sm:w-6"
                />
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-white sm:text-base">
                    Business Degree Background
                  </h3>
                  <p className="text-xs text-gray-300 sm:text-sm">
                    Strategic thinking meets technical execution
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-green-400 sm:h-6 sm:w-6"
                />
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-white sm:text-base">
                    Active Freelance Practice
                  </h3>
                  <p className="text-xs text-gray-300 sm:text-sm">
                    Selective side projects and ongoing client partnerships
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-green-400 sm:h-6 sm:w-6"
                />
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-white sm:text-base">
                    Dual Professional & Entrepreneurial Mindset
                  </h3>
                  <p className="text-xs text-gray-300 sm:text-sm">
                    Balancing enterprise solutions with innovative side projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA - Mobile First */}
      <section className="relative z-10 mx-auto max-w-4xl py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-xl sm:rounded-3xl sm:p-8 md:p-12"
        >
          <div className="absolute top-[-6rem] left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-white sm:mb-4 sm:text-3xl md:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-zinc-400 sm:mb-8 sm:text-base md:text-lg">
            Interested in collaborating? I&apos;m always open to discussing new
            projects and opportunities.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-400 sm:w-auto"
            >
              Get in Touch
              <Icon icon="mdi:message-outline" className="h-4 w-4" />
            </a>
            <a
              href="/work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:bg-white/[0.06] sm:w-auto"
            >
              View My Work
              <Icon icon="mdi:briefcase-outline" className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
