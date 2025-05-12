import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroHome from './Components/HeroHome/HeroHome'
import About from './Components/About/About'
import VideoContainer from './Components/VideoContainer/VideoContainer'
import AboutCompanyInfo from './Components/AboutCompanyInfo/AboutCompanyInfo'
import JoinUs from './Components/JoinUs/JoinUs'
import Footer from './Components/Footer/Footer'
import CallUs from './Components/CallUs/CallUs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroHome />
      <About />
      <AboutCompanyInfo />
      <JoinUs />
      <VideoContainer />
      <Footer />
      <CallUs/>
    </>
  )
}

export default App
