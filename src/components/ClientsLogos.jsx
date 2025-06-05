import React from 'react'
import './ClientsLogos.css'
import image15 from '../assets/img15.png'
import image16 from '../assets/img16.png'
import image17 from '../assets/img17.png'
import image18 from '../assets/img18.png'


function ClientsLogos() {
  return (
     <section className='client-container'>
        <div className="clients-logos">
            <img src={image15} alt="Client2" />
            <img src={image16} alt="Client3" />
            <img src={image17} alt="Client4" />
            <img src={image18} alt="Client5" />
        </div>

     </section>
  )
}

export default ClientsLogos
