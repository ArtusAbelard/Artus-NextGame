"use client"

import React from 'react'
import { panierset , imgset } from '../../store/panier'
import { useSelector, useDispatch } from "react-redux"
import star from '../../../public/img/favoris.png'
import Image from 'next/image'
import Btndetail from './Btndetail'
import { useState } from 'react'

export default function Carddaisy({Element,id}) {
    const dispatch = useDispatch();
    const color = useSelector((state) => state.color)
    const connexion = useSelector((state) => state.connect)
    const [hide, sethide] = useState("")
    

    return (
        <div className=" card card-compact w-96  bg-[#0E0E0E] shadow-xl mb-5">
                        <figure><img className={`h-[13.7rem] ${color.actual==true?"invert":""}`} src={Element.thumbnail} alt="Shoes" /></figure>
                        <div className="card-body h-[12rem] text-white">
                            <h2 className="card-title">{Element.title}</h2>
                            <p>{Element.short_description}</p>
                            {connexion.status==true? <Image onClick={()=>{dispatch(panierset(Element.title),dispatch(imgset(Element.thumbnail)),sethide("hidden"))}} className={`invert cursor-pointer ms-1 w-[20px] h-[20px] hover:w-[25px] hover:h-[25px] transition-[3s] ${hide}`}  alt="" src={star}></Image>:""}
                            {/* <Image onClick={()=>{dispatch(panierset(Element.title))}} className='invert cursor-pointer ms-1 w-[20px] h-[20px] hover:w-[25px] hover:h-[25px] transition-[3s]'  alt="" src={star}></Image> */}
                            <div className="card-actions justify-end">
                                <Btndetail id={id} bails={Element}></Btndetail>
                            </div>
                        </div>
        </div>
    )
}
