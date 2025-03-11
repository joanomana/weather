'use client';
import {useRef} from "react";
import { IoIosSearch } from "react-icons/io";

export default function Header2() {
    const inputRef = useRef(null);
    const search = () => {
        if(inputRef.current){
            inputRef.current.focus()
        }};
    return(
        <div className="flex flex-col px-5">
            <form action="#" className="flex justify-between items-center ">
                <input
                ref={inputRef} 
                type="text"
                className="border-none outline-none bg-transparent py-5"/>
                <IoIosSearch className="text-2xl hover:cursor-pointer" onClick={search} />

            </form>
            <div className="flex justify-between gap-5">
                <div className="flex flex-col">
                    <h1 className="text-8xl">3°</h1>
                    <div className="pl-20  -mt-10">
                        <p>Feels like -2°</p>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center">
                    <img src="/img/cloudyandsun.svg" alt="img" />
                    
                </div>
            </div>
        </div>
    )}