import React from 'react'
import logo from '../assets/img/sol.png';
import '../assets/css/App.css';
import { WeatherInfo } from './WeatherInfo';
import { Weatherform } from './Weatherform';
 import { useWeather } from '../hooks/useWeather';
import Header from './Header';



export const WeatherApp = () => {

    const{ getWeather,clima} = useWeather()
   
    

  return (
    <>
    
    <div className="App">
    <Header titulo=" Aplicacion del clima"/>
    <header className="App-header">
    
      <img src={logo} className="App-logo" alt="logo" />
      <h1>App del tiempo</h1>
      <div className='container p-4'>
        <div className='row'>

          <div className='col-md-6'>
            <Weatherform  getWeather={ getWeather} />
          </div>

          <div className='col-md-6'>
            <WeatherInfo {...clima}/>
          </div>

        </div>
      </div>

    </header>
  </div>
  </>
  )
}
