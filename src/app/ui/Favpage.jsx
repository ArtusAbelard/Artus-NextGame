"use client"

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { panierremove } from '../../store/panier'
import { useState } from 'react'


export default function Favpage(props) {
    const color = useSelector((state) => state.color)
    const connexion = useSelector((state) => state.connect) 
    const panier = useSelector((state) => state.panier)
    const lib = useSelector(state => state.counter.lib)
    const dispatch = useDispatch();
    const [uniquearray, setuniquearray] = useState([...new Set(panier.panier)]) // remove same items in array
    const chercherIndex = (Element) => {
        const i = lib.findIndex((x) => x.title === Element);
        return i;
    };
    console.log(panier);
   
    return (
        <div className={`w-full h-[51.6rem] bgnoborder flex justify-center items-center ${color.actual==true?"invert":""}`}>
            <div className='w-[70rem] h-[40rem] rounded-xl mt-[8rem] bg-black flex justify-center relative items-center flex-wrap overflow-y-scroll enleverscroll '>
                {
                    panier.panier.map((Element,id)=>{
                        return(
                            <div className='w-[20rem] m-5 flex h-[10rem] rounded-lg border-[1px] '>
                                <img className={`w-[20rem] h-[10rem] rounded-lg absolute z-0 ${color.actual==true?"invert":""}`} src={panier.img[id]} alt="" />
                                <h1 className='text-white'>{Element}</h1>
                                <button onClick={()=>{dispatch(panierremove(Element))}} className="btn ms-[10%] mt-[9%] bg-[#FF9802] text-black hover:text-white z-40 absolute ">Remove</button>
                            </div>  
                        )
                    })
                }
            </div>
        </div>
    )
}
