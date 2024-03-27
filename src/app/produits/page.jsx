import Navbar from "../ui/Navbar";
import Btndetail from "../ui/Btndetail";

async function getProduct(){
    const res = await fetch('https://www.freetogame.com/api/games')
    return res.json()
}
  
export default async function Page() {
    const products = await getProduct()
    return(
    <div className="min-w-screen bg-[#3C5772] min-h-screen flex justify-center items-center flex-col">
        <Navbar></Navbar>
        <div className="  mt-16 flex justify-center items-center flex-wrap gap-10">
            {
                products.map((Element,id)=>{
                    return(
                        <div className="card card-compact w-96  bg-base-100 shadow-xl">
                        <figure><img className="h-[13.7rem]" src={Element.thumbnail} alt="Shoes" /></figure>
                        <div className="card-body h-[12rem]">
                            <h2 className="card-title">{Element.title}</h2>
                            <p>{Element.short_description}</p>
                            <div className="card-actions justify-end">
                                <Btndetail id={id}></Btndetail>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )

}