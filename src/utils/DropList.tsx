import { ChevronRight, Gamepad2, Globe, Home, MoreHorizontal, Users } from 'lucide-react';

export default function DropList() {
  const menuItems = [
    { label: "Home", icon: Home },
    { label: "NWG.io", icon: Globe },
    { label: "All Games", icon: Gamepad2 },
    { label: "Contributors", icon: Users },
    { label: "More Of NWG", icon: MoreHorizontal },
  ];

  return (
    <div className="dropdown-menu fixed inset-0 backdrop-blur-sm mt-16 z-50">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative bg-neutral-900/95 border-b border-neutral-700 shadow-xl">
        <div className="px-4 py-2">
          {menuItems.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-4 text-white font-medium hover:bg-neutral-800/50 transition-colors duration-200 cursor-pointer group border-b border-neutral-800/50 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <item.icon 
                    size={20} 
                    className="text-teal-400 group-hover:text-teal-300 transition-colors" 
                  />
                  <span className="text-base group-hover:text-teal-100 transition-colors">
                    {item.label}
                  </span>
                </div>
                <ChevronRight 
                  size={16} 
                  className="text-neutral-500 group-hover:text-teal-400 transition-colors" 
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}