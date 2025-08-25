import React from "react";
import type { cardTypes } from "../types/CardsTypes";
import GameCard from "../utils/GameCard";
import Featured from "../utils/Featured";

export default function Games() {
  const [data, setData] = React.useState<cardTypes[]>([]);

  React.useEffect(() => {
    fetch("https://no-wallet-gaming-back-end.vercel.app/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full  h-auto bg-neutral-900 text-white pt-5 flex flex-col lg:pr-6 items-end jusstify-around ">
      <Featured />
      <div className="flex flex-row items-center justify-center flex-wrap lg:w-10/11 ">
        {data.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
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
  );
}
