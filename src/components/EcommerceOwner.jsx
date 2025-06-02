import React from 'react'
import './EcommerceOwner.css'
import image6 from '../assets/img6.png'

function EcommerceOwner() {
  return (
    <div className="container">
      <div className="owner-content">
        <div className="owner-text">
          <h1>E-commerce Owner?</h1>
          <p>
            Optimize your business with smart asset management, growth strategies, and cutting-edge solutions to boost sales and efficiency with Growvy!
          </p>
          <button>Plans</button>
        </div>
        <div className="content-img">
          <img src={image6} alt="E-commerce Visual" />
        </div>
      </div>
    </div>
  )
}

export default EcommerceOwner 
