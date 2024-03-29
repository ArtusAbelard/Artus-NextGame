import Navbar from "../../../ui/Navbar"
import Detailskeleton from "../../../ui/skeleton/Detailskeleton"

export default function Loading() {
    return (
        <div className="min-w-screen  min-h-screen flex  items-center flex-col">
            <Navbar></Navbar>
            <Detailskeleton></Detailskeleton>
            
        </div>
    )
}