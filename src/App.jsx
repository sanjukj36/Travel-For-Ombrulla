import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LogoBanner from './components/LogoBanner'
import Services from './components/Services'
import Destination from './components/Destination'
import TravelPoint from './components/TravelPoint'
import KeyFeatures from './components/KeyFeatures'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-white">
        <Header />
        <LogoBanner/>
        <Services/>
        <Destination/>
        <TravelPoint/>
        <KeyFeatures/>
        <Footer/>

      </div>
    </>
  )
}

export default App
