import React from 'react'
import { NavLink } from 'react-router-dom'
import MoneyIcon from './icons/MoneyIcon'
import ProfileIcon from './icons/ProfileIcon'
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
                <MoneyIcon />
            </NavLink>
            <NavLink to="/booking">
                <BookIcon />
            </NavLink>
            <NavLink to="/profil">
                <ProfileIcon />
            </NavLink>
        </div>
    </div>
  )
}
