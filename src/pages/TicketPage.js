import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TicketPage() {
  return (
    <div className='page'>
      <h2>Sæt penge ind på dit aktivitetsarmbånd eller køb sæsonkort.</h2>
      <NavLink to="/indbetal" className="deposit-box">
        <h3>Indbetal penge</h3>
      </NavLink>
      <NavLink to="https://www.billetsalg.dk/Ticket/Jyllands%20Park%20Zoo/107" className="card-holder-box">
        <h3>Køb sæsonkort</h3>
      </NavLink>
    </div>
  )
}
