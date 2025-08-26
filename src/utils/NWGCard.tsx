export default function NWGCard({
  title,
  thumbnail,
  blur,
}: {
  title: string;
  thumbnail: string;
  blur:string
}) {
  return (
    <div className="text-white flex flex-col  items-center justify-center min-h-100vh h-auto">
      <img src={thumbnail} className={`${blur}`} />
      
      <h1 className="mt-10 lg:mt-15">{title}</h1>
    </div>
  );
}
