import React from 'react'
import './TopJobs.css'

function TopJobs() {
    const jobs=[
        "Business Developer",
       " Finance Manager",
       " Human Resource Manager",
        "Software Engineer",
       ' Web Developer',
        'Graphics Designer/UI/UX',
       ' SEO Expert',
       ' Android Developer',
       ' Floor Manager',
        'Sales Representative',
       ' Data Entry Operator',
       ' Delivery Man',
       ' Urdu / English Call Center Agent',
       ' Morning Shift Jobs for Females',
       ' Accountant',
    ]
  return (
    <section className="top-jobs-section">
    <h1>Top Jobs</h1>
    <div className="jobs-list">
      {jobs.map((job, index) => (
        <div key={index} className="job-item">
          <span className="job-title">{job}</span>
          <button className="apply-btn">Apply Now</button>
        </div>
      ))}
    </div>
  </section>
  )
}

export default TopJobs
