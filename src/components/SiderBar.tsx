import {
    BarChart3,
    ChevronDown,
    ChevronRight,
    ChevronUp,
    Crown,
    Download,
    Flame,
    Folder,
    Gamepad2,
    Home,
    Star,
    Trophy,
} from "lucide-react";
import { useState, type JSX } from "react";

export default function SiderBar() {
  const [showNewReleases, setShowNewReleases] = useState(true);
  const [showBrowse, setShowBrowse] = useState(true);

  const navigationItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Star, label: "NWG", href: "/reviews" },
  ];

  const newReleasesItems = [
    { icon: Star, label: "Last 30 days", href: "/new/last-30-days" },
    { icon: Flame, label: "This week", href: "/new/this-week" },
    { icon: ChevronRight, label: "Next week", href: "/new/next-week" },
  ];

  const topItems = [
    { icon: Trophy, label: "Best of the year", href: "/top/best-year" },
    { icon: BarChart3, label: "Popular in 2024", href: "/top/popular-2024" },
    { icon: Crown, label: "All time top 250", href: "/top/all-time" },
  ];

  const browseItems = [
    { icon: Gamepad2, label: "Platforms", href: "/browse/platforms" },
    { icon: Download, label: "Stores", href: "/browse/stores" },
    { icon: Folder, label: "Collections", href: "/browse/collections" },
  ];

  const NavItem = ({
    icon: Icon,
    label,
    href,
    badge,
    isSubItem = false,
  }: {
    icon: React.ElementType;
    label: string;
    href: string;
    badge?: string;
    isSubItem?: boolean;
  }): JSX.Element => (
    <a
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors group ${
        isSubItem ? "ml-4 text-sm" : "text-base font-medium"
      }`}
    >
      <div className="flex items-center justify-center w-5 h-5">
        {badge ? (
          <span className="text-xs font-bold text-neutral-400 group-hover:text-teal-400">
            {badge}
          </span>
        ) : (
          <Icon
            size={16}
            className="text-neutral-400 group-hover:text-teal-400"
          />
        )}
      </div>
      <span className="flex-1">{label}</span>
    </a>
  );
{/* Comeee Back Later to this.. */}
  const SectionHeader = ({
    title,
    isOpen,
    onToggle,
    showToggle = true,
  }: {
    title: string;
    isOpen?: boolean;
    onToggle?: () => void;
    showToggle?: boolean;
  }) => (
    <div className="flex items-center justify-between px-3 py-2 mb-2">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      {showToggle && onToggle && (
        <button
          onClick={onToggle}
          className="text-neutral-400 hover:text-white transition-colors"
        >
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      )}
    </div>
  );

  return (
    <div className="h-full w-1/11 fixed left-0 top-16 bg-neutral-900 border-r border-neutral-800 hidden lg:block overflow-hidden z-50">
      <div className="p-4 space-y-6">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>

        <div>
          <SectionHeader
            title="New Releases"
            isOpen={showNewReleases}
            onToggle={() => setShowNewReleases(!showNewReleases)}
          />
          {showNewReleases && (
            <div className="space-y-1">
              {newReleasesItems.map((item) => (
                <NavItem key={item.label} {...item} isSubItem />
              ))}
            </div>
          )}
        </div>

        <div>
          <SectionHeader title="Top" showToggle={false} />
          <div className="space-y-1">
            {topItems.map((item) => (
              <NavItem key={item.label} {...item} isSubItem />
            ))}
          </div>
        </div>

        <div>
          <NavItem icon={Gamepad2} label="All Games" href="/games" />
        </div>

        <div>
          <SectionHeader
            title="Browse"
            isOpen={showBrowse}
            onToggle={() => setShowBrowse(!showBrowse)}
          />
          {showBrowse && (
            <div className="space-y-1">
              {browseItems.map((item) => (
                <NavItem key={item.label} {...item} isSubItem />
              ))}
              <button className="flex items-center gap-3 px-3 py-2 ml-4 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors w-full text-left">
                <ChevronDown size={16} />
                <span>Show all</span>
              </button>
            </div>
          )}
        </div>

        <div className="h-20"></div>
      </div>
    </div>
  );
}
