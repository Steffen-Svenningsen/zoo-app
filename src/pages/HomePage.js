import React, { useState, useEffect } from 'react'
import IntroGuide from '../components/IntroGuide';
import QuickLinkBox from '../components/QuickLinkBox';
import ZooMap from "../assets/images/zoo-map.webp";
import OpeningHours from "../assets/images/opening-hours.webp";
import Food from "../assets/images/food.webp";
import Armadillo from "../assets/images/armadillo.webp";

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
    <div className='page'>
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
        <QuickLinkBox imgSrc={ZooMap} imgDesc="Kort over Jyllands Park Zoo" linkPath="/kort-oversigt" title="Kort over parken" />
        <QuickLinkBox imgSrc={Armadillo} imgDesc="Zebra" linkPath="/dyrene" title="Se alle parkens dyr" />
        <QuickLinkBox imgSrc={Food} imgDesc="Mad og drikke" linkPath="/mad-og-drikke" title="Mad og drikke info" />
        <QuickLinkBox imgSrc={OpeningHours} imgDesc="Åbningstider" linkPath="/aabningstider" title="Åbningstider & priser" />
      </div>
    </div>
  )
}
