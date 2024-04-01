"use client"

import Btndecrement from "./ui/Btndecrement";
import Navbar from "./ui/Navbar";
import { useSelector } from "react-redux";
import Homepage from './ui/Homepage'

export default function Home() {
  const color = useSelector((state) => state.color)

  return (
    <div className={`min-w-screen bghome" min-h-screen  ${color.actual==true?"bg-[#E1E1E1]":"bg-[#1e1e1e]"} `}>
    <Navbar></Navbar>
      {/* <Btndecrement></Btndecrement> */}
      <div className={`w-sceen min-h-[55.91rem] bghome ${color.actual==true?"":"invert"}`}>
       <Homepage></Homepage> 
      </div>
    </div>
  );
}
