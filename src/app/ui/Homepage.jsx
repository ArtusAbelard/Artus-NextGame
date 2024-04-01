
import React from 'react'
import Sliderhome from './Sliderhome'

export default function Homepage({products}) {  

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
        const referenceDate = "2020-10-14";

        const closestDate = getClosestDate(dates, referenceDate);

        console.log(closestDate); // "2020-10-15"

    // console.log(products);
    return (
        <div className='z-0'>
            <Sliderhome products={products}></Sliderhome>
            <div className='w-screen pt-[8rem] h-[33rem]  flex justify-center gap-[5rem] items-center'>
                <div className='w-[40rem] h-[35rem] rounded-xl'>
                <h1 className='text-white w-full text-center text-3xl font-bold pb-7'>Last release :</h1>
                <div className="carousel h-[25rem] w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.freetogame.com/g/540/thumbnail.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.freetogame.com/g/521/thumbnail.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.freetogame.com/g/517/thumbnail.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.freetogame.com/g/516/thumbnail.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                </div>
                </div>
                </div>
                <div className='w-[40rem] h-[35rem] bg-slate-400 rounded-xl'>   
                </div>
            </div>
        </div>
            
       
    )
}
