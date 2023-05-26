import React from 'react'
import BackBtn from '../components/BackBtn'
import Worker from '../assets/images/worker.webp'
import PriceBox from '../components/PriceBox.js'

export default function OpeningHours() {
  const getDate = new Date();
  const whatHour = getDate.getHours();
  return (
    <div className='page'>
      <BackBtn linkPath="/"/>
      <h2>Åbningstider og priser</h2>
      <div className='determine-opening'>
        <img className='co-worker-img' src={Worker} alt="Medarbejder" />
        { 
        
        whatHour > 9 & whatHour < 17 
        
        ? 

        <h3 className='open-msg'>Vi har åbent. Kom og besøg alle parkens skønne dyrearter!</h3>

        : 

        <h3 className='closed-msg'>Vi har lukket for i dag. Vi glæder os til at se dig en anden dag.</h3> 
        
        }
      </div>
      <PriceBox childPrice="130" adultPrice="200" seniorPrice="180" />
      <p>Vi har som regel åbent fra kl. 10-17 alle ugens dage. Kan afhænge af sæson.</p> <br />
      <a className='more-info' href="https://docdro.id/AoydPFR" target='_blank' >Få mere info om åbningstider og priser i <span>Parken</span></a> <br /> <br />
      <a className='more-info' href="https://docdro.id/LRKhxdI" target='_blank' >Få mere info om åbningstider og priser i <span>Tivoli</span></a>
    </div>
  )
}
