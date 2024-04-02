"use client"

import React from 'react'
import Sliderhome from './Sliderhome'
import { useSelector, useDispatch } from "react-redux"

export default function Homepage({products}) { 
    const color = useSelector((state) => state.color) 

    function getClosestDate(dates, referenceDate) {
        // Convertir les dates en objets Date
        const referenceDateObj = new Date(referenceDate);
        const datesObj = dates.map(date => new Date(date));
        // Calculer la différence en millisecondes entre chaque date et la date de référence
        const timeDiffs = datesObj.map(date => Math.abs(date - referenceDateObj));
        // Trouver l'index de la date avec la différence minimale
        const minIndex = timeDiffs.indexOf(Math.min(...timeDiffs));
        // Retourner la date la plus proche
        return dates[minIndex];
      }
        const dates = ["2020-10-15", "2020-10-12", "2020-10-18", "2020-10-10"];
        
        let now = new Date();
        console.log(now);
        let monthactual = now.getMonth()+1
        let actual = now.getFullYear()+"-"+monthactual+"-"+now.getDate()
        const referenceDate = actual;
        const closestDate = getClosestDate(dates, referenceDate);

        // console.log(closestDate); 
        // console.log(products[0].release_date);
        // const result = products.filter((products) => products.release_date);

        console.log(color.actual);

    
    return (
        <div className={` h-[42.4rem] z-0 ${color.actual==true?"invert ":""}`}>
          
            <div className='w-screen pt-[8rem] h-[33rem]  flex justify-center gap-[5rem] items-center '>
                <div className='w-[40rem] h-[35rem] rounded-xl'>
                
                    <h1 className={`text-white h-[4rem]  text-3xl font-bold pb-7 ${color.actual==true?"invert ":""}`}>Most Popular :</h1>
               
                <div className="carousel h-[25rem] w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.freetogame.com/g/540/thumbnail.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.freetogame.com/g/13/thumbnail.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.freetogame.com/g/517/thumbnail.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.freetogame.com/g/516/thumbnail.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                </div>
                </div>
                </div>
                <div className='w-[40rem] h-[35rem]  rounded-xl'>   


                <div className='w-[40rem] h-[35rem] rounded-xl'>
                
                <h1 className={`text-white h-[4rem]  text-3xl font-bold pb-7 ${color.actual==true?"invert ":""}`}>Last Release :</h1>
           
            <div className="carousel h-[25rem] w-full">
            <div id="slide6" className="carousel-item relative w-full">
                <img src="https://www.freetogame.com/g/575/thumbnail.jpg" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide9" className="btn btn-circle">❮</a> 
                <a href="#slide7" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide7" className="carousel-item relative w-full">
                <img src="https://www.freetogame.com/g/576/thumbnail.jpg" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="btn btn-circle">❮</a> 
                <a href="#slide9" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide9" className="carousel-item relative w-full">
                <img src="https://www.freetogame.com/g/579/thumbnail.jpg" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide7" className="btn btn-circle">❮</a> 
                <a href="#slide10" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide10" className="carousel-item relative w-full">
                <img src="https://www.freetogame.com/g/572/thumbnail.jpg" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide9" className="btn btn-circle">❮</a> 
                <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
            </div>
            </div>
            </div>



                </div>
                
            </div>
           
        </div>
            
       
    )
}
