'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Menu from "@/components/Menu";




export default function Home() {
  const [selectedPage, setSelectedPage] = useState("today");
  const router = useRouter();



  return (
    <div className="flex flex-col w-full h-dvh bg-[#F6EDFF] gap-4">
      <Header/>
      <Menu setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
      <div className="flex flex-col px-10">
        {selectedPage === "today" && <h1>Today</h1>}
        {selectedPage === "tomorrow" && <h1>Tomorrow</h1>}
        {selectedPage === "days" && <h1>10 days</h1>}
      </div>
      
    </div>
  );
}
