import React from "react";
import "./HomeCard.css"

export default function HomeCard({temperature}){
    return(
        <div className="HomeCard">
            <div className="tittle"><h1>Tiempo en {temperature.name}</h1></div>
            <div className="temp">
            <h4>Temp {temperature.temp}°C</h4><hr />
            <h4>Minima {temperature.temp_min}°C </h4><hr />
            <h4>Máxima de {temperature.temp_max}°C </h4><hr />
            <h4>ST {temperature.feels}</h4><hr />
            <h4>Humedad {temperature.humidity}% </h4><hr />
            </div>
            <h3>El dia se presenta con {temperature.description}.</h3>
            <img width="220px" src={"/icons/"+temperature.icon+".svg"} alt="" />
            <div><h1>Tiempo en principales ciudades de Argentina</h1></div>
        </div>
    )
}