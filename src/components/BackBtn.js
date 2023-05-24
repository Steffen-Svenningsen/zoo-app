import React from 'react'
import { NavLink } from 'react-router-dom'
import Arrow from "../assets/images/arrow.png"

export default function BackBtn(props) {
  return (
    <NavLink className="back-btn-link" to={props.linkPath}>
        <img className='back-btn-img' src={Arrow} width={30} height={30} alt="Gå tilbage" />
        Gå tilbage
    </NavLink>
  )
}
