"use client"

import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage'
import Sliderhome from './Sliderhome'
import { useSelector, useDispatch } from "react-redux"
import Footer from './Footer'

export default function HomeBody({products}) {
    const color = useSelector((state) => state.color) 
    
    return (
    <div>
        <Navbar></Navbar>
        <div className={`min-w-screen pt-[7rem] z-0 bgnoborder bg-[#1e1e1e]  ${color.actual==true?"invert ":""} `}> {/* function for darkmode*/}
        <Sliderhome products={products} ></Sliderhome>
        <Homepage products={products} ></Homepage> 
        </div>
        <Footer></Footer>
    </div>
    )
}
