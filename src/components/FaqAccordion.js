import React, { useState } from 'react'

export default function FaqAccordion({ title, content}) {
  const [isActive, setIsActive] = useState(false);
  return (
        <div className="accordion-item">
            <div onClick={() => setIsActive(!isActive)} className="accordion-title">
                <h3>{title}</h3>
                <div className='accordion-sign'>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className='accordion-content'>{content}</div>}
        </div>
  )
}
