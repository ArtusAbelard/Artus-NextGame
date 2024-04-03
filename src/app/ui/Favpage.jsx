"use client"

import React from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function Favpage(props) {
    const color = useSelector((state) => state.color)
    

    return (
        <div className={`w-full h-[51.7rem] bgnoborder ${color.actual==true?"invert":""}`}>

        </div>
    )
}
