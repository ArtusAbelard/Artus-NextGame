

import React from 'react'
import Sliderhome from './Sliderhome'

export default function Homepage({products}) {

   

    return (
        <div>
            <Sliderhome products={products}></Sliderhome>
            
            <div className='w-screen pt-[5rem] h-[33rem]  flex justify-center gap-10 items-center'>
                <div className='w-[51rem] h-[35rem] bg-slate-400 rounded-xl'></div>
                <div className='w-[51rem] h-[35rem] bg-slate-400 rounded-xl'></div>
            </div>

</div>
            
       
    )
}
