"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <motion.nav
      initial={{ opacity: 0, top: -50, left: "5%", right: "5%", width: "90%" }}
      animate={{
        opacity: 1,
        y: 0,
        top: scrolled ? 0 : 20,
        left: scrolled ? 0 : "5%",
        right: scrolled ? 0 : "5%",
        width: scrolled ? "100%" : "90%",
        borderRadius: scrolled ? "0rem" : "1rem",

        boxShadow: scrolled
          ? "0 4px 20px rgba(0, 0, 0, 0.2)"
          : "0 0px 0px rgba(0, 0, 0, 0)",
      }}
      transition={{
        duration: 0.5, // Smooth transition for high refresh displays
        ease: [0.4, 0, 0.2, 1], // Equivalent to CSS ease-in-out
      }}
      className={`fixed z-50 flex h-16 items-center justify-between px-5 ${
        scrolled
          ? "bg-base-300 top-0 w-full rounded-none shadow-2xl backdrop-blur-3xl"
          : "bg-base-300 top-5 right-5 left-5 mx-auto w-auto rounded-2xl shadow-none md:w-4/5"
      }`}
    >
      <div className="navbar-start flex w-full items-center md:w-auto md:justify-start">
        <div className="dropdown mr-5 lg:mr-0">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 font-bold uppercase shadow"
          >
            {links.map((link) =>
              link.children ? (
                <li key={link.name}>
                  <details>
                    <summary>{link.name}</summary>
                    <ul className="p-2">
                      {link.children.map((child) => (
                        <li key={child.name}>
                          <Link href={child.url}>{child.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={link.name}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ),
            )}
          </ul>
        </div>
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="md:*text-left flex-grow"
        >
          <Link href="/" className="text-xl font-bold text-white md:text-3xl">
            MEDRANO
          </Link>
        </motion.div>
      </div>

      <div className="navbar-end hidden lg:flex">
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="menu menu-horizontal hidden gap-4 px-1 text-white uppercase lg:flex"
        >
          {links.map((link) =>
            link.children ? (
              <li key={link.name}>
                <details>
                  <summary>{link.name}</summary>
                  <ul className="p-2">
                    {link.children.map((child) => (
                      <li key={child.name}>
                        <Link href={child.url}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={link.name}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ),
          )}
        </motion.ul>
      </div>
    </motion.nav>
  );
}
