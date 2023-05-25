import React from 'react'
import GpsMap from "../assets/images/zoo-map-gps.png"

export default function MapTracking() {
  return (
    <div className='page'>
        <h2>Track dine armbånd</h2>
        <p>Bevar overblikket! Her kan du se hvor dine armbånd befinder sig i parken.</p>
        <span className='small-text'>OBS! De brune markører indikerer hvor dine armbånd befinder sig.</span>
        <img src={GpsMap} alt="GPS kort over Jyllands Park Zoo" />
    </div>
  )
}
