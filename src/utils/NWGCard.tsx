import { useState } from "react"

export default function NWGCard({
  title,
  thumbnail,
  blur,
  showGameName,
  studio,
}: {
  title: string
  thumbnail: string
  blur: string
  showGameName: boolean
  studio: string
}) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="text-white flex flex-col items-center justify-center min-h-100vh h-auto">
      <div className="relative">
     
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 rounded-lg lg:h-85 w-full min-h-[200px] lg:min-h-[340px]">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full mx-auto mb-3"></div>
              <p className="text-neutral-400 text-sm font-medium">LOADING IMAGE</p>
              <p className="text-neutral-500 text-xs">PLEASE WAIT</p>
            </div>
          </div>
        )}

      
        <img
          src={thumbnail || "/placeholder.svg"}
          className={`${showGameName ? "blur-none" : blur} lg:h-85 ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)} 
          alt={title}
        />
      </div>

      <h1 className={`mt-10 lg:mt-15 ${showGameName ? "hidden" : "block"}`}>by {studio}</h1>
      <h1 className={`mt-10 lg:mt-15 ${showGameName ? "block" : "hidden"}`}>{title}</h1>
    </div>
  )
}
