import React from "react";
import Games from "../components/Games";
import NavBar from "../components/NavBar";
import SiderBar from "../components/SiderBar";
import ScrollUp from "../utils/ScrollUp";
import Footer from "../components/Footer";
export default function Home({
  showDropList,
  setShowDropList,
}: {
  showDropList: boolean;
  setShowDropList: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <ScrollUp />
      <div className="bg-neutral-900 h-screen">
        <NavBar setShowDropList={setShowDropList} showDropList={showDropList} />

        <SiderBar />
        <Games />
      </div>
      <Footer/>
    </>
  );
}
