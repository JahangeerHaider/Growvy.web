import React from 'react'
import './Footer.css'
import { FaFacebookF,FaInstagram,FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import image8 from '../assets/img8.png'

function Footer() {
  return (
    <section className='footer-grid'>
        <div className="footer-left">
            <h1>Growvy</h1>
            <p>Optimize your business with smart asset management, 
               growth strategies, and cutting-edge solutions to boost 
               sales and efficiency with Growvy!
            </p>
            <div className="social-icons">
               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
               <FaFacebookF className="icon-inner" />
               </a>

               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
               <FaInstagram className="icon-inner" />
               </a>

               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
               <FaLinkedinIn className="icon-inner" />
               </a>
            </div>
        </div>
        <div className="footer-center">
            <ul className='footer-links'>
             <li><Link to="/#about">About Us</Link></li>
             <li><Link to="/services">Services</Link></li>
             <li><Link to="/pricing">Plans & Pricing</Link></li>
             <li><Link to="/services#solutions">Business Solutions</Link></li>
             <li><Link to="/success">Success Stories</Link></li>
             <li><Link to="/jobs">Jobs</Link></li>
            </ul>
            <div className="rating-star">
            <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
            </div>
        </div>
        <div className="footer-right">
            <img src={image8} alt="footer" />
        </div>
    </section>
  )
}

export default Footer
