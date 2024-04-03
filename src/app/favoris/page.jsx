import Navbar from "../ui/Navbar"
import Favpage from '../ui/Favpage'
import Footer from '../ui/Footer'

export default async function Page() {

    return(
       <div>
         <Navbar></Navbar>
          <Favpage></Favpage>
         <Footer></Footer> 
       </div>
    )
}