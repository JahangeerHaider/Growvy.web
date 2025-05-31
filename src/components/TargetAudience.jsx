import React from 'react'
import './TargetAudience.css'
import image2 from '../assets/img2.png'
import image3 from '../assets/img3.png'
import image4 from '../assets/img4.png'
import image5 from '../assets/img5.png'

function TargetAudience() {
  return (
    <div className='audience'>
      <div className="audience-content">
        <div className="section">
         <div className="text-content">
           <h1>I’m a Job Seeker!</h1>
           <p>Looking for job according to my skills and requirements.</p>
           <button>Jobs</button>
         </div>
          <div className="image-content">
           <img src={image2} alt="Job seeker" />
          </div>
        </div>

        <div className="section">
          <div className="text-content">
           <h1>I’m an Employer!</h1>
           <p>Looking for talented candidates for my company.</p>
           <button>Post a Job</button>
          </div>
          <div className="image-content">
           <img src={image3} alt="Employer" />
          </div>
        </div>

        <div className="section">
         <div className="text-content">
          <h1>I’m an E-commerce Store!</h1>
          <p>Looking for potential sales data for sales campaign.</p>
          <button>Sales Data</button>
         </div>
         <div className="image-content">
          <img src={image4} alt="Ecommerce store" />
         </div>
        </div>

        <div className="section">
          <div className="text-content">
           <h1>I’m Business!</h1>
           <p>Looking for CRM or Data resources to boost my business.</p>
           <button>Business Plans</button>
          </div>
          <div className="image-content">
           <img src={image5} alt="Business" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default TargetAudience
