import React from 'react'
import './JobHeader.css'

function JobHeader() {
  return (
    <section className='job-section'>
        <div className="top-background"></div>
        <div className="job-header">
            <h1>Jobs</h1>
            <p>"Join our team and shape the future—explore exciting career opportunities today!"</p>
        </div>
        <div className="job-section2">
           <div className="category-item">Tech</div>
           <div className="category-item">Management</div>
           <div className="category-item">Human Resource</div>
           <div className="category-item">Marketing & Sales</div>
           <div className="category-item">Accounts & Finance</div>
           <div className="category-item">Customer Service</div>
        </div>

    </section>
  )
}

export default JobHeader
