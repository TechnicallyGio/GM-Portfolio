import { Icon } from "@iconify/react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Branding */}
          <div>
            <Link href="/" className="mb-4 block">
              <h3 className="text-2xl font-bold text-white">MEDRANO</h3>
              <p className="text-sm text-gray-400">
                Professional Solutions Engineer | Freelance Developer
              </p>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Delivering enterprise solutions through full-stack development,
              design, and business strategy.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Services
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">Full-Stack Development</li>
              <li className="text-sm text-gray-400">UI/UX Design</li>
              <li className="text-sm text-gray-400">Solutions Engineering</li>
              <li className="text-sm text-gray-400">Graphics & Branding</li>
              <li className="text-sm text-gray-400">Business Consulting</li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                <Icon icon="mdi:email-outline" className="h-5 w-5" />
                Email
              </a>
              <a
                href="https://linkedin.com/in/gmedrano/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                <Icon icon="mdi:linkedin" className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/technicallygio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
              >
                <Icon icon="mdi:github" className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Giovanni Medrano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
