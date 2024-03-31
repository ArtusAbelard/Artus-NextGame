"use client"

import React from 'react'
import Navbar from '../Navbar'
import { useSelector, useDispatch } from "react-redux"

export default function Gameskeleton(props) {
    const color = useSelector((state) => state.color)
    const skeleton = ["a","a","a","a","a","a","a","a"]

    return (
        <div className="min-w-screen  min-h-screen flex items-center flex-col">
        <Navbar></Navbar>
        <div className={`pt-16 flex  justify-center items-center bg-[#1e1e1e] flex-wrap gap-10 min-h-[55.9rem] bgnoborder  ${color.actual==true?"invert":""}`}>
            <div className='invert flex flex-wrap gap-10 min-h-[55.9rem] justify-center items-center'>
                {
                    skeleton.map((Element,id)=>{
                        return(
                            <div className="flex flex-col gap-4 w-96 h-[20rem] invert">
                                <div className="skeleton h-[12rem] w-full"></div>
                                <div className="skeleton h-[2rem] w-full"></div>
                                <div className="skeleton h-[2rem] w-full"></div>
                                <div className="skeleton h-[3rem] w-28 ms-[17rem]"></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
    )
}
