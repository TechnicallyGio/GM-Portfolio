"use client";

import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
}

interface TabSelectorProps {
  tabs: Tab[];
  activeTab: string;
  onChangeAction: (tabId: string) => void;
  variant?: "professional" | "freelance";
}

export default function TabSelector({
  tabs,
  activeTab,
  onChangeAction,
  variant = "professional",
}: TabSelectorProps) {
  const activeClass =
    variant === "professional" ? "bg-blue-500" : "bg-white/10";

  return (
    <div className="hide-scrollbar w-full overflow-x-auto pb-1">
      <div className="mx-auto flex min-w-max gap-1 rounded-full border border-white/[0.08] bg-white/[0.02] p-1 md:w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChangeAction(tab.id)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-white"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-pill"
                className={`absolute inset-0 rounded-full ${activeClass}`}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
