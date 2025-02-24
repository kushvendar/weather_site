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
        <div className='flex w-full items-center justify-between pt-[12px]'>
           <div className='bg-[#ebfffc] outline-none text-[#555] pt-[13px] pb-[13px] pr-[25px] pl-[25px] h-[60px] rounded-[30px] flex-[1] mr-[16px] text-[18px]'> <input type="text" placeholder='enter city name' /></div>
           <div className='bg-[#ebfffc] border-none outline-none rounded-1/2 rounded-[50%] w-[60px] h-[60px] cursor-pointer'>
           <button><div className='w-[16px] mt-[17px]'>
            <img src={search} alt="search bar"/>
            </div>
            </button>
           </div>
        </div> 
        <div className='w-[170px] mt-[30px]'>
         <img src={rain} alt="weather-icon" />
        <div className='text-[80px] font-medium'>22°C</div>
        <div className='text-[45px] font-normal mt-[-10px]'>New York</div>
        <div>
          <img src={humidity} alt="humidity" />
          <div className=''>
            <p>50%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div>
          <img src={wind} alt="wind" />
          <div className=''>
            <p>15 Km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
        </div>
        
    </div>
         </div>
  )
}

export default App
