import React from 'react'
import './ServiceHeader.css'
import image9 from '../assets/img9.png'
import image10 from '../assets/img10.png'
import image5 from '../assets/img5.png'

function ServiceHeader() {
  return (
    <section className='services-container'>
        <div className="top-background"></div>
        <div className="services-header">
            <h1>Services</h1>
            <p>
              At Growvy, we provide innovative, cost-effective solutions to help
               businesses and professionals thrive.
            </p>
        </div>
        <div className="services-card">
            <div className="card">
                <img src={image9} alt="Hiring" />
                <h3>Hiring</h3>
                <p>Access a vast talent pool to hire the right candidates quickly and
                   affordably.
                </p>
                <button className='btn'>plans</button>
            </div>
             
            <div className="card">
                <img src={image10} alt="E-commerce" />
                <h3>E-commerce</h3>
                <p>Drive expansion with targeted strategies and market-driven
                   solutions.
                </p>
                <button className='btn'>plans</button>
            </div>
            <div className="card">
                <img src={image5} alt="Business" />
                <h3>Business</h3>
                <p>Optimize and manage business resources with data-backed insights</p>
                <button className='btn'>plans</button>
            </div>
        </div>

     </section>
  )
}

export default ServiceHeader
