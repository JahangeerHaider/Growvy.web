import React from 'react'
import PricingHeader from '../components/PricingHeader'
import PricingRecruitment from '../components/PricingRecruitment'
import PricingCards from '../components/PricingCards'
import PricingEcommerce from '../components/PricingEcommerce'
import PricingBusiness from '../components/PricingBusiness'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

function Pricing() {
  return (
    <div>
      <PricingHeader/>
      <PricingRecruitment/>
      <PricingCards/>
      <PricingEcommerce/>
      <PricingCards/>
      <PricingBusiness/>
      <PricingCards/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Pricing
