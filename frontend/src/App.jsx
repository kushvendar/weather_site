import './App.css'
// import clear from './images/clear.png'
// import cloud from './images/clouds.png'
// import drizzle from './images/drizzle.png'
import humidity from './images/humidity.png'
// import mist from './images/mist.png'
import rain from './images/rain.png'
import search from './images/search.png'
// import snow from './images/snow'
// import clear from './images/clear.png'
import wind from './images/wind.png'


function App() {
  return (
         <div className='box-border bg-[#222]'>
           <div className= 'bg-gradient-to-br from-[#00feba] to-[#5b548a] w-9/10 max-w-[470px] mt-[100px] ml-auto mr-auto rounded-[20px] pt-[40px] pb-[40px] pl-[35px] pr-[35px] text-center text-white'>
           <div className='w-full flex items-center justify-between'>
            <input className='bg-[#ebfffc] text-[#555] pt-[10px] pb-[10px] pr-[25px] pl-[25px] h-[60px] rounded-[30px] flex-[1] mr-[16px] text-[18px]' type="text" placeholder='enter city name' />
            <button className='bg-[#ebfffc] rounded-[50%] w-[60px] h-[60px] cursor-pointer'><img className='w-[16px] m-[19px]' src={search} alt="search-button" /></button>
           </div>
           <div className=''>
            <img className='w-[170px] mt-[30px] ml-[90px]' src={rain} alt="weather-img" />
            <h1 className='text-[80px] font-medium'>22°C</h1>
            <h2 className='text-[45px] font-normal mt-[-10px]'>New York</h2>
            <div className='flex items-center justify-between pr-[20px] pl-[20px] mt-[50px]'>
              <div className='flex items-center text-left'>
                <img className='w-[40px] mr-[10px]' src={humidity} alt="wind-icon" />
                <div>
                  <p className='text-[28px] mt-[-6px]'>50%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className='flex items-center text-left'>
                <img className='w-[40px] mr-[10px]' src={wind} alt="wind" />
                <div>
                  <p className='text-[28px] mt-[-6px]'>15 Km/h</p>
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
