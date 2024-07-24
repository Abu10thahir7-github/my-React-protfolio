import React from 'react'
import "./Contact.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
          <li>
            <a href="https://www.instagram.com/_abu.abo/?igsh=MW1mdndseW81MmNidA%3D%3D">

            <InstagramIcon className='icon'/>
            </a>
            </li>
          <li>
            <a href="https://www.facebook.com/abu.abuthahir.37819?bextid=ZbWKwL">

            <FacebookIcon className='icon'/>
            </a>
            </li>
          <li>
            <a href="https://github.com/Abu10thahir7-github">

            <GitHubIcon className='icon'/>
            </a>
            </li>
          <li> <a href="http://api.whatsapp.com/send?phone=+918921966289&text=♥𝑯𝑰_𝑩𝑹𝑶𝑯__🎗">
            <WhatsAppIcon className='icon'/>
            </a>
            </li>
            <li><a href="https://www.linkedin.com/in/abu-thahir-361092298/"><LinkedInIcon className='icon'/></a></li>
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
