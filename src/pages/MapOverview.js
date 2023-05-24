import React from 'react'
import ZooMap from "../assets/images/zoo-map.webp"
import BackBtn from '../components/BackBtn'

export default function MapOverview() {
  return (
    <div className='page map-overview'>
      <BackBtn linkPath="/"/>
      <img src={ZooMap} alt="Kort over Jyllands Park Zoo" />
    </div>
  )
}
