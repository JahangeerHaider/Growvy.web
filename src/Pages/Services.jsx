import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ServiceHeader from '../components/ServiceHeader'
import UserInvite from '../components/UserInvite'
import BusinessSolution from '../components/BusinessSolution'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

function Services() {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    const section = document.getElementById(id);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 200); 
    }
  }
}, [location]);
  return (
    <div>
     <ServiceHeader/>
     <UserInvite/>
     <section id="solutions">
      <BusinessSolution/>
     </section>
     <CallToAction/>
     <Footer/>
    
    </div>
  )
}

export default Services
