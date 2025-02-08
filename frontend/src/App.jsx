import './App.css'
// import clear from './images/clear.png'
// import cloud from './images/clouds.png'
// import drizzle from './images/drizzle.png'
// import humidity from './images/humidity.png'
// import mist from './images/mist.png'
// import rain from './images/rain.png'
import search from './images/search.png'
// import snow from './images/snow'
// import clear from './images/clear.png'


function App() {
  return (
        <div className='bg-black flex flex-col '>
          <div className= 'flex flex-col bg-gradient-to-br from-[#00feba] to-[#5b548a] h-[470px] max-w-90 m-[20px] p-[30px] rounded-3xl'>
        <div className='flex flex-row'><input type="text" placeholder='enter city name' />
        <img src={search} alt="search bar" /> 
        </div> 
      <div className=''>temp</div>
      <div className=''> place</div>
      <div className=''>humidity and wind speed</div>
    </div>
        </div>
  )
}

export default App
