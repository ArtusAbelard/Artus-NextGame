
import Btndecrement from "./ui/Btndecrement";

async function getProduct(){
  const res = await fetch('https://dummyjson.com/products?limit=12&select=title,price,images')
  const data = await res.json()
  return data.products
}

export default async function Home() {
  const products = await getProduct()

  return (
    <div className="min-w-screen min-h-screen">
      <Btndecrement></Btndecrement>
    </div>
  );
}
