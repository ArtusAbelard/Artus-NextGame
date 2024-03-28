"use client"

import React from 'react'
import { useSelector} from "react-redux"

export default function Details(props) {
    const color = useSelector((state) => state.color)
    console.log(props.products[0]);
    console.log(props.id);
    return (
        <div className={`pt-16 w-[100%] min-h-[895px] flex bg-[#1e1e1e] justify-center items-center flex-wrap gap-10 ${color.actual==true?"invert":""}`}>
            <div className='w-[70rem] h-[40rem] rounded-3xl  items-center justify-center bg-[#0E0E0E] boxshadow '>
                 <div className='w-full h-1/2  flex'>
                    <div className='h-full w-1/2 flex items-center justify-center mt-[5rem]'>
                        <div className='h-[120%] w-[80%] rounded-full flex items-center justify-center'>
                            <img className={`w-[130%] h-[90%] rounded-full ${color.actual==true?"invert":""}`} src={props.products[props.id].thumbnail} alt="" />
                        </div>
                    </div>
                    <div className='h-full w-1/2 '>
                        
                    </div>
                 </div>
                 <div className='w-full h-1/2 text-[#E08821] flex'>
                    <div className='h-full w-1/2 flex items-center justify-center flex-col gap-5 text-xl font-bold '>
                        <h1 className='tracking-widest'>{props.products[props.id].title.toUpperCase()}</h1>
                        <h4 className='text-white font-medium'>Publish by : {props.products[props.id].publisher}</h4>
                    </div>
                    <div className='h-full w-1/2 '>
                    <a href={props.products[props.id].freetogame_profile_url}> <p className='w-full text-center font-bold text-xl'>PLAY THE GAME </p></a>
                    </div>
                 </div>
                 

                 
            </div>  
        </div>
    )
}
