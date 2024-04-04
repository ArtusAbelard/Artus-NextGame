import Navbar from "../../../ui/Navbar";
import Details from "../../../ui/Details";
import Detailskeleton from "../../../ui/skeleton/Detailskeleton";

async function getProduct(){
    const res = await fetch('https://www.freetogame.com/api/games')
    return res.json()
}

export default async function Product({params}) {
    const products = await getProduct()
    
    return(
        <div className="min-w-screen  min-h-screen flex  items-center flex-col">
            <Navbar></Navbar>
            <Details id={params.id} products={products}></Details>  {/*give data in props also id*/}
            {/* <Detailskeleton></Detailskeleton> */}
        </div>
    )

}