"use client"

import React from 'react'
import { useSelector} from "react-redux"

export default function Details(id) {
    const color = useSelector((state) => state.color)
    console.log(color.actual);
    console.log(id.id);
    return (
        // ${color.actual==true?"invert":""}
        <div className={`pt-16 w-[100%] min-h-[895px] flex bg-[#1e1e1e] justify-center items-center flex-wrap gap-10 ${color.actual==true?"invert":""}`}>
            <div className='w-[70rem] h-[40rem] rounded-3xl bg-[#0E0E0E] boxshadow '>
                

            </div>  
        </div>
    )
}
