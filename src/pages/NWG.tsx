import React from "react";
import Header from "../components/Header";
import type { headerProps } from "../types/CardsTypes";
import NWGCard from "../utils/NWGCard";

export default function NWG({ setShowDropList, showDropList }: headerProps) {
  const [guess, setGuess] = React.useState<
    { title: string; thumbnail: string,  developer: string; }[]
  >([]);
  const [currentGame, setCurrentGame] = React.useState<{
    title: string;
    thumbnail: string;
      developer: string;
  }>({ title: "", thumbnail: "",developer:"" });
  const [wonStatus, setWonStatus] = React.useState<boolean>(false);
  const [roundEnd, setRoundEnd] = React.useState<boolean>(false);
  const [userGuess, setUserGuess] = React.useState<string>("");
  const [attempts, setAttempts] = React.useState(5);

  const blurrLevels = [
    { level: 5, blurr: `blur-xl` },
    { level: 4, blurr: `blur-lg` },
    { level: 3, blurr: `blur-md` },
    { level: 2, blurr: `blur-sm` },
    { level: 1, blurr: `blur-xs` },
    { level: 0, blurr: `blur-none` },
  ];

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://no-wallet-gaming-back-end.vercel.app/"
        );
        const data = await response.json();
        setGuess(data);
        const randomIndex = Math.floor(Math.random() * data.length);
        setCurrentGame(data[randomIndex]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleWinCheck = (comparatorOne: string, comparatorTwo: string) => {
    if (attempts <= 0) return; // Early return if no attempts leftt

    if (
      comparatorOne.toLowerCase().trim() === comparatorTwo.toLowerCase().trim()
    ) {
      setRoundEnd(true);
      setWonStatus(true);
      
    } else {
      if (attempts <= 1) {
        setRoundEnd(true);
      }
      setAttempts((p) => p - 1);
    }
    setUserGuess("");
  };

  const startRound = () => {
    setRoundEnd(false);
    setWonStatus(false);
    setAttempts(5);
    setUserGuess("");
    const randomIndex = Math.floor(Math.random() * guess.length);
    setCurrentGame(guess[randomIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && roundEnd && attempts > 0) {
      handleWinCheck(userGuess, currentGame.title);
    }
  };

  return (
    <>
      <Header
        searchTerm=""
        setSearchTerm={() => {}}
        setShowDropList={setShowDropList}
        showDropList={showDropList}
      />
      <div className=" min-h-screen bg-neutral-900 pt-40">
        {currentGame && currentGame.title && (
          <div className="container mx-auto px-4">
            <NWGCard
              showGameName={roundEnd}
              title={currentGame.title}
              thumbnail={currentGame.thumbnail}
              studio={currentGame.developer}
              blur={blurrLevels[5 - attempts].blurr}
            />

            <div className="text-white flex flex-col items-center justify-center gap-3 mt-4">
              <h1>Guess you have {attempts} attempts left!</h1>
              <input
                type="text"
                value={userGuess}
                placeholder="Game"
                className="border-teal-300 border-2 rounded-2xl p-2 text-white"
                onChange={(e) => setUserGuess(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={roundEnd || attempts <= 0}
              />
              <button
                onClick={() => handleWinCheck(userGuess, currentGame.title)}
                disabled={attempts <= 0 || roundEnd}
                className={`px-4 py-2 rounded-xl transition-colors ${
                  attempts <= 0 || roundEnd
                    ? "bg-neutral-600 cursor-not-allowed"
                    : "bg-teal-600 hover:bg-teal-700"
                }`}
              >
                Give It a check
              </button>

              {roundEnd && (
                <button
                  onClick={startRound}
                  className="bg-teal-600 px-4 py-2 rounded-xl hover:bg-teal-700 transition-colors"
                >
                  Start New Round
                </button>
              )}

              {wonStatus && (
                <div className="text-teal-400 text-xl">You Won! 🎉</div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
