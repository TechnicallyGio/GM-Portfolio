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
  const colors = {
    professional: {
      active: "from-blue-600 to-blue-500",
      hover: "hover:bg-blue-500/10",
      text: "text-blue-400",
    },
    freelance: {
      active: "from-amber-600 to-amber-500",
      hover: "hover:bg-amber-500/10",
      text: "text-amber-400",
    },
  };

  const currentColors = colors[variant];

  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex min-w-max gap-2 md:justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChangeAction(tab.id)}
            className={`relative rounded-xl px-6 py-3 font-medium transition-all ${activeTab === tab.id ? "text-white" : "text-white/60"} ${activeTab !== tab.id ? currentColors.hover : ""} `}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId={`tab-${variant}`}
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${currentColors.active} `}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
