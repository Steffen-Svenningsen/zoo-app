import React from 'react'

export default function AnimalBox(props) {
  return (
    <div>
        <img src={props.imgSrc} width={160} height={160} alt={props.imgDesc} />
        <h3>{props.animal}</h3>
    </div>
  )
}
