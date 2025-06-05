
import React from 'react'
import './SuccessTeam.css'

function SuccessTeam() {
  return (
    <div className="success-cards-container">
      <div className="cards-wrapper">
        <div className="card">
          <div className="employee-icon">
            <i className="fas fa-user fa-2x" style={{ color: "#00c80f" }}></i>
          </div>
          <p className="testimonial-text">Excellent Experience with growvy.</p>
          <div className="rating-star">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>

        <div className="card">
          <div className="employee-icon">
            <i className="fas fa-user fa-2x" style={{ color: "#00c80f" }}></i>
          </div>
          <p className="testimonial-text">Excellent Experience with growvy.</p>
          <div className="rating-star">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>

      <div className="dotted-line">
        <span className="big-dot"></span>
        <span className="small-dot left-1"></span>
        <span className="small-dot left-2"></span>
        <span className="small-dot left-3"></span>
        <span className="small-dot right-1"></span>
        <span className="small-dot right-2"></span>
        <span className="small-dot right-3"></span>
      </div>
    </div>
  )
}

export default SuccessTeam
