import React from 'react'
import { NavLink } from 'react-router-dom'
import WalletIcon from './icons/WalletIcon'
import MapIcon from './icons/MapIcon'
import HomeIcon from './icons/HomeIcon'
import BookIcon from './icons/BookIcon'

export default function NavBar() {
  return (
    <div className='nav-bar'>
        <div className="nav-bar-links">
            <NavLink to="/">
                <HomeIcon />
            </NavLink>
            <NavLink to="/billetter">
                <WalletIcon />
            </NavLink>
            <NavLink to="/booking">
                <BookIcon />
            </NavLink>
            <NavLink to="/gps-kort">
                <MapIcon />
            </NavLink>
        </div>
    </div>
  )
}
