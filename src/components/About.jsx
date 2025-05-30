import React from 'react'
import './About.css'
function About({description}) {
  return (
    <div className='about'>
        <div className="about-content">
            <div className="line"></div>
            <p className='about-description'>{description}</p>
        </div>
      
    </div>
  )
}

export default About
