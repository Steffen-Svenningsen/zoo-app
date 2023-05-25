import React from 'react'
import BackBtn from '../components/BackBtn'
import PaymentForm from '../components/PaymentForm'

export default function DepositPage() {
  return (
    <div className='page'>
      <BackBtn linkPath="/billetter"/>
      <h2>Indbetal til dine armbånd</h2>
      <PaymentForm />
    </div>
  )
}
