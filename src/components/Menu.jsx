'use client';
import React from "react";
import { useRouter } from "next/navigation";

export default function Menu({selectedPage, setSelectedPage}) {
    return (
        <div className="flex justify-between items-center px-3">
            <button 
                className={`${selectedPage === "today" ? "bg-[#E0B6FF]  rounded-lg" : "bg-white"} py-2 px-6 rounded-lg `} onClick={()=>setSelectedPage("today")}>
                Today
            </button>
            <button 
                className={`${selectedPage === "tomorrow" ? "bg-[#E0B6FF]  rounded-lg" : "bg-white"} py-2 px-6 rounded-lg `} onClick={()=>setSelectedPage("tomorrow")}>
                Tomorrow
            </button>
            <button 
                className={`${selectedPage === "days" ? "bg-[#E0B6FF]  rounded-lg" : "bg-white"} py-2 px-6 rounded-lg `} onClick={()=>setSelectedPage("days")}>
                10 days
            </button>
            
        </div>
    );}