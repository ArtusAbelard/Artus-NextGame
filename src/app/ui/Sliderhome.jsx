"use client"

import React from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function Sliderhome({products}) {
    const color = useSelector((state) => state.color) 

    const lib = useSelector(state => state.counter.lib)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);// function to have random id on slider 
      }
    let imgrandom = []
    for (let i = 0; i < 8; i++) {
        imgrandom.push(getRandomInt(395))  // function to have random id on slider 
    }

    return (
        <div className='slider overflow-hidden z-0 '>
                <div className={`slide-track z-0 ${color.actual==true?"invert":""} `}>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[0]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[1]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[2]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[3]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[4]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[5]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[6]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[7]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[0]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[1]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[2]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[3]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[4]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[5]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[6]].thumbnail} alt="" />
                    </div>
                    <div className='slide z-0'>
                        <img className='z-0' src={products[imgrandom[7]].thumbnail} alt="" />
                    </div>  
                </div>
            </div>
    )
}
