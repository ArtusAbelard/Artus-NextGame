"use client"

import React from 'react'
import Btndetail from './Btndetail'
import { useSelector, useDispatch } from "react-redux"
import { addToLib } from '../../store/slice'

export default function Card({products}) {
    const color = useSelector((state) => state.color)
    
    const dispatch = useDispatch();
    dispatch(addToLib(products));
    const lib = useSelector(state => state.counter.lib)
   
    
    return (
        <div className={`mt-[8rem] pt-[3rem]  flex bgnoborder bg-[#1e1e1e] justify-center items-center flex-wrap gap-10  ${color.actual==true?"invert":""}`}>
            <div className="  h-[5rem] flex items-center w-[103rem]">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            {
                products.map((Element,id)=>{
                    return(
                        <div className=" card card-compact w-96  bg-[#0E0E0E] shadow-xl">
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
