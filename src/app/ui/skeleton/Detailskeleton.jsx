"use client"

import { useSelector, useDispatch } from "react-redux"
import React from 'react'

export default function Detailskeleton(props) {
    const color = useSelector((state) => state.color)
    
    return (
       
          <div className={`pt-16 w-[100%] min-h-[895px] flex bg-[#1e1e1e] justify-center items-center flex-wrap gap-10 bgdetail max-[426px]:pt-0  ${color.actual==true?"invert":""}`}>
            <div className='w-[65rem] h-[40rem] rounded-3xl flex  items-center justify-center bg-[#0E0E0E] boxshadow max-[1024px]:w-[50rem] max-[769px]:w-[40rem] max-[426px]:h-[40rem] max-[426px]:w-[20rem]  '>
                <div className="w-1/2 h-full flex justify-center items-center invert">
                    <div className="flex flex-col gap-4 items-center ">
                        <div className="skeleton w-[18rem] h-[18rem] rounded-full shrink-0 mb-8"></div>
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <div className="skeleton h-[3rem] w-[17rem]"></div>
                            <div className="skeleton h-[3rem] w-[20rem]"></div>
                    </div>
                </div>

                </div>
                <div className="w-1/2 h-full flex justify-center items-center invert">
                    <div className="skeleton h-[30rem] w-[26rem]"></div>
                </div>
            </div>
          </div>     
    )
}
