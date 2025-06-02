import React from 'react'
import './CallToAction.css'
import image7 from '../assets/img7.png'

function CallToAction() {
  return (
    <div className='call-container'>
        <div className="call-img">
            <img src={image7} alt="Call schedule" />
        </div>
        <div className="call-content">
            <button>Schedule Call Now</button>
            <p>Join over 10k users worldwide.
               Start scheduling in less than 1
                minutes.
                </p>
        </div>
        
      
    </div>
  )
}

export default CallToAction
