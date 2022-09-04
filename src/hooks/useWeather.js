
import { useState } from 'react';
import weatherDB from '../api/weatherDB';

export const useWeather = () => { 

    const [clima,setClima]=useState([])

    const getWeather= async (e)=>{

        try{   
        e.preventDefault();
        const {city,country}=e.target.elements;
        const ciudad=city.value;
        const pais=country.value;     
               
        const response = await weatherDB.get(`weather?q=${ciudad},${pais}`)    
             
        setClima({
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          wind_speed: response.data.wind.speed,
          city: response.data.name,
          country: response.data.sys.country,
          icon: response.data.weather[0].icon,
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
