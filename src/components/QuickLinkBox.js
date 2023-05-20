import React from 'react'
import { NavLink } from 'react-router-dom'

export default function QuickLinkBox(props) {
  return (
    <NavLink className="quick-link-box" to={props.linkPath}>
        <div>
            <img src={props.imgSrc} alt={props.imgDesc} />
        </div>
        <h1>{props.title}</h1>
    </NavLink>
  )
}
