import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import TargetAudience from '../components/targetAudience'
import Banner from '../components/Banner'
import Svg from '../components/Svg'
import EcommerceOwner from '../components/EcommerceOwner'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'


function Home() {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    const section = document.getElementById(id);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}, [location]);

  return (
    <div>
      <Hero/>
      <section id="about">
       <About description=" “Growvy is built to streamline hiring, optimize assets, and drive business growth. Our mission is to create a tech-driven ecosystem where companies hire smarter, manage resources efficiently, and scale effortlessly.Whether you're seeking top talent, asset solutions, or business expansion, Growvy is your trusted partner in success.”"/>
      </section>
      
      <TargetAudience/>
      <Banner/>
      <Svg/>
      <EcommerceOwner/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
