export default function NWGCard({
  title,
  thumbnail,
  blur,
  showGameName,
  studio,
}: {
  title: string;
  thumbnail: string;
  blur: string;
  showGameName: boolean;
  studio: string;
}) {
  return (
    <div className="text-white flex flex-col  items-center justify-center min-h-100vh h-auto">
      <img
        src={thumbnail}
        className={`${showGameName ? "blur-none" : blur} lg:h-85`}
      />
      <h1 className={`mt-10 lg:mt-15   ${showGameName ? "hidden" : "block"}  `}>
        by {studio}
      </h1>
      <h1 className={`mt-10 lg:mt-15   ${showGameName ? "block" : "hidden"}  `}>
        {title}
      </h1>
    </div>
  );
}
