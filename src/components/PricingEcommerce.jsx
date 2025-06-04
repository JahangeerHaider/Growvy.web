import React from 'react'
import './PricingEcommerce.css'
import image10 from '../assets/img10.png'

function PricingEcommerce() {
  return (
    <section className='Pricing-ecomer'>
            <div className="ecommerce-header2">
                <img src={image10} alt="Ecommerce" />
                <h1> E-commerce Solutions</h1>
                <p>"Boost your online store with our E-commerce Plans—affordable pricing crafted to scaleyour business effortlessly!"</p>
                <button>Plans</button>
            </div>
    </section>
  )
}

export default PricingEcommerce
