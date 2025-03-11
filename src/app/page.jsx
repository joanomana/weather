'use client';
import {  useEffect,useState } from "react";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Menu from "@/components/Menu";
import Today from "@/components/Today";





export default function Home() {
  const [selectedPage, setSelectedPage] = useState("today");
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >0){
        setIsExpanded(false);
      } else{
        setIsExpanded(true);
      }};
      window.addEventListener("scroll", handleScroll);
      return () => { window.removeEventListener("scroll", handleScroll); }
    }, []);



  return (
    <div className="flex flex-col w-full bg-[#F6EDFF] gap-4">
      <div className={`sticky top-0 left-0 flex flex-col transition duration-200 ${isExpanded ? "gap-3": "bg-[#E2D3FA] gap-5 pb-3"}`}>
        <div>
        {isExpanded ? <Header1/> : <Header2/>}
        </div>
        <Menu setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      </div>
      <div className="flex flex-col px-10">
        {selectedPage === "today" && <Today />}
        {selectedPage === "tomorrow" && <h1>Tomorrow</h1>}
        {selectedPage === "days" && <h1>10 days</h1>}
      </div>
      
    </div>
  );
}
