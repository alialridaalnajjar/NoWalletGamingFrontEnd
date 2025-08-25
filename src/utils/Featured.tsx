import React from "react";
import { X, Star, Gamepad2 } from "lucide-react";

export default function Featured() {
  const [featured, setFeatured] = React.useState(true);

  return (
    <>
      {featured && (
        <div className="lg:w-10/11 w-10/11 lg:mt-5 relative bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700 rounded-lg p-3 mx-5 lg:mx-0 my-2 shadow-lg">
          <button
            onClick={() => setFeatured(false)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-white transition-colors duration-200 p-1 hover:bg-neutral-700 rounded-full"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>

          <div className="flex items-center gap-2 pr-7">
            <div className="flex-shrink-0 bg-teal-500/20 p-1.5 rounded-md">
              <Gamepad2 className="text-teal-400" size={18} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-0.5">
                <Star className="text-teal-400 fill-teal-400" size={12} />
                <h3 className="text-white font-semibold text-xs">
                  Dev Choice Games
                </h3>
              </div>
              <p className="text-neutral-300 text-xs leading-tight truncate">
                Check out our new{" "}
                <span className="text-teal-400 font-medium">
                  Dev Choice Games
                </span>{" "}
                - handpicked by developers!
              </p>
            </div>

            <div className="flex-shrink-0">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 shadow-md">
                Explore
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50"></div>
        </div>
      )}
    </>
  );
}
