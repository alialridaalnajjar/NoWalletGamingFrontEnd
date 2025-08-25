import { Search } from "lucide-react";
import type { headerProps } from "../types/CardsTypes";
import Featured from "../utils/Featured";
import Header from "./Header";
export default function NavBar({
  showDropList,
  setShowDropList,
}: headerProps) {
  return (
    <div className="pt-15 w-full " >
      <Header showDropList={showDropList} setShowDropList={setShowDropList}/>

      <div
        className="gradient-border-container lg:hidden  mx-5  "
        id="search-bar-mobile"
      >
        <div className=" hover:bg-neutral-900/90 text-white/60 border-cycle flex flex-row justify-start items-center mt-4 gap-2 min-w-1/2 bg-neutral-700 p-1 rounded-xl mx-auto">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search 512 games"
            className="outline-0 placeholder:text-white/60 w-full focus:placeholder:text-neutral-700"
          />
        </div>
      </div>

      <Featured />
    </div>
  );
}
