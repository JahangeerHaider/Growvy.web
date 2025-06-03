import React from 'react'
import './JobIntro.css'
import image2 from '../assets/img2.png'
function JobIntro() {
  return (
    <section className="job-intro">
       <div className="job-text">
        <h1>I’m a Job Seeker!</h1>
        <p>Looking for job according to my <br />skills and requirements.</p>
        <button className="job-btn">Jobs</button>
      </div>
      <div className="job-img">
        <img src={image2} alt="Job Seeker" />
      </div>
    </section>
  )
}

export default JobIntro
