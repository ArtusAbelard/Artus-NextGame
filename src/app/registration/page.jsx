'use client';

import Navbar from "../ui/Navbar"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registername } from "../../store/connexion";
import { registermdp } from "../../store/connexion";
import check from "../../../public/img/check.png"
import Image from "next/image";

export default function Page() {
    const router = useRouter()
    const color = useSelector((state) => state.color)
    const connexion = useSelector((state) => state.connect)
    const dispatch = useDispatch();
    const [name, setname] = useState("") //usestate usinge name input value
    const [mdp, setmdp] = useState("") //usestate usinge password input value
    function register() {
      if (name.length>0&&mdp.length>0) { //register func tcheck if the input length is more than one charact 
        dispatch(registername(name)) //push name on connexion slice
        dispatch(registermdp(mdp)) //push password on connexion slice
        setTimeout(() => {
            router.push('/connexion')  // add set timeout to have delay for finaly push into log in page 
          }, 1);
      }
    }
    
    return(
        <div className="min-w-screen  min-h-screen flex items-center flex-col ">
            <Navbar></Navbar> 
            <div className={`w-screen min-h-[895px] mt-[6rem] flex items-center justify-center bg-[#1e1e1e] bglog max-[426px]:min-h-[750px] ${color.actual==true?"invert":""}`}> {/*dark mode*/}
            <div className={`w-[30rem]  h-[30rem] rounded-xl bg-[#0E0E0E] flex flex-col items-center justify-center gap-5 bglogin boxshadowlog max-[426px]:w-[22rem] max-[426px]:h-[30rem] ${connexion.status==true?"hidden":""}`}> {/* hide when login is true  */}
                <h1 className="text-white text-2xl font-bold">Registration :</h1>
                {/* <label className="input input-bordered bg-black border-[1px] border-white text-white flex items-center gap-2 w-[25rem] max-[426px]:w-[18rem]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input type="text" className="grow " placeholder="Email" />
                </label> */}
                <label className="input input-bordered bg-black border-[1px] border-white text-white flex items-center gap-2 w-[25rem] max-[426px]:w-[18rem]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input onChange={(e) => {setname(e.target.value)}} type="text" className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered bg-black border-[1px] border-white text-white flex items-center gap-2 w-[25rem] max-[426px]:w-[18rem]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input onChange={(e) => {setmdp(e.target.value)}} type="password" className="grow" />
                </label>
                <button onClick={()=>{register()}} className="btn text-xl bg-[#E08821] text-black hover:text-white">Register</button>
                </div>
            </div>
            <div className={`w-[30rem]  h-[30rem] rounded-xl bg-[#0E0E0E] flex flex-col items-center justify-center gap-5 bglogin boxshadow max-[426px]:w-[22rem] max-[426px]:h-[30rem] ${connexion.status==true?"":"hidden"}`}>  {/*checked img when login is true*/}
              <div className="w-[20rem] h-[20rem] rounded-full border-white border-[7px] flex items-center justify-center">
                <Image className="invert" src={check} height={200} width={200}alt="checked img"></Image>
              </div>
            </div>
        </div>
    )
}