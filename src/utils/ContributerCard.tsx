import { Calendar } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuUniversity } from "react-icons/lu";
import type { contributersType } from "../types/CardsTypes";
export default function ContributerCard({
  name,
  github,
  img,
  linkedin,
  occupation,
  university,
  age,
}: contributersType) {
  return (
    <div className="lg:w-1/4 h-1/4 flex flex-col justify-center items-center p-3 lg:pt-12 ">
      <div className="relative overflow-hidden w-full lg:w-full lg:h-100 ">
        <img
          src={img || "/placeholder.svg"}
          alt={name}
          className="rounded-t-xl w-fit h-100 transition-transform duration-500 hover:scale-110 object-cover lg:w-full w-full lg:object-cover lg:h-full "
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
      </div>

      <div className="bg-neutral-800 flex flex-col justify-center items-start pl-4 pr-4 pb-4 rounded-b-xl w-full  space-y-3 lg:w-full">
        <div className="flex flex-row items-center justify-between w-full mt-3">
          <div className="flex items-center gap-2 text-2xl text-teal-500">
            {name}
          </div>
          <div className="flex items-center gap-1">
            <LuUniversity size={18} className="text-teal-400" />
            <h2 className="text-xs px-2 py-1 rounded-full bg-teal-500/20 text-teal-400 font-medium">
              {university}
            </h2>
          </div>
        </div>

        <h1 className="font-bold text-xl text-white leading-tight line-clamp-2">
          {occupation}
        </h1>

        <div className="flex items-center gap-2 text-neutral-400">
          <Calendar size={14} className="text-teal-400" />
          <h2 className="text-sm font-semibold">{age}18</h2>
        </div>

        <div className="pt-2 border-t border-neutral-700 w-full">
          <div className="text-xs text-neutral-400  flex flex-row items-center justify-center gap-6 ">
            <a href={github}>
              <FaGithub size={24} className="text-teal-400" />
            </a>
            <a href={linkedin}>
              <FaLinkedin size={24} className="text-teal-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}   
