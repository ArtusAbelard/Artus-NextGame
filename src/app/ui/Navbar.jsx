'use client';

import gitteub from '../../../public/img/Git-Teub-removebg.png'
import logoremove from '../../../public/img/Geek-Hub-removebg-preview.png'
import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from "react-redux"
import { colorset } from '../../store/darkmod';
import Image from 'next/image';
import star from '../../../public/img/favoris.png'

export default function Navbar(props) {
    const color = useSelector((state) => state.color)
    const dispatch = useDispatch();

    return (
        <div className={` navbar z-50 h-[6rem] navshadow bg-[#0E0E0E] ${color.actual==true?"invert":""}`}>
            <div className="navbar-start min-[1440px]:ms-5">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 invert" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-[#0E0E0E] border-[1px] rounded-box w-52">
                    <li className='hover:text-[#E08821]'><Link href='/'>Home</Link></li>
                    <li className='hover:text-[#E08821]'><Link href='/produits'>Games</Link></li>
                    <li className='hover:text-[#E08821]'><Link href='/favoris'>Saved</Link></li>
                </ul>
                </div>
                <Image className='w-[12rem] max-[425px]:w-[10rem] h-[5rem]' alt="" src={gitteub}></Image>
                {/* <Image className='w-[12rem] max-[425px]:w-[10rem] h-[4rem]' alt="" src={logoremove}></Image> */}
                {/* <a className="btn btn-ghost text-2xl invert ">GeekWorld</a> */}
                <img onClick={()=>{dispatch(colorset(!color.actual))}} className='h-8 w-8 me-3 cursor-pointer invert ' src='https://static.thenounproject.com/png/4066357-200.png' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="text-xl menu menu-horizontal text-[#ECE6CE] px-1">
                    <li><Link href='/'><button><span className={`box  tracking-widest ${color.actual==true?"text-white":"invert"}`}>Home</span></button></Link></li>
                    <li><Link href='/produits'><button><span className={`box tracking-widest ${color.actual==true?"text-white":"invert"}`}>Games</span></button></Link></li>
                    <li><Link href='/favoris'><button><span className={`box tracking-widest ${color.actual==true?"text-white":"invert"}`}>Favs</span></button></Link></li>
                </ul>
            </div>
            <div className="navbar-end min-[1440px]:me-5">        
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#E08821] border-0 text-black ">Log in</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#0E0E0E] text-white border-[1px] rounded-box w-52">
                           <Link href={'/connexion'}><li className='hover:text-[#E08821]  ps-3 pt-2'>Log in</li></Link>
                           <Link href={'/registration'}><li className='hover:text-[#E08821] ps-3 pt-2 pb-2'>Registration</li></Link>
                        </ul>
                    </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="invert h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> */}
                        <Image className='invert h-[2rem] w-[2rem]  ease-in duration-100 hover:w-[2.5rem] hover:h-[2.5rem] ' alt=""  src={star}></Image>
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
