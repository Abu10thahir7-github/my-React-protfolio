import React from 'react'
import "./Home.css"
import mainbg from "../Assets/bg2.jpg"
function Home() {
  return (
    <div className='Home'>
        <img src={mainbg} alt="" /> 
        <div className="text">

         <h2 className='animated-text'>I am <span  >Abu Thahir</span></h2>
            <p className='animated-text2' >Full Stack Web Developer</p>
        </div>



     
   

     
    
    </div>
  
  )
}

export default Home
