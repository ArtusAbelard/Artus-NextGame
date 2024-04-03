"use client"

import React from 'react'
import Btndetail from './Btndetail'
import { useSelector, useDispatch } from "react-redux"
import { addToLib } from '../../store/slice'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Card({products}) {
    const color = useSelector((state) => state.color)
    const dispatch = useDispatch();
    dispatch(addToLib(products));
    const lib = useSelector(state => state.counter.lib)
    const [data, setdata] = useState(lib)
    const [shear, setshear] = useState("")

    function sorteddata(element) {
        setdata([...data].sort((a, b) =>  b.title.slice(0,1) - a.title.slice(0,1)))
         
    }
    
    useEffect(() => {
        setdata(lib.filter(f => f.title.toLowerCase().includes(shear) ))
        
    }, [shear])
 
    return (
        <div className={`mt-[8rem] pt-[3rem] min-h-[53.9rem] w-full flex bgnoborder bg-[#1e1e1e] justify-center items-center flex-wrap gap-10  ${color.actual==true?"invert":""}`}>
            <div className="  h-[5rem]  text-white flex items-center w-[103.5rem] gap-[75rem]">
                <input onChange={(e)=>{setshear(e.target.value)}} type="text" placeholder="Shear" className="w-96 input input-bordered  bg-black" />
                <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className="btn m-1 bg-black text-white">Filters</div>
                <ul tabIndex={0} className="dropdown-content bg-black text-white z-[1] menu p-2 shadow rounded-box w-52">
                    <li onClick={()=>{sorteddata()}}><a>A to Z</a></li>
                    <li><a>Z to A</a></li>
                </ul>
                </div>
                </div>
            {
                data.map((Element,id)=>{
                    return(
                        <div className=" card card-compact w-96  bg-[#0E0E0E] shadow-xl">
                        <figure><img className={`h-[13.7rem] ${color.actual==true?"invert":""}`} src={Element.thumbnail} alt="Shoes" /></figure>
                        <div className="card-body h-[12rem] text-white">
                            <h2 className="card-title">{Element.title}</h2>
                            <p>{Element.short_description}</p>
                            <div className="card-actions justify-end">
                                <Btndetail id={id} bails={Element}></Btndetail>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
