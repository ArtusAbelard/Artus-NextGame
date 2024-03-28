"use client"

import Btndecrement from "./ui/Btndecrement";
import Navbar from "./ui/Navbar";
import { useSelector } from "react-redux";

export default function Home() {
  const color = useSelector((state) => state.color)

  return (
    <div className={`min-w-screen  min-h-screen ${color.actual==true?"bg-[#E1E1E1]":"bg-[#1e1e1e]"}`}>
    <Navbar></Navbar>
      <Btndecrement></Btndecrement>
    </div>
  );
}
