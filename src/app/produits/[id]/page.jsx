import Navbar from "@/app/ui/Navbar";
import Details from "@/app/ui/Details";

async function getProduct(){
    const res = await fetch('https://www.freetogame.com/api/games')
    return res.json()
}

export default async function Product({params}) {
    const products = await getProduct()

    // console.log(params.id);
    return(
        <div className="min-w-screen  min-h-screen flex  items-center flex-col">
            <Navbar></Navbar>
            <Details id={params.id}></Details>
            
        </div>
    )

}