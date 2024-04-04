"use client"

import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import star from '../../../public/img/favoris.png'
import Image from 'next/image'
import { panierset , imgset } from '../../store/panier'

export default function Details(props) {
    const color = useSelector((state) => state.color)
    const dispatch = useDispatch();
    const panier = useSelector((state) => state.panier)
    const connexion = useSelector((state) => state.connect)
    
    return (
        <div className={`mt-[6rem]  w-[100%] min-h-[895px] flex bg-[#1e1e1e] justify-center items-center flex-wrap gap-10 bgdetail max-[426px]:pt-0  ${color.actual==true?"invert":""}`}>
            <div className='w-[65rem] h-[40rem] rounded-3xl flex flex-col items-center justify-center bg-[#0E0E0E] boxshadow max-[1024px]:w-[50rem] max-[769px]:w-[40rem] max-[426px]:h-[40rem] max-[426px]:w-[20rem]  '>
                 <div className='w-full h-1/2  flex max-[426px]:flex-col'>
                    <div className='h-full w-1/2 flex items-center justify-center mt-[5rem] max-[426px]:w-full  max-[426px]:mb-[9rem] max-[426px]:mt-[3rem]'>
                        <div className='h-[120%] w-[80%] rounded-full flex items-center justify-center max-[426px]:mb-[5rem]'>
                            <img className={`w-[130%] h-[90%] max-[769px]:h-[65%] rounded-full  ${color.actual==true?"invert":""}`} src={props.products[props.id].thumbnail} alt="" />
                        </div>
                    </div>
                    <div className='h-full w-1/2 flex items-center  justify-center flex-col text-white max-[426px]:w-full '>
                        <h1 className='text-2xl font-bold mt-[10rem] tracking-wide max-[426px]:mt-0 max-[426px]:w-[16rem] max-[426px]:text-xl'>About {props.products[props.id].title} : </h1>
                        <p className='w-[30rem] text-xl mt-7  max-[1030px]:w-[23rem] max-[769px]:w-[16rem] max-[426px]:text-base'>{props.products[props.id].short_description}</p>
                        <ul className='w-[30rem] text-xl mt-5 gap-2 flex flex-col max-[1030px]:w-[23rem] max-[769px]:w-[16rem] max-[426px]:mb-[23rem] max-[426px]:text-base'>
                            <li>Developed by : {props.products[props.id].developer}</li>
                            <li>Release date : {props.products[props.id].release_date}</li>
                            <li>Platform : {props.products[props.id].platform}</li>
                            <li>Genre : {props.products[props.id].genre}</li>
                        </ul>
                    </div>
                 </div>
                 <div className='w-full h-1/2 text-[#E08821] flex justify-center items-center'>
                    <div className='h-full w-1/2 flex items-center justify-center flex-col gap-5 text-xl font-bold max-[426px]:hidden max-[769px]:w-[18rem]'>
                        <h1 className='tracking-widest'>{props.products[props.id].title.toUpperCase()}</h1>
                        <h4 className='text-white font-medium max-[769px]:w-[14rem]'>Publish by : {props.products[props.id].publisher}</h4>
                    </div>
                    <div className='h-full w-1/2 flex items-center justify-center max-[426px]:w-full max-[426px]:mt-[15rem]'>
                        {
                            connexion.status==true? <Image onClick={()=>{panier.panier.includes(props.products[props.id].title)?"":dispatch(panierset(props.products[props.id].title),dispatch(imgset(props.products[props.id].thumbnail)))}} className={`invert cursor-pointer absolute top-[20%] w-[20px] h-[20px] hover:w-[25px] hover:h-[25px] transition-[3s]`}  alt="" src={star}></Image>:""
                        }
                       
                    <a href={props.products[props.id].freetogame_profile_url}> <button className="btn hover:text-white bg-[#E08821] text-black border-0"><p className='w-full text-center font-bold text-xl '>PLAY THE GAME </p></button></a>
                    </div>
                 </div>
            </div>  
        </div>
    )
}
