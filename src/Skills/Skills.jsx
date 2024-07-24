import React from 'react'
import "./Skills.css"
import HTML from "./files.png"
import CSS from "./css.png"
import JS from "./js.png"
import JAVA from "./java.png"
import GIT from "./github.png"
import REACT_ICON from "./atom.png"
function Skills() {
  return (
    <div className='Skills'>
        <div className="title">

      <h1 className='text-center title'>Skills</h1>
        </div>


      <div className="skill-contain">
        <div className="frontend">
          <h5>FrontEnd</h5>
  
        <div className="skill">
            
           <p>HTML</p>
       </div>
       <div className="skill">
           
           <p>CSS</p>
       </div>
       <div className="skill">
           
           <p>React JS</p>
       </div>
       <div className="skill">
           
           <p>Bootstrap</p>
       </div>
       <div className="skill">
           
           <p>Figma</p>
       </div>
        </div>
        
      <div className="backend">
    <h5>BackEnd</h5>
        <div className="skill">
 
            <p>Node JS</p>
        </div>
        <div className="skill">
 
            <p>Express JS</p>
        </div>
     
      </div>
      <div className="program-language">
        <h6>Programming Languages</h6>
        <div className="skill">
          
            <p>JavaScript</p>
        </div>
        <div className="skill">
          
            <p>C/C++</p>
        </div>
        <div className="skill">
          
            <p>JAVA</p>
        </div>
        
      </div>
       <div className="version-controll">
        <h6>Version Controller</h6>
        <div className="skill">
           
            <p>Git Hub</p>
        </div>
        <div className="skill">
           
            <p>Git Bucket</p>
        </div>
        

       </div>
       <div className="database">
        
        <h6>Database</h6>
        <div className="skill">
           
            <p>MongoDB</p>
        </div>
        <div className="skill">
           
            <p>Mongoose</p>
        </div>
        
        <div className="skill">
           
            <p>Firebase</p>
        </div>
        

       </div>
      </div>
    </div>
  )
}

export default Skills
