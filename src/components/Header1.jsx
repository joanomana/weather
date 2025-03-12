"use client";
import { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Header1({ setCity, weatherData, error, setMethod,city }) {
  const inputRef = useRef(null);
  const [cityName, setCityName] = useState("");

  const search = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  // Permitir escribir en el input
  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && cityName.trim() !== "") {
        e.preventDefault();
        setCity(cityName); // Actualiza la ciudad en el estado de `page.jsx`
        setMethod(1); // Establece el `method` en 1 (clima actual)
      }
  };

  return (
    <div className="flex flex-col bg-[url('/img/background.svg')] bg-cover bg-no-repeat bg-center px-5 text-white rounded-b-4xl">
      {/* 🔹 Barra de búsqueda */}
      <form action="#"  className="flex justify-between items-center" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputRef}
          type="text"
          value={cityName}
          onChange={handleChange}
          onKeyDown={handleSearch}
          placeholder={city||"Search for places..."}
          className="border-none outline-none bg-transparent py-5 text-lg placeholder-gray-300"
        />
        <IoIosSearch className="text-2xl hover:cursor-pointer" onClick={search} />
      </form>

      {/* 🔹 Mostrar error si la ciudad no se encuentra */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* 🔹 Mostrar datos del clima si están disponibles */}
      {weatherData && (
        <div>
          <div className="flex justify-between gap-5">
            <div className="flex flex-col pt-20">
              <h1 className="text-8xl font-bold">{weatherData.current.temp_c}°</h1>
              <div className="pl-20 -mt-10">
                <p>Feels like {weatherData.current.feelslike_c}°</p>
              </div>
            </div>
            <div className="flex flex-col items-center pt-6">
              <img src={weatherData.current.condition.icon} alt="Weather Icon" />
              <h1>{weatherData.current.condition.text}</h1>
            </div>
          </div>
          <div className="flex justify-between items-center pt-20 py-1">
            <p>{weatherData.location.localtime}</p>
            <div className="flex flex-col items-center">
              <p>Day {weatherData.current.temp_c}°</p>
              <p>Night {weatherData.current.temp_c - 5}°</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
