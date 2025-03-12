"use client";
import { useEffect, useState } from "react";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Menu from "@/components/Menu";
import Today from "@/components/Today";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("today");
  const [isExpanded, setIsExpanded] = useState(true);
  const [city, setCity] = useState(""); // Ciudad por defecto
  const [method, setMethod] = useState(1); // Método por defecto (Clima actual)
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "2a865e254c1645d9842154850251003"; 


  // Obtener la URL de la API según el método
  const getWeatherApiUrl = () => {
    switch (method) {
      case 1:
        return `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
      case 2:
        return `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=2`;
      case 3:
        return `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=10`;
      default:
        return `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    }
  };

  // Obtener datos del clima
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(getWeatherApiUrl());
        if (!response.ok) throw new Error("Ciudad no encontrada");
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      }
    };


    fetchWeather();
  }, [city, method]); // Se actualiza cuando cambia la ciudad o el método

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Ubicación obtenida: Lat ${latitude}, Lng ${longitude}`);
  
          try {
            const response = await fetch(
              `http://api.weatherapi.com/v1/current.json?key=2a865e254c1645d9842154850251003&q=${latitude},${longitude}`
            );
            if (!response.ok) throw new Error("No se pudo obtener el clima");
            const data = await response.json();
            setWeatherData(data);
            setCity(data.location.name); // Actualiza el estado con la ciudad detectada
          } catch (err) {
            console.error("Error obteniendo el clima:", err);
          }
        },
        (error) => {
          console.error("Error obteniendo la ubicación:", error);
        }
      );
    }
  }, []);
  

  // Manejar expansión del header con scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsExpanded(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col w-full bg-[#F6EDFF] gap-4">
      {/* Header */}
      <div className={`sticky top-0 left-0 flex flex-col transition duration-200 ${isExpanded ? "gap-3" : "bg-[#E2D3FA] gap-5 pb-3"}`}>
        {isExpanded ? (
          <Header1 setCity={setCity} city={city} setMethod={setMethod} weatherData={weatherData} />
        ) : (
          <Header2 />
        )}
        <Menu setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
      </div>

      {/* Contenido dinámico */}
      <div className="flex flex-col px-10">
        {selectedPage === "today" && <Today weatherData={weatherData} />}
        {selectedPage === "tomorrow" && <h1>Tomorrow</h1>}
        {selectedPage === "days" && <h1>10 days</h1>}
      </div>
    </div>
  );
}
