'use client';
import {useRef} from "react";
import { IoIosSearch } from "react-icons/io";


export default function Header() {
    const inputRef = useRef(null);
    const search = () => {
        if(inputRef.current){
            inputRef.current.focus()
        }};
    
    return (
        <div className="flex flex-col bg-[url('/img/background.svg')] bg-cover bg-no-repeat bg-center px-5 text-white rounded-b-4xl " >
            <form action="#" className="flex justify-between items-center ">
                <input
                ref={inputRef} 
                type="text"
                placeholder="Enter a place for search"
                className="border-none outline-none bg-transparent py-5"/>
                <IoIosSearch className="text-2xl hover:cursor-pointer" onClick={search} />

            </form>
            <div className="flex justify-between gap-5">
                <div className="flex flex-col pt-20">
                    <h1 className="text-8xl font-bold">3°</h1>
                    <div className="pl-20  -mt-10">
                        <p>Feels like -2°</p>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center pt-6">
                    <img src="/img/cloudyandsun.svg" alt="img" />
                    <h1>Cloudy</h1>
                </div>
            </div>
            <div className="flex justify-between items-center pt-20 py-1">
                <p>January 18, 16:14</p>
                <div className="flex flex-col items-center">
                    <p>Day 3°</p>
                    <p>Night -1°</p>
                </div>
                
            </div>
        </div>
        
        
    );
}
