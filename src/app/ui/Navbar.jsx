'use client';

import React from 'react'
import darkmode from '../../../public/img/pngtree.jpg'
import Link from 'next/link'
import { useSelector, useDispatch } from "react-redux"
import { colorset } from '@/store/darkmod';

export default function Navbar(props) {

    const color = useSelector((state) => state.color)
    const dispatch = useDispatch();
    
    return (
        <div className={` navbar z-50 h-[6rem] bg-[#0E0E0E] ${color.actual==true?"invert":""}`}>
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 invert" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-[#0E0E0E] border-[1px] rounded-box w-52">
                    <li className='hover:text-[#E08821]'><Link href='/'>Home</Link></li>
                    <li className='hover:text-[#E08821]'><Link href='/produits'>Produits</Link></li>
                    <li className='hover:text-[#E08821]'><Link href='/favoris'>Favoris</Link></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-2xl invert ">GeekWorld</a>
                <img onClick={()=>{dispatch(colorset(!color.actual))}} className='h-8 w-8 me-3 cursor-pointer invert' src='https://static.thenounproject.com/png/4066357-200.png' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-xl menu menu-horizontal text-[#ECE6CE] px-1">
                    <li><button><span className={`box  ${color.actual==true?"text-white":"invert"}`}><Link href='/'>Home</Link></span></button></li>
                    <li><button><span className={`box ${color.actual==true?"text-white":"invert"}`}><Link href='/produits'>Produits</Link></span></button></li>
                    <li><button><span className={`box ${color.actual==true?"text-white":"invert"}`}><Link href='/favoris'>Favoris</Link></span></button></li>
                    {/* <li className='hover:text-[#E08821]'><Link href='/'>Home</Link></li>
                    <li className='hover:text-[#E08821]'><Link href='/produits'>Produits</Link></li>
                    <li className='hover:text-[#E08821]'><Link href='/favoris'>Favoris</Link></li> */}
                </ul>
            </div>
            <div className="navbar-end">
            {/* invert */}
                
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#E08821] border-0">Conexion</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#0E0E0E] text-white border-[1px] rounded-box w-52">
                            <li className='hover:text-[#E08821]'><a>Conexion</a></li>
                            <li className='hover:text-[#E08821]'><a>Inscription</a></li>
                        </ul>
                    </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="invert h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] border-[1px] card card-compact dropdown-content w-52 bg-[#0E0E0E] shadow">
                        <div className="card-body">
                        <span className="font-bold text-lg text-white">8 Items</span>
                        <span className=" text-[#E08821]">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn bg-[#E08821] border-0 btn-block">View cart</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
