


import Navbar from "./ui/Navbar";
import { useSelector } from "react-redux";
import Homepage from './ui/Homepage'
import Sliderhome from "./ui/Sliderhome";
import HomeBody from './ui/HomeBody'

async function getProduct(){
  const res = await fetch('https://www.freetogame.com/api/games')
  return res.json()
}

export default async function Home() {
  // const color = useSelector((state) => state.color)

  const products = await getProduct()
  return (
    <div>
      <HomeBody products={products}></HomeBody>
    </div>

  );
}
