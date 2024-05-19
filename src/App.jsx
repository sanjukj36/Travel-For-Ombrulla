import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LogoBanner from './components/LogoBanner'
import Services from './components/Services'
import Destination from './components/Destination'
import TravelPoint from './components/TravelPoint'
import KeyFeatures from './components/KeyFeatures'
import Footer from './components/Footer'
import { NavProvider } from './contexts/NavContext'
import 'lazysizes';
import ErrorBoundary from './ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-white">

        <NavProvider>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <ErrorBoundary>

            <LogoBanner />
          </ErrorBoundary>
          <ErrorBoundary>

            <Services />
          </ErrorBoundary>
          <ErrorBoundary>

            <Destination />
          </ErrorBoundary>
          <ErrorBoundary>

            <TravelPoint />
          </ErrorBoundary>
          <ErrorBoundary>

            <KeyFeatures />
          </ErrorBoundary>
          <ErrorBoundary>

            <Footer />
          </ErrorBoundary>

        </NavProvider>
      </div >
    </>
  )
}

export default App
