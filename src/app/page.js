"use client"

import Image from "next/image";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { useDispatch ,useSelector } from "react-redux";
import { increment,decrement } from "@/store/slice";

export default function Home() {
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
