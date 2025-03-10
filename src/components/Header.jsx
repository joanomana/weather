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
        <div className="flex flex-col bg-[url('/img/background.svg')] bg-cover bg-no-repeat bg-center" >
            <form action="#" className="flex justify-between mx-10 my-5 text-white">
                <input
                ref={inputRef} 
                type="text"
                placeholder="Enter a place for search"
                className="border-none outline-none bg-transparent text-white"
                 />
                <IoIosSearch className="hover:cursor-pointer" onClick={search} />

            </form>
            <div className="grid grid-cols-2">
                <h1>Weather</h1>
            </div>
        </div>
        
        
    );
}
