import Navbar from "../../ui/Navbar";
import Card from "../../ui/Card";
import Gameskeleton from "../../ui/skeleton/Gameskeleton";
import Footer from "../../ui/Footer";

async function getProduct(){
    const res = await fetch('https://www.freetogame.com/api/games')  // fetch api 
    return res.json()
}

export default async function Page() {
    
    const products = await getProduct()
    return(
    <div className="min-w-screen  min-h-screen flex  items-center flex-col">
        <Navbar></Navbar>
            <Card products={products}></Card>
            {/* <Gameskeleton></Gameskeleton> */}
        <Footer></Footer>
    </div>
    )
}