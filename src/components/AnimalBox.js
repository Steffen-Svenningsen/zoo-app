import React from 'react'

export default function AnimalBox(props) {
  return (
    <div>
        <img src={props.imgSrc} width={140} height={140} alt={props.imgDesc} />
        <h3>{props.animal}</h3>
    </div>
  )
}
