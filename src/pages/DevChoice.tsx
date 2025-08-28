import Footer from "../components/Footer";
import Header from "../components/Header";
import SiderBar from "../components/SiderBar";
import { devChoiceData } from "../data/DevChoice";
import type { headerProps } from "../types/CardsTypes";
import GameCard from "../utils/GameCard";
import ScrollUp from "../utils/ScrollUp";
export default function DevChoice({
  setShowDropList,
  showDropList,
}: headerProps) {
  return (
    <>
      <ScrollUp />
      <Header
        searchTerm=""
        setSearchTerm={() => ""}
        setShowDropList={setShowDropList}
        showDropList={showDropList}
      />

      <SiderBar />

      <div className="w-full bg-neutral-900 px-4 sm:px-6 lg:px-8 pt-25 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Dev Games
            </h1>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              Simply things I Recommend :D (My website my rules ahhh sentence)
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>
        </div>
      </div>

      <div className="w-full  h-auto bg-neutral-900 text-white flex flex-col lg:pr-6 items-end jusstify-around ">
        <div className="flex flex-row items-center justify-center flex-wrap lg:w-10/11 ">
          {devChoiceData.map((game) => (
            <GameCard
              key={game.id}
              id={`${game.id}`}
              title={game.title}
              thumbnail={game.thumbnail}
              short_description={game.short_description}
              game_url={game.game_url}
              genre={game.genre}
              platform={game.platform}
              publisher={game.publisher}
              developer={game.developer}
              release_date={game.release_date}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
