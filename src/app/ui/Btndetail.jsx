"use client"
import { useRouter } from "next/navigation"

export default function Btndetail({id}) {
    const router = useRouter()
    function detailroot(){
        router.push(`/produits/${id}`)
    }
    
    return (
        <button onClick={detailroot}  className="btn top-[22rem] btn-primary absolute">
        Details
        </button>
    )
}
