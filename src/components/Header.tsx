import { Menu, Search } from "lucide-react";
import DropList from "../utils/DropList";
import { Link } from "react-router-dom";

export default function Header({
  setShowDropList,
  showDropList,
}: {
  setShowDropList: React.Dispatch<React.SetStateAction<boolean>>;
  showDropList: boolean;
}) {
  const rightSidedItems = [
    { name: "NWG.io", path: "/"  },
    { name: "All Games", path: "/" },
    { name: "Contributers", path: "/contributers" },
    { name: "NWG API", path: "/api-docs" },
  ];

  return (
    <div className="text-white/90 p-3.5 px-5 w-screen lg:w-full fixed top-0 z-50 bg-neutral-900">
      <div className="  z-50 w-1/1 flex flex-row justify-between items-center lg:justify-around ">
       <Link to="/"> <h1 className="font-extralight text-2xl  Slider">N W G</h1></Link>
        <div className="gradient-border-container mt-4 hidden lg:block lg:min-w-1/2 ">
          <div className=" mt-4 border-cycle flex flex-row justify-start items-center  gap-2 min-w-1/2 bg-neutral-700 p-1 rounded-xl mx-auto">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search 512 games"
              className="outline-0 bg-transparent"
            />
          </div>
        </div>
        {rightSidedItems.map((item, index) => (
          <Link to={item.path}>
            <div
              key={index}
              className="hidden lg:block hover:text-teal-600 hover:scale-105 transition-all cursor-pointer"
            >
              {item.name}
            </div>
          </Link>
        ))}

        {/*  for phones use this to nav later on -1*/}
        <div onClick={() => setShowDropList(!showDropList)}>
          <Menu size={29} className=" lg:hidden" />
        </div>
      </div>
      {showDropList && <DropList setShowDropList={setShowDropList} />}
    </div>
  );
}
