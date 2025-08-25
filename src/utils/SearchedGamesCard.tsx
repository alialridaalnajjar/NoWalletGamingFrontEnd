import { Calendar, ExternalLink, Gamepad2 } from "lucide-react";
import type { cardTypes } from "../types/CardsTypes";

export default function SearchedGamesCard({
  title,
  thumbnail,
  game_url,
  genre,
  platform,
  developer,
  release_date,
}: cardTypes) {
  return (
    <div className=" relative bg-gradient-to-r from-neutral-800/95 to-neutral-750/95 hover:from-neutral-700/95 hover:to-neutral-650/95 border border-neutral-700/60 hover:border-teal-500/80 rounded-xl p-4 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl hover:shadow-teal-500/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/3 via-transparent to-cyan-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-700"></div>

      <div className="relative flex items-center gap-4">
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>

          <div className="relative overflow-hidden rounded-lg border border-neutral-600/70 group-hover:border-teal-400/60 transition-all duration-300">
            <img
              src={
                thumbnail || "/placeholder.svg?height=80&width=120&text=Game"
              }
              alt={title}
              className="w-20 h-14 lg:w-24 lg:h-16 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-teal-500/90 backdrop-blur-sm rounded-full p-2 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                <ExternalLink size={14} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-2">
          <h3 className="font-bold text-base lg:text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300 truncate">
            {title}
          </h3>

          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative flex items-center gap-1.5 px-3 py-1 bg-teal-500/15 group-hover:bg-teal-500/25 border border-teal-500/30 group-hover:border-teal-400/50 rounded-full transition-all duration-300">
                <Gamepad2
                  size={10}
                  className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300"
                />
                <span className="text-teal-300 group-hover:text-teal-200 text-xs font-medium transition-colors duration-300">
                  {genre}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
              <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
              <span className="text-xs font-medium">{platform}</span>
            </div>
          </div>

          {/* Developer &&^&&^ Release Date */}
          <div className="flex items-center gap-4 text-xs">
            <span className="text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
              by{" "}
              <span className="text-neutral-300 group-hover:text-white font-medium transition-colors duration-300">
                {developer}
              </span>
            </span>
            <div className="flex items-center gap-1 text-neutral-500 group-hover:text-teal-400 transition-colors duration-300">
              <Calendar size={10} />
              <span>{release_date}</span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md animate-pulse"></div>

            <div className="relative w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-neutral-700/80 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-cyan-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 border border-neutral-600/50 group-hover:border-teal-400/50 shadow-lg">
              <a href={game_url}>
                {" "}
                <ExternalLink
                  size={16}
                  className="text-neutral-400 group-hover:text-white transition-all duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 group-hover:w-full transition-all duration-700 delay-100"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent  translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
    </div>
  );
}
