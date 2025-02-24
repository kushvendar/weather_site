import './App.css'
// import clear from './images/clear.png'
// import cloud from './images/clouds.png'
// import drizzle from './images/drizzle.png'
// import humidity from './images/humidity.png'
// import mist from './images/mist.png'
import rain from './images/rain.png'
import search from './images/search.png'
// import snow from './images/snow'
// import clear from './images/clear.png'


function App() {
  return (
          <div className= 'bg-gradient-to-br from-[#00feba] to-[#5b548a] w-9/10 max-w-[470px] mt-[100px] ml-auto mr-auto rounded-[20px] pl-[40px] pr-[35px] text-center text-white'>
        <div className='flex w-full items-center justify-between pt-[10px]'>
           <div className='bg-[#ebfffc] outline-none text-[#555] pt-[13px] pb-[13px] pr-[25px] pl-[25px] h-[60px] rounded-[30px] flex-[1] mr-[16px] text-[18px]'> <input type="text" placeholder='enter city name' /></div>
           <div className='bg-[#ebfffc] border-none outline-none rounded-1/2 rounded-[50%] w-[60px] h-[60px] cursor-pointer'>
           <button><div className='w-[16px] mt-[17px]'>
            <img src={search} alt="search bar"/>
            </div>
            </button>
           </div>
        </div> 
        <div className=''>
        <img src={rain} alt="weather-icon" />
        <div className='text-[48px]'>22°C</div>
        </div>
        
    </div>
  )
}

export default App
