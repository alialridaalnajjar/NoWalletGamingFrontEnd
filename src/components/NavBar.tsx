import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import Featured from "../utils/Featured";
import DropList from "../utils/DropList";
import React from "react";
export default function NavBar() {
  const [showDropList, setShowDropList] = React.useState(false);

  return (
    <div className="pt-15 w-full">
      <div className="text-white/90 p-3.5 px-5 w-screen lg:w-full fixed top-0 z-50 bg-neutral-900">
        <div className="  z-50 w-1/1 flex flex-row justify-between items-center lg:justify-around ">
          <h1 className="font-extralight text-2xl  Slider">N W G</h1>
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
          <div className="hidden lg:block">TST</div>
          {/*  for phones use this to nav later on -1*/}
          <div onClick={() => setShowDropList(!showDropList)}>
            <Menu size={29} className=" lg:hidden" />
          </div>
        </div>
        {showDropList && <DropList />}
      </div>

      <div
        className="gradient-border-container lg:hidden  mx-5 "
        id="search-bar-mobile"
      >
        <div className=" border-cycle flex flex-row justify-start items-center mt-4 gap-2 min-w-1/2 bg-neutral-700 p-1 rounded-xl mx-auto">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search 512 games"
            className="outline-0 bg-neutral-700   w-full"
          />
        </div>
      </div>

      <Featured />
    </div>
  );
}
