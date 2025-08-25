import type { cardTypes } from "../types/CardsTypes";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa6";
import { Calendar, Tag, Play } from "lucide-react";
import type { JSX } from "react";

export default function GameCard({
  title,
  thumbnail,
  short_description,
  game_url,
  genre,
  platform,
  publisher,
  developer,
  release_date,
}: cardTypes) {
  const getPlatformIcon = (platform: string): JSX.Element => {
    if (platform?.toLowerCase().includes("windows"))
      return <FaWindows className="text-blue-400" size={14} />;
    if (platform?.toLowerCase().includes("mac"))
      return <FaApple className="text-gray-300" size={14} />;
    if (platform?.toLowerCase().includes("linux"))
      return <FaLinux className="text-yellow-400" size={14} />;
    return <FaWindows className="text-blue-400" size={14} />;
  };

  return (
      <div className=" lg:w-1/4 h-full flex flex-col justify-center items-center p-3 lg:pt-12 ">
        <div className="relative overflow-hidden w-full lg:w-full  ">
          <img
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            className="rounded-t-xl w-full transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
        </div>

        <div className="bg-neutral-800 flex flex-col justify-center items-start pl-4 pr-4 pb-4 rounded-b-xl w-full lg:w-full space-y-3">
          <div className="flex flex-row items-center justify-between w-full mt-3">
            <div className="flex items-center gap-2">
              {getPlatformIcon(platform)}
              <span className="text-xs text-neutral-400 font-medium">
                {platform}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Tag size={12} className="text-teal-400" />
              <h2 className="text-xs px-2 py-1 rounded-full bg-teal-500/20 text-teal-400 font-medium">
                {genre}
              </h2>
            </div>
          </div>

          <h1 className="font-bold text-xl text-white leading-tight line-clamp-2">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-neutral-400">
            <Calendar size={14} className="text-teal-400" />
            <h2 className="text-sm">{release_date}</h2>
          </div>

          <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
            {short_description}
          </p>

          <div className="pt-2 border-t border-neutral-700 w-full">
            <div className="text-xs text-neutral-400">
              <h1>
                <span className="text-neutral-500">studio</span>{" "}
                <span className="text-white font-medium">{developer}</span>
              </h1>
              <h1>
                <span className="text-neutral-500">publisher</span>{" "}
                <span className="text-white font-medium">{publisher}</span>
              </h1>
            </div>
          </div>

          <button
            onClick={() => window.open(game_url, "_blank")}
            className="w-full bg-neutral-700 hover:bg-teal-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 border border-neutral-600 hover:border-teal-500 flex items-center justify-center gap-2 group mt-3"
          >
            <Play
              size={16}
              className="group-hover:text-white transition-colors"
            />
            <span>Play Game</span>
          </button>
        </div>
      </div>
  );
}
