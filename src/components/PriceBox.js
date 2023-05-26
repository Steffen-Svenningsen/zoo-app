import React from 'react'

export default function PriceBox(props) {
  return (
    <div className='price-component'>
        <h5>Entrépriser</h5>
        <div className='price-flex'>
            <div className="price-box">
                <p>Børn* <span>2-11 år</span></p>
                <h3>{props.childPrice}</h3>
                <p className='currency'>kr</p>
            </div>
            <div className="price-box">
                <p>Voksne <span>12-64 år</span></p>
                <h3>{props.adultPrice}</h3>
                <p className='currency'>kr</p>
            </div>
            <div className="price-box">
                <p>Seniorer <span>+65 år</span></p>
                <h3>{props.seniorPrice}</h3>
                <p className='currency'>kr</p>
            </div>
        </div>
        <p className='obs-msg'>Børn i alderen 0-1 år kommer gratis i parken.</p>
    </div>
  )
}
