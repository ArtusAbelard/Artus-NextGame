"use client"

import React from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function Sliderhome({products}) {

    const lib = useSelector(state => state.counter.lib)
    
    return (
        <div className='slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <img src={products[1].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[2].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[3].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[4].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[5].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[6].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[7].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[8].thumbnail} alt="" />
                    </div>

                    <div className='slide'>
                        <img src={products[1].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[2].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[3].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[4].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[5].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[6].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[7].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[8].thumbnail} alt="" />
                    </div>  
                </div>
            </div>
    )
}
