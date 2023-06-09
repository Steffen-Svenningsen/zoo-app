import React from 'react'
import Dankort from "../assets/images/dankort.png"
import Mastercard from "../assets/images/mastercard.png"
import Visa from "../assets/images/visa.png"

export default function PaymentForm() {
    const paymentCard = document.querySelector("input[name='card']");
  return (
    <form className='payment-form'>
        <p className='form-label-text'>Vælg korttype</p>
        <div className='card-options'>
            <label htmlFor="dankort">
                <input id='dankort' type="radio" name='card' />
                <img src={Dankort} width={48} height={48} alt="Dankort" />
            </label>
            <label htmlFor="mastercard">
                <input id='mastercard' type="radio" name='card' />
                <img src={Mastercard} width={48} height={48} alt="Mastercard" />
            </label>
            <label htmlFor="visa">
                <input id='visa' type="radio" name='card' />
                <img src={Visa} width={48} height={48} alt="Visa" />
            </label>
        </div>
        <div className='form-row'>
            <div className="form-name">
                <label htmlFor="name">Kortholders navn</label>
                <input required id='name' type="text" placeholder='Henrik Jensen' />
            </div>
            <div className='form-date'>
                <label htmlFor="date">Udløbsdato</label>
                <div>
                    <input pattern='\d*' required type="text" maxLength={2} minLength={2} placeholder='03' id='date'/>
                    <p>/</p>
                    <input pattern='\d*' required type="text" maxLength={2} minLength={2} placeholder='26' id='month'/>
                </div>
            </div>
        </div>
        <div className='form-row'>
            <div className="form-card-number">
                <label htmlFor="card-number">Kortnummer</label>
                <input required maxLength={16} minLength={16} id='card-number' pattern='\d*' type="text" placeholder='1234 1234 1234 1234' />
            </div>
            <div className='form-cvc'>
                <label htmlFor="cvc">CVC</label>
                <input required maxLength={3} minLength={3} type="text" pattern='\d*' placeholder='123' id='cvc'/>
            </div>
        </div>
        <div className='deposit-amount'>
            <label htmlFor="deposit-amount">Beløb</label>
            <input required type="text" pattern='\d*' id='deposit-amount' placeholder='.kr'/>
        </div>
        <button type='submit'>Betal</button>
    </form>
  )
}
