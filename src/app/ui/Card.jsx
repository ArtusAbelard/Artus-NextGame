"use client"

import React from 'react'
import Btndetail from './Btndetail'
import { useSelector, useDispatch } from "react-redux"

export default function Card({products}) {
    const color = useSelector((state) => state.color)
    console.log(color.actual);
    
    return (
        <div className={`pt-16 flex bgnoborder bg-[#1e1e1e] justify-center items-center flex-wrap gap-10  ${color.actual==true?"invert":""}`}>
            {
                products.map((Element,id)=>{
                    return(
                        <div className="card card-compact w-96  bg-[#0E0E0E] shadow-xl">
                        <figure><img className={`h-[13.7rem] ${color.actual==true?"invert":""}`} src={Element.thumbnail} alt="Shoes" /></figure>
                        <div className="card-body h-[12rem] text-white">
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
    )
}
