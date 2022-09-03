
import {WEATHER_KEY} from '../keys/keys'
import { useState } from 'react';


export const useWeather = () => {
 

    const [clima,setClima]=useState([])


    const getWeather= async (e)=>{

        try{
   
        e.preventDefault();
        const {city,country}=e.target.elements;
        const ciudad=city.value;
        const pais=country.value;        
      
        const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${WEATHER_KEY}&units=metric&lang=sp`;
        const response = await fetch(API_URL);     
        const data = await response.json();        
        
        setClima({
          lat: data.coord.lat,
          lon: data.coord.lon,
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
          icon:data.weather[0].icon,
          error: null
      });    

     
      }
      catch(error) {

       setClima({
      error: 'Ciudda no encontrada'
          })

           }
        
    }
      

  return {
    clima,
   
    getWeather
  }
  
}
