import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between px-6 py-4 md:flex-row">
      <div className="mb-2 flex justify-center whitespace-nowrap md:mb-0">
        &copy; {new Date().getFullYear()} Giovanni Medrano. All rights reserved.
      </div>
      <div className="flex justify-center gap-4">
        <a
          href="https://linkedin.com/in/gmedrano/"
          className="flex items-center hover:text-red-500 dark:hover:text-red-400"
        >
          <Icon icon="mdi:linkedin" className="mr-1" /> LinkedIn
        </a>
        <span className="hidden md:inline">|</span>
        <a
          href="https://github.com/technicallygio"
          className="flex items-center hover:text-red-500 dark:hover:text-red-400"
        >
          <Icon icon="mdi:github" className="mr-1" /> GitHub
        </a>
      </div>
    </footer>
  );
}
