"use client"

import React from 'react'
import Btndetail from './Btndetail'
import { useSelector, useDispatch } from "react-redux"
import { addToLib } from '../../store/slice'
import { useState } from 'react'
import { useEffect } from 'react'
import star from '../../../public/img/favoris.png'
import Image from 'next/image'
import { panierset , imgset } from '../../store/panier'
import Carddaisy from '../ui/Carddaisy'

export default function Card({products}) {
    const color = useSelector((state) => state.color)
    const dispatch = useDispatch();
    dispatch(addToLib(products)); // ading api in redux
    const connexion = useSelector((state) => state.connect)
    const lib = useSelector(state => state.counter.lib)
    const [data, setdata] = useState(lib) // cloning api 
    const [shear, setshear] = useState("") //input of shear input 
    const [filterbtn, setfilterbtn] = useState("") // cattegory fitered
    const panier = useSelector((state) => state.panier)
    
    // function sorteddata(element) {
    //     setdata([...data].sort((a, b) =>  b.title.slice(0,1) - a.title.slice(0,1)))   // 
    // }
    useEffect(() => {
        setdata(lib.filter(f => f.title.toLowerCase().includes(shear))) // function to filter api withj shear input 
    }, [shear])

    useEffect(() => {
        if (filterbtn.length>0) { 
            setdata(lib.filter((d) => d.genre.toLowerCase()===filterbtn)) // function to filter api with btn cattegory 
        }
    }, [filterbtn])

    // function panierpush(Element){
    //     dispatch(panierset(Element.title))
    //     console.log(panier);
    // }
 
    return (
        <div className={`mt-[8rem] pt-[3rem] min-h-[43.3rem] w-full flex bgnoborder bg-[#1e1e1e] justify-center items-center flex-wrap gap-10  ${color.actual==true?"invert":""}`}>
            <div className="  h-[5rem]  text-white flex  items-center w-[103.5rem] max-[1445px]:w-[75rem] max-[1025px]:w-[49rem] max-[769px]:w-[38rem] max-[500px]:w-[22rem]">
                <input onChange={(e)=>{setshear(e.target.value)}} type="text" placeholder="Shear" className="w-96 input input-bordered  bg-black" />
                <div className=' w-full flex items-center justify-end'>
                    <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn m-1 bg-black text-white ">Filters</div>
                    <ul tabIndex={0} className="dropdown-content bg-black  text-white z-[1] flex flex-wrap menu p-2 shadow rounded-box  w-[10rem]"> {/* change state ok filterbtn by category  */}
                        <li onClick={()=>{setfilterbtn("shooter")}}><a>Shooter</a></li>
                        <li onClick={()=>{setfilterbtn("action")}}><a>Action</a></li>
                        <li onClick={()=>{setfilterbtn("strategy")}}><a>Strategy</a></li>
                        <li onClick={()=>{setfilterbtn("battle royale")}}><a>Battle Royale</a></li>
                        <li onClick={()=>{setfilterbtn("fighting")}}><a>Fighting</a></li>
                        <li onClick={()=>{setfilterbtn("sports")}}><a>Sport</a></li>
                        <li onClick={()=>{setfilterbtn("racing")}}><a>Racing</a></li>
                        <li onClick={()=>{setfilterbtn("fantasy")}}><a>Fantasy</a></li>
                        <li onClick={()=>{setfilterbtn("moba")}}><a>Moba</a></li>
                        <li onClick={()=>{setfilterbtn("mmorpg")}}><a>Mmorpg</a></li>
                        <li onClick={()=>{setfilterbtn("mmoarpg")}}><a>Mmoarpg</a></li>
                        <li onClick={()=>{setfilterbtn("arpg")}}><a>Arpg</a></li>
                        <li onClick={()=>{setfilterbtn("social")}}><a>Social</a></li>
                        <li onClick={()=>{setfilterbtn("card")}}><a>Card</a></li>
                        {/* <li onClick={()=>{sorteddata()}}><a>A to Z</a></li> */}
                        {/* <li><a>Z to A</a></li> */}
                    </ul>
                    </div>
                </div>
            </div>    {/* maping of card game */}
            {
                data.map((Element,id)=>{
                    return(
                        <Carddaisy Element={Element}  id={id}></Carddaisy>  
                    )
                })
            }
        </div>
    )
}
