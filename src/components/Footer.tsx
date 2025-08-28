"use client"

import { ChevronUp, Code, Gamepad2, Globe, Heart, Users } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const footerSections = {
    games: {
      title: "Games",
      icon: Globe,
      links: [
        { label: "All Games", href: "/games" },
        { label: "Dev Choice", href: "/dev-choice" },
      ],
    },
    resources: {
      title: "Navigate",
      icon: Code,
      links: [
        { label: "API Documentation", href: "/api-docs" },
        { label: "Contributors", href: "/contributers" },
        { label: "NWG Game", href: "/nwg.io" },
      ],
    },
    community: {
      title: "Community",
      icon: Users,
      links: [
        { label: "GitHub", href: "https://github.com/alialridaalnajjar" },
        { label: "Discord", href: "https://discord.com" },
      ],
    },
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 mt-auto">
      <div className="lg:hidden">
        <div className="px-4 py-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center">
                <Gamepad2 size={14} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">NWG</h3>
            </div>
            <p className="text-neutral-400 text-xs">Free-to-play games, no wallet required</p>
          </div>

          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="border-b border-neutral-800 last:border-b-0">
              <button
                onClick={() => toggleSection(key)}
                className="w-full flex items-center justify-between py-3 text-white font-medium"
              >
                <div className="flex items-center gap-2">
                  <section.icon size={16} className="text-teal-400" />
                  <span className="text-sm">{section.title}</span>
                </div>
                <ChevronUp
                  size={16}
                  className={`text-neutral-400 transition-transform ${expandedSection === key ? "rotate-180" : ""}`}
                />
              </button>
              {expandedSection === key && (
                <div className="pb-3 pl-6">
                  {section.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block py-1 text-xs text-neutral-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="text-center mt-6 pt-4 border-t border-neutral-800">
            <div className="flex items-center justify-center gap-1 text-xs text-neutral-500 mb-2">
              <span>Made with</span>
              <Heart size={10} className="text-red-500 fill-red-500" />
              <span>for gamers</span>
            </div>
            <p className="text-xs text-neutral-600">© {currentYear} NWG. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Gamepad2 size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">NWG</h3>
              </div>
              <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                Discover amazing free-to-play games.
              </p>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span>Made with</span>
                <Heart size={12} className="text-red-500 fill-red-500" />
                <span>for all gamers :D</span>
              </div>
            </div>

            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <section.icon size={16} className="text-teal-400" />
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-neutral-400 hover:text-teal-400 text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-6">
            <div className="flex justify-between items-center">
              <div className="text-neutral-500 text-sm">
                <p>© {currentYear} NWG. All rights reserved.</p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a href="/privacy" className="text-neutral-500 hover:text-teal-400 transition-colors">
                  Privacy
                </a>
                <a href="/terms" className="text-neutral-500 hover:text-teal-400 transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
