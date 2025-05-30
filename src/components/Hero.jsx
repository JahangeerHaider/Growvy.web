import React from 'react'
import './Hero.css'
import image from '../assets/img1.png'

function Hero() {
  return (
    <div className='hero-content'>
      <div className="hero-header">
        <h1>Maximize</h1>    
        <h1>bussiness efficiency</h1>
    
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
        <img src={image} alt="" />
      </div>
</div>

  )
}

export default Hero
