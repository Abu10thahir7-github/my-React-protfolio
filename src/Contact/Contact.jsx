import React from 'react'
import "./Contact.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Contact() {
  return (
    <div className='Contact'>
        <h1 className='text-center title'>Contact</h1>
      <div className="all-contant">

          <div className="add-soc">

       <div className="address">
        <h4>Address</h4>
        <hr className='hr-con' />
        <ul>
          <li>Kizhakkekara House, Keralassery, <br /> Palakkad, Kerala - 678641</li>
          
        </ul>
       </div>
       <div className="social">
        <ul>
          <li><InstagramIcon className='icon'/></li>
          <li><FacebookIcon className='icon'/></li>
          <li><GitHubIcon className='icon'/></li>
          <li><WhatsAppIcon className='icon'/></li>
        </ul>
       </div>
       </div> 
       <div className="massage">
  <h4>Massage</h4>
  <hr className='hr-con' />
  <p>Any query? Feel free to ask. I'll reply shortly.</p>
  <div className="grid-container">
    <input type="text" placeholder="name" className="grid-item" />
    <input type="email" placeholder="email" className="grid-item" />
  </div>
    <textarea aria-rowcount="50" placeholder="massage" className="grid-item" />
    <button>Send</button>
</div>

         
       
      </div>

    </div>
  )
}

export default Contact
