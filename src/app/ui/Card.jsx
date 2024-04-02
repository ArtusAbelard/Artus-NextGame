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
            <div className="  h-[5rem]  text-white flex items-center w-[103.5rem] gap-[75rem]">
                <input type="text" placeholder="Shear" className="w-96 input input-bordered  bg-black" />
                <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className="btn m-1 bg-black text-white">Click</div>
                <ul tabIndex={0} className="dropdown-content bg-black text-white z-[1] menu p-2 shadow rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
                </div>
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
