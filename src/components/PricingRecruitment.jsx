import React from 'react'
import './PricingRecruitment.css'
import image9 from '../assets/img9.png'
function PricingRecruitment() {
  return (
    <section className='recruitment'>
        <div className="recruitment-header">
            <img src={image9} alt="recruitment" />
            <h1>Recruitment Solution</h1>
            <p>"Unlock seamless hiring with our tailored Recruitment Plans—flexible pricing designed tofind your perfect talent, fast!"</p>
            <button>Plans</button>
        </div>
    </section>
  )
}

export default PricingRecruitment
