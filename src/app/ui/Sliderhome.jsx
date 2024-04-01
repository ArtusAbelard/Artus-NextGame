"use client"

import React from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function Sliderhome({products}) {

    const lib = useSelector(state => state.counter.lib)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    let imgrandom = []
    for (let i = 0; i < 8; i++) {
        imgrandom.push(getRandomInt(395))
    }
    
    return (
        <div className='slider z-0'>
                <div className='slide-track'>
                    <div className='slide '>
                        <img src={products[imgrandom[0]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[1]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[2]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[3]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[4]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[5]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[6]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[7]].thumbnail} alt="" />
                    </div>

                    <div className='slide'>
                        <img src={products[imgrandom[0]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[1]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[2]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[3]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[4]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[5]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[6]].thumbnail} alt="" />
                    </div>
                    <div className='slide'>
                        <img src={products[imgrandom[7]].thumbnail} alt="" />
                    </div>  
                </div>
            </div>
    )
}
