import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import TargetAudience from '../components/targetAudience'
import Banner from '../components/Banner'
import Svg from '../components/Svg'
import EcommerceOwner from '../components/EcommerceOwner'


function Home() {
  return (
    <div>
      <Hero/>
      <About description=" “Growvy is built to streamline hiring, optimize assets, and drive business growth. Our mission is to create a tech-driven ecosystem where companies hire smarter, manage resources efficiently, and scale effortlessly.Whether you're seeking top talent, asset solutions, or business expansion, Growvy is your trusted partner in success.”"/>
      <TargetAudience/>
      <Banner/>
      <Svg/>
      <EcommerceOwner/>
    </div>
  )
}

export default Home
