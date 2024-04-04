"use client"

import { useRouter } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"
import { panierset } from '../../store/panier'

export default function Btndetail({id,bails}) {
    
    const router = useRouter()
    const chercherIndex = (bails) => {
        const i = lib.findIndex((x) => x.title === bails.title); // funct for finding good id for filter shear 
        return i;
    };
    function detailroot(bails){  // push to good id product with chercher index func
        router.push(`/produits/${chercherIndex(bails)}`) 
    }
    const lib = useSelector(state => state.counter.lib)
    return (
        <button onClick={()=>{detailroot(bails)}}  className="btn top-[22rem] border-0 text-black bg-[#E08821] absolute hover:text-white">
            Details
        </button>
    )
}
