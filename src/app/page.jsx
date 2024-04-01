

import Btndecrement from "./ui/Btndecrement";
import Navbar from "./ui/Navbar";
import { useSelector } from "react-redux";
import Homepage from './ui/Homepage'

async function getProduct(){
  const res = await fetch('https://www.freetogame.com/api/games')
  return res.json()
}

export default async function Home() {
  // const color = useSelector((state) => state.color)

  const products = await getProduct()
  return (
    // ${color.actual==true?"bg-[#E1E1E1]":"bg-[#1e1e1e]"}
    <div className={`min-w-screen bghome" min-h-screen   `}>
    <Navbar></Navbar>
      {/* <Btndecrement></Btndecrement> */}
      <div className={`w-sceen min-h-[55.91rem] bghome `}>
      {/* ${color.actual==true?"":"invert"} */}
       <Homepage products={products} ></Homepage> 
      </div>
    </div>
  );
}
