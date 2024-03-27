import Btndecrement from "./ui/Btndecrement";
import Navbar from "./ui/Navbar";

async function getProduct(){
  const res = await fetch('https://www.freetogame.com/api/games')
  return res.json()
}

export default async function Home() {
  const products = await getProduct()
  console.log(products);
  return (
    <div className="min-w-screen bg-slate-600 min-h-screen">
    <Navbar></Navbar>
      <Btndecrement></Btndecrement>
      {/* {
        products.map((Element,id)=>{
          return(
            <h1>{Element.title}</h1>
          )
        })
      } */}
    </div>
  );
}
