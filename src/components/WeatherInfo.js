import React from 'react'


export const WeatherInfo = (props) => {
    
console.log('clima:',props);


    if(props.city){   

      return (
        <div>
          <h1>Información meteorológica</h1>
    
    <p><i className="fas fa-location-arrow"></i> Ciudad : {props.city}, {props.country}</p>
    <p><i className="fas fa-temperature-low"></i> Temperatura: {props.temperature} ℃, {props.description}<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='icono'/> </p>
    <p><i className="fas fa-water"></i> Humedad: {props.humidity}<i className="fas fa-wind"> ,</i> Velocidad del viento: {props.wind_speed}</p>   
          
        </div>
      )
    }
    else{
      return (
        <div>Información meteorológica        
    <p><i className="fas fa-location-arrow"></i>  {props.error}</p>
        </div>
      )
      
    }  

}
