import React, { useState, useEffect } from 'react'
import IntroGuide from '../components/IntroGuide';

export default function HomePage() {
  const [introScreen, setIntroScreen] = useState(true)
  useEffect(() =>  {
    if (localStorage.getItem("hasVisited")){
      setIntroScreen(false)
    } else {
      localStorage.setItem("hasVisited", "true")
    }
  }, [])
  return (
    <div>
      {
        introScreen ?

        <IntroGuide/>

        :

        <h2>Velkommen til Jyllands Park Zoo. Vi ønsker dig en god tur i parken!</h2>
        
      }
      <div className='my-wristbands'>
        <h4>Tilføj dit armbånd</h4>
        Her skal man kunne tilføje og tilgå sine armbånd
      </div>
      <div className='news'>
        <h4>Nyheder fra parken</h4>
        Her skal der være "artikler" med nyheder fra parken
      </div>
      <div className="quick-links">
        <div>
          <h3>Kort over parken</h3>
        </div>
        <div>
          <h3>Mad & drikke</h3>
        </div>
        <div>
          <h3>Åbningstider</h3>
        </div>
        <div>
          <h3>Dyrene</h3>
        </div>
      </div>
    </div>
  )
}
