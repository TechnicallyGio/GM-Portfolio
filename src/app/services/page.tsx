"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface ServiceDetail {
  icon: string;
  title: string;
  description: string;
  includes: string[];
  idealFor: string[];
  technologies: string[];
}

const servicesDetail: ServiceDetail[] = [
  {
    icon: "mdi:code-braces",
    title: "Full-Stack Development",
    description:
      "Build modern, scalable web applications with cutting-edge technologies. From responsive front-ends to robust back-end systems, I deliver solutions that perform.",
    includes: [
      "Custom web application development",
      "Responsive design & mobile optimization",
      "API development & integration",
      "Database design & optimization",
      "Progressive web apps (PWA)",
      "Performance optimization",
    ],
    idealFor: [
      "Startups needing MVP development",
      "Businesses requiring custom platforms",
      "Companies modernizing legacy systems",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    icon: "mdi:palette-outline",
    title: "UI/UX Design",
    description:
      "Create intuitive, user-centered interfaces that drive engagement and conversions. I focus on both aesthetics and functionality to deliver exceptional user experiences.",
    includes: [
      "User research & personas",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Design system creation",
      "Usability testing",
      "Responsive design strategy",
    ],
    idealFor: [
      "Products launching new features",
      "Companies rebranding",
      "Apps needing UX improvements",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer", "Miro"],
  },
  {
    icon: "mdi:cog-outline",
    title: "Solutions Engineering",
    description:
      "Design and implement technical architectures that scale. I bridge business requirements with technical execution, ensuring your infrastructure supports growth.",
    includes: [
      "Technical architecture design",
      "System integration & APIs",
      "Cloud infrastructure setup",
      "Scalability planning",
      "Third-party integrations",
      "Technical consulting",
    ],
    idealFor: [
      "Enterprises scaling operations",
      "Businesses integrating systems",
      "Companies needing technical strategy",
    ],
    technologies: [
      "AWS",
      "Vercel",
      "Docker",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    icon: "mdi:brush-variant",
    title: "Graphics & Branding",
    description:
      "Develop compelling visual identities that resonate with your audience. From logos to complete brand systems, I create designs that tell your story.",
    includes: [
      "Logo design & brand identity",
      "Marketing collateral design",
      "Packaging & label design",
      "Social media graphics",
      "Print design",
      "Brand guideline development",
    ],
    idealFor: [
      "New businesses launching",
      "Established brands refreshing identity",
      "Companies needing marketing materials",
    ],
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma",
      "CorelDRAW",
    ],
  },
  {
    icon: "mdi:cart-outline",
    title: "Multi-Channel Sales Implementation",
    description:
      "Implement comprehensive sales systems across multiple channels. I help businesses unify their online and offline sales with integrated e-commerce and POS solutions.",
    includes: [
      "E-commerce platform development",
      "POS system integration",
      "Payment gateway setup",
      "Omnichannel strategy",
      "Order management systems",
      "Sales analytics & reporting",
    ],
    idealFor: [
      "Retailers going omnichannel",
      "Brands expanding sales channels",
      "Businesses optimizing checkout",
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Square",
      "Stripe",
      "Custom solutions",
    ],
  },
  {
    icon: "mdi:warehouse",
    title: "Inventory Management Systems",
    description:
      "Streamline your supply chain with real-time inventory tracking and automation. I build systems that reduce errors, save time, and improve operational efficiency.",
    includes: [
      "Real-time inventory tracking",
      "Warehouse management systems",
      "Automated reordering",
      "Multi-location support",
      "Barcode/QR scanning integration",
      "Supplier management",
    ],
    idealFor: [
      "Retailers with multiple locations",
      "Distributors managing stock",
      "Manufacturers tracking materials",
    ],
    technologies: [
      "Custom databases",
      "API integrations",
      "Barcode systems",
      "Cloud platforms",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding your business goals, challenges, and requirements through in-depth consultation.",
    icon: "mdi:magnify",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Planning the optimal solution with detailed specifications, timelines, and technical architecture.",
    icon: "mdi:lightbulb-outline",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Building with precision using agile methodology, maintaining clear communication throughout.",
    icon: "mdi:hammer-wrench",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Providing ongoing optimization, maintenance, and updates to ensure continued success.",
    icon: "mdi:headset",
  },
];

const engagementModels = [
  {
    icon: "mdi:file-document-outline",
    title: "Project-Based",
    description:
      "Fixed scope deliverables with defined timeline and budget. Ideal for specific initiatives with clear requirements.",
    features: [
      "Clear scope & deliverables",
      "Fixed pricing",
      "Defined timeline",
      "Milestone-based payments",
    ],
  },
  {
    icon: "mdi:calendar-clock",
    title: "Retainer",
    description:
      "Ongoing support and development with monthly commitment. Perfect for continuous improvement and maintenance.",
    features: [
      "Dedicated availability",
      "Flexible priorities",
      "Monthly hours allocation",
      "Long-term partnership",
    ],
  },
  {
    icon: "mdi:account-tie",
    title: "Consulting",
    description:
      "Strategic guidance and technical expertise for complex decisions. Best for planning and optimization.",
    features: [
      "Expert advice",
      "Architecture reviews",
      "Technology selection",
      "Process optimization",
    ],
  },
];

export default function Services() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Services & Solutions
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl">
            Comprehensive expertise across development, design, and business
            strategy. I deliver end-to-end solutions that drive measurable
            results for brands of all sizes.
          </p>
        </motion.div>
      </section>

      {/* Services Detail Grid */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 md:px-10 lg:px-16">
        <div className="space-y-12">
          {servicesDetail.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-xl md:p-12"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Left: Icon & Title */}
                <div className="lg:col-span-1">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20">
                    <Icon
                      icon={service.icon}
                      className="h-8 w-8 text-blue-400"
                    />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-gray-300">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-blue-400 transition-all duration-300 hover:gap-3 hover:text-blue-300"
                  >
                    Get Started
                    <Icon icon="mdi:arrow-right" className="h-5 w-5" />
                  </Link>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* What's Included */}
                    <div>
                      <h3 className="mb-3 text-lg font-semibold text-white">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-2">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-gray-300"
                          >
                            <Icon
                              icon="mdi:check-circle"
                              className="mt-1 h-5 w-5 flex-shrink-0 text-green-400"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For & Technologies */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-3 text-lg font-semibold text-white">
                          Ideal For
                        </h3>
                        <ul className="space-y-2">
                          {service.idealFor.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <Icon
                                icon="mdi:account-check"
                                className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 text-lg font-semibold text-white">
                          Technologies & Tools
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            How I Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            A proven process that ensures successful project delivery from
            concept to completion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 text-5xl font-bold text-blue-500/30">
                {step.number}
              </div>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                <Icon icon={step.icon} className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Engagement Models
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Flexible engagement options to match your project needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-xl"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20">
                <Icon icon={model.icon} className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">
                {model.title}
              </h3>
              <p className="mb-6 text-gray-300">{model.description}</p>
              <ul className="space-y-2">
                {model.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <Icon
                      icon="mdi:check"
                      className="mt-1 h-5 w-5 flex-shrink-0 text-green-400"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work With Me Section */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Work With Me
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Two distinct engagement tracks tailored to different project needs
            and scopes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Professional Work */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-8 backdrop-blur-xl"
          >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500">
              <Icon icon="mdi:briefcase" className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">
              For Professional Clients
            </h3>
            <p className="mb-6 text-gray-300">
              Enterprise-grade solutions for established businesses requiring
              robust, scalable systems and integrations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                />
                <span className="text-gray-300">
                  <strong className="text-white">E-commerce Platforms:</strong>{" "}
                  Full-stack solutions with payment processing and CRM
                  integration
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                />
                <span className="text-gray-300">
                  <strong className="text-white">Business Systems:</strong>{" "}
                  Custom applications to streamline operations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                />
                <span className="text-gray-300">
                  <strong className="text-white">Technical Consulting:</strong>{" "}
                  Architecture planning and technology selection
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                />
                <span className="text-gray-300">
                  <strong className="text-white">Multi-Channel Sales:</strong>{" "}
                  Inventory management and marketplace integration
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-blue-400 transition-all duration-300 hover:gap-3 hover:text-blue-300"
              >
                View Professional Work
                <Icon icon="mdi:arrow-right" className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Freelance Projects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl"
          >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
              <Icon icon="mdi:rocket-launch" className="h-7 w-7 text-zinc-200" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">
              For Freelance Projects
            </h3>
            <p className="mb-6 text-gray-300">
              Selective side projects for startups and passion initiatives that
              align with my interests and expertise.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-zinc-400"
                />
                <span className="text-gray-300">
                  <strong className="text-white">Startup MVPs:</strong> Rapid
                  development of minimum viable products
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-zinc-400"
                />
                <span className="text-gray-300">
                  <strong className="text-white">SaaS Applications:</strong>{" "}
                  Full-stack web apps with modern tech stacks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-zinc-400"
                />
                <span className="text-gray-300">
                  <strong className="text-white">Retainer Arrangements:</strong>{" "}
                  Ongoing development and support
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  icon="mdi:check-circle"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-zinc-400"
                />
                <span className="text-gray-300">
                  <strong className="text-white">Passion Projects:</strong>{" "}
                  Innovative ideas in aviation, tech, or creative industries
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-zinc-300 transition-all duration-300 hover:gap-3 hover:text-white"
              >
                View Freelance Projects
                <Icon icon="mdi:arrow-right" className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center backdrop-blur-xl md:p-16"
        >
          <div className="absolute top-[-6rem] left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Ready to get started? Schedule a consultation to discuss your needs
            and explore how I can help bring your vision to life.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-400"
            >
              Get in Touch
              <Icon icon="mdi:message-outline" className="h-5 w-5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-base font-medium text-zinc-200 transition-colors duration-200 hover:bg-white/[0.06]"
            >
              View Case Studies
              <Icon icon="mdi:briefcase-outline" className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
