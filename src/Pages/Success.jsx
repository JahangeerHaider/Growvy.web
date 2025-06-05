import React from 'react'
import './Success.css'
import SuccessHeader from '../components/SuccessHeader'
import UserInvite from '../components/UserInvite'
import ClientsLogos from '../components/ClientsLogos'
import image19 from '../assets/img19.png'
import Banner from '../components/Banner'
import SuccessTeam from '../components/SuccessTeam'
import Svg from '../components/Svg'
import Footer from '../components/Footer'

function Success() {
  return (

    <div>
      <SuccessHeader/>
      <UserInvite/>
      <ClientsLogos/>
        <div className="success-merged-container">
            <div className="logo-image">
              <img src={image19} alt="logo" />
            </div>
            <div className="banner-no-style">
              <Banner />
            </div>
            <SuccessTeam/>
            <div className="svg-wrapper2">
              <Svg />
             </div>
             <div className="footer-grid2">
             <Footer/>
             </div>
            
           

          
        </div>

      
    </div>
  )
}

export default Success
