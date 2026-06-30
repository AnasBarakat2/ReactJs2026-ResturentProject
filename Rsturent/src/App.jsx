import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Greeting from './component/Greeting'
import './App.css'
import LandingPage from './component/LandingPage/LandingPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   <LandingPage/>
    </>
  )
}

export default App
