"use client"

import React from 'react'
import Navbar from '../Navbar'
import { useSelector, useDispatch } from "react-redux"

//this page is skelleton for games section

export default function Gameskeleton(props) {
    const color = useSelector((state) => state.color)
    const skeleton = ["a","a","a","a","a","a","a","a"] // need to map 8 card so array of 8 ellement 

    return (
        <div className="min-w-screen  min-h-screen flex items-center flex-col">
        <Navbar></Navbar>
        <div className={` flex pt-[9rem] overflow-hidden justify-center items-center bg-[#1e1e1e] flex-wrap gap-10 min-h-[55.9rem] bgnoborder  ${color.actual==true?"invert":""}`}> {/* darkmode */}
            <div className='invert flex flex-wrap gap-10 min-h-[55.9rem] justify-center items-center'>
            <div className='w-[103.5rem] pt-5 flex'>
                <div className="skeleton h-[3rem] w-[25rem]  invert"></div>
                <div className='w-full flex justify-end'>
                    <div className="skeleton h-[3rem] w-28 ms-[17rem] invert"></div>
                </div>
            </div>
                {
                    skeleton.map((Element,id)=>{  {/* map of all skeleton cards  */}
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
