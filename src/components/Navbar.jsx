import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <ul className='navbar-menu'>
            <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
            <li><Link to="/jobs" onClick={() => window.scrollTo(0, 0)}>Jobs</Link></li>
            <li><Link to="/success" onClick={() => window.scrollTo(0, 0)}>Success</Link></li>
            <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}>Services</Link></li>
            <li><Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>Pricing</Link></li>

        </ul>
      
    </div>
  )
}

export default Navbar
