import ALiImg from "../assets/resized-image.jpeg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { contributersType, headerProps } from "../types/CardsTypes";
import ContributerCard from "../utils/ContributerCard";
export default function Contributer({
  showDropList,
  setShowDropList,
}: headerProps) {
  const contributers: contributersType[] = [
    {
      name: "Ali AL Najjar",
      github: "https://github.com/alialridaalnajjar",
      img: ALiImg,
      linkedin: "https://www.linkedin.com/in/ali-al-najjar-88a801324/",
      occupation: "2nd year CS student at USAL - Web  developer ",
      university: "USAL",
      age: "18",
    },
  ];

  return (
    <>
    <div className="bg-neutral-900 min-h-screen">
      <Header
        setShowDropList={setShowDropList}
        showDropList={showDropList}
        searchTerm={""}
        setSearchTerm={() => ""}
      />
      <div className="pt-13 lg:pt-30 flex flex-row justify-start items-center  flex-wrap">
        {contributers.map((contributer, index) => (
          <ContributerCard
            key={index}
            name={contributer.name}
            github={contributer.github}
            img={contributer.img}
            linkedin={contributer.linkedin}
            occupation={contributer.occupation}
            university={contributer.university}
            age={contributer?.age}
          />
        ))}
      </div>
    </div>
<Footer/></>
  );
}
