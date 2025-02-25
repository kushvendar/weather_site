import { use, useEffect, useRef, useState } from 'react'
import './App.css'

import cloud from './images/clouds.png'
import drizzle from './images/drizzle.png'
import humidity from './images/humidity.png'
import mist from './images/mist.png'
import rain from './images/rain.png'
import search from './images/search.png'
import snow from './images/snow.png'
import clears from './images/clear.png'
import wind from './images/wind.png'


function App() {
  const inputRef=useRef()
  const [weatherData,setWeatherData]=useState(false)
  const allIcons={
    "01d":clears,
    "01n":clears,
    "02d":cloud,
    "02n":cloud,
    "03d":cloud,
    "03n":cloud,
    "04d":drizzle,
    "04n":drizzle,
    "09d":rain,
    "09n":rain,
    "10d":rain,
    "10n":rain,
    "11d":rain,
    "11n":rain,
    "13d":snow,
    "13n":snow,
    "50d":mist,
    "50n":mist,

  }
  const apiCall=async (city)=>{
    if(city=="") {
      alert('Enter city name')
      return
    }
    try {
      const respone=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`)
      const data=await respone.json()
      console.log(data)
      const icon= allIcons[data.weather[0].icon] || clears
      setWeatherData({
        humidity:data.main.humidity,
        windspeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon:icon
      })

    } catch (error) {
      setWeatherData(false)
      console.log("Error in fetching weather data")
    }
  }

  useEffect(()=>{
    apiCall("berlin")
  },[])

  return (
         <div className='box-border'>
           <div className= 'bg-gradient-to-br from-[#00feba] to-[#5b548a] w-9/10 max-w-[470px] mt-[100px] ml-auto mr-auto rounded-[20px] pt-[40px] pb-[40px] pl-[35px] pr-[35px] text-center text-white'>
           <div className='w-full flex items-center justify-between'>
            <input className='bg-[#ebfffc] text-[#555] pt-[10px] pb-[10px] pr-[25px] pl-[25px] h-[60px] rounded-[30px] flex-[1] mr-[16px] text-[18px]' ref={inputRef} type="text" placeholder='enter city name'/>
            <button className='bg-[#ebfffc] rounded-[50%] w-[60px] h-[60px] cursor-pointer'><img className='w-[16px] m-[19px]' src={search} alt="search-button" onClick={()=>{apiCall(inputRef.current.value)}}/></button>
           </div>
           <div className=''>
            <img className='w-[170px] mt-[30px] ml-[112px]' src={weatherData.icon} alt="weather-img" />
            <h1 className='text-[80px] font-medium'></h1>
            <h2 className='text-[45px] font-normal mt-[-10px]'>{weatherData.location}</h2>
            <div className='flex items-center justify-between pr-[20px] pl-[20px] mt-[50px]'>
              <div className='flex items-center text-left'>
                <img className='w-[40px] mr-[10px]' src={humidity} alt="humidity-icon" />
                <div>
                  <p className='text-[28px] mt-[-6px]'>{weatherData.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className='flex items-center text-left'>
                <img className='w-[40px] mr-[10px]' src={wind} alt="wind" />
                <div>
                  <p className='text-[28px] mt-[-6px]'>{weatherData.windspeed} Km/h</p>
                  <p>WindSpeed</p>
                </div>
              </div>
            </div>
           </div>
          </div>
         </div>
  )
}

export default App
