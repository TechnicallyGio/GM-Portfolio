"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

interface NavigationProps {
  links: Array<{
    name: string;
    url: string;
    children?: Array<{
      name: string;
      url: string;
    }>;
  }>;
}

export default function Navigation({ links }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (window.scrollY > 0) {
      setScrolled(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isActive = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  };

  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          top: -50,
          left: "5%",
          right: "5%",
          width: "90%",
        }}
        animate={{
          opacity: 1,
          y: 0,
          top: scrolled ? 0 : 20,
          left: scrolled ? 0 : "5%",
          right: scrolled ? 0 : "5%",
          width: scrolled ? "100%" : "90%",
          borderRadius: scrolled ? "0rem" : "1rem",
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={`fixed z-50 flex h-16 items-center justify-between px-6 backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/80 shadow-xl"
            : "border border-white/10 bg-black/60 shadow-lg shadow-blue-500/10"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="group relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-2xl font-bold tracking-tight text-white transition-all duration-300 group-hover:text-blue-400 md:text-3xl">
              MEDRANO
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link, index) => {
            const active = isActive(link.url);
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
              >
                <Link
                  href={link.url}
                  className="group relative px-4 py-2 transition-all duration-300"
                >
                  <span
                    className={`relative z-10 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                      active
                        ? "text-blue-400"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Hover/Active Background */}
                  <motion.div
                    className={`absolute inset-0 rounded-lg ${
                      active
                        ? "bg-blue-500/20"
                        : "bg-white/0 group-hover:bg-white/10"
                    }`}
                    layoutId={active ? "activeNav" : undefined}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Active Indicator */}
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-blue-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="ml-2"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-400"
            >
              <span>Get Started</span>
              <Icon
                icon="mdi:arrow-right"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={
              mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
            className="h-0.5 w-5 rounded-full bg-white"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-0.5 w-5 rounded-full bg-white"
          />
          <motion.span
            animate={
              mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
            className="h-0.5 w-5 rounded-full bg-white"
          />
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-40 h-screen w-full max-w-sm overflow-y-auto border-l border-white/10 bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-2xl lg:hidden"
            >
              {/* Menu Header */}
              <div className="border-b border-white/10 p-6">
                <h2 className="text-2xl font-bold text-white">Menu</h2>
                <p className="mt-1 text-sm text-gray-400">
                  Navigate to any section
                </p>
              </div>

              {/* Menu Links */}
              <nav className="p-6">
                <ul className="space-y-2">
                  {links.map((link, index) => {
                    const active = isActive(link.url);
                    return (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={link.url}
                          className={`group flex items-center justify-between rounded-xl px-4 py-4 transition-all duration-300 ${
                            active
                              ? "bg-blue-500/20 text-blue-400"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="text-lg font-medium">
                            {link.name}
                          </span>
                          {active ? (
                            <Icon
                              icon="mdi:check-circle"
                              className="h-5 w-5 text-blue-400"
                            />
                          ) : (
                            <Icon
                              icon="mdi:chevron-right"
                              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-400"
                  >
                    Get Started
                    <Icon icon="mdi:arrow-right" className="h-5 w-5" />
                  </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="mt-8 border-t border-white/10 pt-8"
                >
                  <p className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                    Connect
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com/in/gmedrano/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10"
                    >
                      <Icon
                        icon="mdi:linkedin"
                        className="h-5 w-5 text-gray-400 transition-colors hover:text-blue-400"
                      />
                    </a>
                    <a
                      href="https://github.com/technicallygio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10"
                    >
                      <Icon
                        icon="mdi:github"
                        className="h-5 w-5 text-gray-400 transition-colors hover:text-blue-400"
                      />
                    </a>
                    <a
                      href="mailto:contact@aorux.com"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10"
                    >
                      <Icon
                        icon="mdi:email-outline"
                        className="h-5 w-5 text-gray-400 transition-colors hover:text-blue-400"
                      />
                    </a>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
