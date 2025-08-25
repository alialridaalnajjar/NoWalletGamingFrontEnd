import { Search } from "lucide-react";
import React from "react";
import type { cardTypes, headerProps } from "../types/CardsTypes";
import SearchedGamesCard from "../utils/SearchedGamesCard";
import Header from "./Header";
export default function NavBar({ showDropList, setShowDropList }: headerProps) {
  const [data, setData] = React.useState<cardTypes[]>([]);

  React.useEffect(() => {
    fetch("https://no-wallet-gaming-back-end.vercel.app/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredGames = data
    .filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 3);

  return (
    <div className="pt-15 w-full ">
      <Header
        showDropList={showDropList}
        setShowDropList={setShowDropList}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div
        className={`gradient-border-container lg:hidden  mx-5 z-70  ${showDropList ? "hidden" : "block"}`}
        id="search-bar-mobile"
      >
        <div className="  hover:bg-neutral-900/90 text-white/60 border-cycle flex flex-row justify-start items-center mt-4 gap-2 min-w-1/2 bg-neutral-700 p-1 rounded-xl mx-auto">
          <Search size={20} />
          <input
            maxLength={60}
            type="text"
            placeholder="Search 613 games"
            className="outline-0 placeholder:text-white/60 w-full focus:placeholder:text-neutral-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div>
        {filteredGames.length > 0 && searchTerm.length > 2 ? (
          filteredGames.map((game) => (
            <div className="z-60 inset-0 backdrop-blur-xs fixed  pt-25  h-100vh lg:pt-20">
              <SearchedGamesCard key={game.id} {...game} />
            </div>
          ))
        ) : filteredGames.length === 0 && searchTerm.length > 2 ? (
          <div className="text-white/60 text-center mt-4">
            No games found matching "{searchTerm}"
          </div>
        ) : null}
      </div>
    </div>
  );
}
