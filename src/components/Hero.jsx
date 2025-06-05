import React from 'react'
import './Hero.css'
import image1 from '../assets/img1.png'

function Hero() {
  return (
    <div className='hero-content'>
      <div className="hero-header">
        <h1>Maximize</h1>    
        <div className="oval-wrap">
          <h1>bussiness efficiency</h1>
        </div>
    
        <span className='highlight1'>With</span>
        <span className='highlight2'>Growvy</span>

        <p className="hero-description">
        Scale your company with 
        tailored strategies, market
        insights, and expert consulting.
        </p>
    
        <button>Start Today</button>
      </div>

      <div className="img">
        <img src={image1} alt="" />
      </div>
</div>

  )
}

export default Hero
