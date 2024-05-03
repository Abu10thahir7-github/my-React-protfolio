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
        <div className="skill">
           
            <p>HTML</p>
        </div>
        <div className="skill">
            
            <p>CSS</p>
        </div>
        <div className="skill">
 
            <p>JS</p>
        </div>
     
        <div className="skill">
           
            <p>REACT JS</p>
        </div>
        <div className="skill">
          
            <p>JAVA</p>
        </div>
        <div className="skill">
           
            <p>GIT</p>
        </div>
        
      </div>
    </div>
  )
}

export default Skills
