"use client";

import type React from "react";

import {
  ChevronRight,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ExpandedDropList({
  setShowDropList,
}: {
  setShowDropList: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const moreMenuItems: {
    label: string;
    icon: React.ElementType;
    link: string;
  }[] = [
    { label: "Dev Choice", icon: Trophy, link: "/dev-choice" },

  ];

  return (
    <div className="bg-neutral-800/30 rounded-lg mt-2 overflow-hidden">
      {moreMenuItems.map((item, index) => {
        return (
          <Link to={item.link} key={`more-${index}`}>
            <div
              onClick={() => setShowDropList(false)}
              className="flex items-center justify-between px-6 py-3 text-white font-medium hover:bg-neutral-700/50 transition-colors duration-200 cursor-pointer group border-b border-neutral-700/30 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <item.icon
                  size={18}
                  className="text-teal-400 group-hover:text-teal-300 transition-colors"
                />
                <span className="text-sm group-hover:text-teal-100 transition-colors">
                  {item.label}
                </span>
              </div>
              <ChevronRight
                size={14}
                className="text-neutral-500 group-hover:text-teal-400 transition-colors"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
