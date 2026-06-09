"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission (e.g., to an API endpoint)
    // For now, we'll simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

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

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
              <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                Send Me a Message
              </h2>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-400"
                >
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" className="h-5 w-5" />
                    <span>
                      Message sent successfully! I&apos;ll get back to you
                      within 24-48 hours.
                    </span>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-xl transition-all duration-300 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-xl transition-all duration-300 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-xl transition-all duration-300 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Project Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl transition-all duration-300 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  >
                    <option value="" className="bg-gray-900">
                      Select a service
                    </option>
                    <optgroup
                      label="Professional Inquiries"
                      className="bg-gray-900"
                    >
                      <option
                        value="Enterprise Development"
                        className="bg-gray-900"
                      >
                        Enterprise Development
                      </option>
                      <option
                        value="E-commerce Platform"
                        className="bg-gray-900"
                      >
                        E-commerce Platform
                      </option>
                      <option
                        value="System Integration"
                        className="bg-gray-900"
                      >
                        System Integration (Stripe, Zoho, etc.)
                      </option>
                      <option
                        value="Business Consulting"
                        className="bg-gray-900"
                      >
                        Technical Consulting
                      </option>
                    </optgroup>
                    <optgroup
                      label="Freelance Inquiries"
                      className="bg-gray-900"
                    >
                      <option
                        value="Freelance Development"
                        className="bg-gray-900"
                      >
                        Freelance Development
                      </option>
                      <option value="Startup MVP" className="bg-gray-900">
                        Startup MVP
                      </option>
                      <option
                        value="Retainer Arrangement"
                        className="bg-gray-900"
                      >
                        Retainer Arrangement
                      </option>
                      <option value="Side Project" className="bg-gray-900">
                        Side Project Collaboration
                      </option>
                    </optgroup>
                    <optgroup label="General" className="bg-gray-900">
                      <option value="UI/UX Design" className="bg-gray-900">
                        UI/UX Design
                      </option>
                      <option
                        value="Graphics & Branding"
                        className="bg-gray-900"
                      >
                        Graphics & Branding
                      </option>
                      <option value="Other" className="bg-gray-900">
                        Other
                      </option>
                    </optgroup>
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl transition-all duration-300 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  >
                    <option value="" className="bg-gray-900">
                      Select budget range
                    </option>
                    <option value="< $5K" className="bg-gray-900">
                      &lt; $5K
                    </option>
                    <option value="$5K - $15K" className="bg-gray-900">
                      $5K - $15K
                    </option>
                    <option value="$15K - $50K" className="bg-gray-900">
                      $15K - $50K
                    </option>
                    <option value="$50K+" className="bg-gray-900">
                      $50K+
                    </option>
                    <option value="Retainer/Ongoing" className="bg-gray-900">
                      Retainer/Ongoing
                    </option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label
                    htmlFor="timeline"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl transition-all duration-300 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  >
                    <option value="" className="bg-gray-900">
                      Select timeline
                    </option>
                    <option value="Urgent (< 1 month)" className="bg-gray-900">
                      Urgent (&lt; 1 month)
                    </option>
                    <option value="1-3 months" className="bg-gray-900">
                      1-3 months
                    </option>
                    <option value="3-6 months" className="bg-gray-900">
                      3-6 months
                    </option>
                    <option value="6+ months" className="bg-gray-900">
                      6+ months
                    </option>
                    <option value="Flexible" className="bg-gray-900">
                      Flexible
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 backdrop-blur-xl transition-all duration-300 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Icon
                        icon="mdi:loading"
                        className="h-5 w-5 animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Icon icon="mdi:send" className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
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
                      href="mailto:your.email@example.com"
                      className="text-gray-300 transition-colors duration-300 hover:text-blue-400"
                    >
                      your.email@example.com
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
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-green-600/10 to-blue-600/10 p-8 backdrop-blur-xl md:p-10">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>
                <h3 className="text-lg font-semibold text-white">
                  Current Availability
                </h3>
              </div>
              <p className="mb-4 text-gray-300">
                Accepting select projects for Q1 2025
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
        </div>
      </section>
    </div>
  );
}
