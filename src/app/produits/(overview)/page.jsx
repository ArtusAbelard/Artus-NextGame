import Navbar from "../../ui/Navbar";
import Card from "../../ui/Card";
import Gameskeleton from "../../ui/skeleton/Gameskeleton";

async function getProduct(){
    const res = await fetch('https://www.freetogame.com/api/games')
    return res.json()
}

export default async function Page() {
    
    // const products = await new Promise((getProduct) => setTimeout(getProduct, 30000));
    const products = await getProduct()
    
    return(
    <div className="min-w-screen  min-h-screen flex  items-center flex-col">
        <Navbar></Navbar>
        
        <Card products={products}></Card>
        {/* <Gameskeleton></Gameskeleton> */}
    </div>
    )
}