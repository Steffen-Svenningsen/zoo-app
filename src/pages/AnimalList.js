import React from 'react'
import AnimalBox from '../components/AnimalBox'
import Monkey from "../assets/images/monkey.webp"

export default function AnimalList() {
  return (
    <div className='page animal-list'>
      <AnimalBox imgSrc={Monkey} animal="Aber" />
      <AnimalBox imgSrc={Monkey} animal="Aber" />
      <AnimalBox imgSrc={Monkey} animal="Aber" />
      <AnimalBox imgSrc={Monkey} animal="Aber" />
    </div>
  )
}
