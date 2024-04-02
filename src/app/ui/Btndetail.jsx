"use client"

import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"

export default function Btndetail({id,bails}) {
    const router = useRouter()
    const chercherIndex = (element) => {
        const i = lib.findIndex((x) => x.title === element.title);
        return i;
    };
    function detailroot(bails){
        
        router.push(`/produits/${chercherIndex(bails)}`)
    }
     const lib = useSelector(state => state.counter.lib)
    
    return (
        <button onClick={()=>{detailroot(bails)}}  className="btn top-[22rem] border-0 text-black bg-[#E08821] absolute hover:text-white">
            Details
        </button>
    )
}
