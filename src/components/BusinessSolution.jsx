import React from 'react'
import './BusinessSolution.css'
import image11 from '../assets/img11.png'
import image12 from '../assets/img12.png'
import image13 from '../assets/img13.png'
import image14 from '../assets/img14.png'

function BusinessSolution() {
  return (
    <div className='solution-continer'>
        <div className="section">
            <div className="solution-content">
                <h1>Problems in Hiring</h1>
                <p>E-commerce businesses struggle 
                   with high marketing costs,
                   inefficient operations, and slow
                   growth, making it difficult to scale
                   and maximize profits.
                </p>
            </div>
            <div className="section-image">
                <img src={image11} alt="Problems in Hiring" />
            </div>
        </div>

        <div className="section">
            <div className="solution-content">
                <h1>With Growvy Solution</h1>
                <p>With Growvy, businesses can access a
                   database of active job seekers who
                   have recently joined for job search.
                   Use advanced filters to find the right
                   candidates quickly and at a fraction of
                   the cost—no wasted budget, just
                   quality hires!
                </p>
                <button>Start Now</button>
            </div>
            <div className="section-image">
                <img src={image12} alt="With Growvy Solution" />
            </div>
        </div>

        <div className="section">
            <div className="solution-content">
                <h1>E-commerce Business</h1>
                <p>E-commerce businesses struggle
                   with high marketing costs,
                   inefficient operations, and slow
                   growth, making it difficult to scale
                   and maximize profits.
                </p>
            </div>
            <div className="section-image">
                <img src={image13} alt="E-commerce Business" />
            </div>
        </div>

        <div className="section">
            <div className="solution-content">
                <h1>With Growvy Solution</h1>
                <p>Growvy helps e-commerce
                   businesses streamline operations,
                   manage assets, and implement smart
                   growth strategies to boost sales and
                   efficiency—all at a low cost with
                   proven results.
                </p>
                <button>Start Now</button>
            </div>
            <div className="section-image">
                <img src={image14} alt="With Growvy Solution" />
            </div>
        </div>

      
    </div>
  )
}

export default BusinessSolution
