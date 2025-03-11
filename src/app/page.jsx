'use client';
import {  useEffect,useState } from "react";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Menu from "@/components/Menu";
import Today from "@/components/Today";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("today");
  const [isExpanded, setIsExpanded] = useState(true);

  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "2a865e254c1645d9842154850251003"

  const fetchWeather = async (cityName,method) => {
    setLoading(true);
    setError(null);
    if (method===1) {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`
        );
        if(!response.ok){
          throw new Error("City not found");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log("error in fetchWeather",error);
        setWeatherData(null);
      } 
    }else{
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=10`
        );
        if(!response.ok){
          throw new Error("City not found");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    } 
  };

  return (
    <div className="flex flex-col w-full bg-[#F6EDFF] gap-4">
      <div className={`sticky top-0 left-0 flex flex-col transition duration-200 ${isExpanded ? "gap-3": "bg-[#E2D3FA] gap-5 pb-3"}`}>
        <div>
        {isExpanded ? 
        <Header1 fetchWeather={fetchWeather} weatherData={weatherData}/> : 
        <Header2 fetchWeather={fetchWeather} weatherData={weatherData}/>}
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
