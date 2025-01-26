import './App.css'
import search from './images/search.png'
import cloud from './images/clouds.png'

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-400'>
      <div className='flex flex-center'>
        <div><input type="text" placeholder='enter city name' /></div>
        <div><img src={search} alt="search bar" /></div>
      </div>
      <div className=''><img src={cloud} alt="cloud" /></div>
      <div className=''>temp</div>
      <div className=''> place</div>
      <div className=''>humidity and wind speed</div>
    </div>
  )
}

export default App
