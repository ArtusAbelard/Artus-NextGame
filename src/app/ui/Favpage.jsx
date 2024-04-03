"use client"

import React from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function Favpage(props) {
    const color = useSelector((state) => state.color)
    

    return (
        <div className={`w-full h-[51.6rem] bgnoborder flex justify-center items-center ${color.actual==true?"invert":""}`}>
            <div className='w-[70rem] h-[35rem] rounded-lg mt-[8rem] bg-black'>
                
            </div>
        </div>
    )
}
