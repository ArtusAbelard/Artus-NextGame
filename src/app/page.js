"use client"

import Image from "next/image";
import { useDispatch,useSelector } from "react-redux";
// import { useDispatch ,useSelector } from "react-redux";
import { increment,decrement } from "@/store/slice";

// async function getProduct(){
//   const res = await fetch('https://dummyjson.com/products?limit=12&select=title,price,images')
//   const data = await res.json()
//   return data.products
// }


export default function Home() {
  // const products = await getProduct()
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  
  return (
    <div>
      
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      
    </div>
  );
}
