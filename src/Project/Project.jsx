import React from 'react'
import "./Project.css"
import FoodRecipe from "../Assets/Food Recipe .png"
import Calcu from "../Assets/React Calculator.png"
import Weather from "../Assets/React weather App.png"
import BMI from "../Assets/bmi.png"
import  Clock from "../Assets/clock.png"
import  Ecomm from "../Assets/ecommcre.png"
import  Facebook from "../Assets/facebook.png"
import  Landing from "../Assets/reactlanding.png"
import  Star from "../Assets/starbucs.png"
import  Static from "../Assets/staic.png"
function Project() {
  return (
    <div className='project'>
        <div className="text-title">
            <h3 className='text-center title'>See my Works</h3>
        </div>
       <div className="project-contain">
        {/* <div className="proj">
        <a href="link-to-weather-app" target="_blank" rel="">
            <img src={FoodRecipe} alt="" />
            <p>Food Recipe</p>
            </a>
        </div> */}
        {/* <div className="proj">
        <a href="link-to-weather-app" target="_blank" rel="">
            <img src={Calcu} alt="" />
            <p>Calculator</p>
            </a>
        </div> */}
        <div className="proj">
        <a href="https://abus-weatherapp.vercel.app" target="_blank" rel="">
            <img src={Weather} alt="" />
            <p>Weather App</p>
            </a>
        </div>
        {/* <div className="proj">
        <a href="link-to-weather-app" target="_blank" rel="">
            <img src={BMI} alt="" />
            <p>BMI Calculator</p>
            </a>
        </div> */}
        {/* <div className="proj">
        <a href="link-to-weather-app" target="_blank" rel="">
            <img src={Clock} alt="" />
            <p>Clock App</p>
            </a>
        </div> */}
        <div className="proj">
        <a href="https://react-e-commerce-lime.vercel.app" target="_blank" rel="">
            <img src={Ecomm} alt="" />
            <p>Ecommerce App</p>
            </a>
        </div>
        {/* <div className="proj">
        <a href="link-to-weather-app" target="_blank" rel="">
            <img src={Facebook} alt="" />
            <p>FaceBook</p>
            </a>
        </div> */}
        {/* <div className="proj">
        <a href="link-to-weather-app" target="_blank" rel="">
            <img src={Landing} alt="" />
            <p>Landing Page</p>
            </a>
        </div> */}
        <div className="proj">
        <a href="https://landing-page-kohl-kappa.vercel.app/'>" target="_blank" rel="">
            <img src={Star} alt="" />
            <p>Starbucs</p>
            </a>
        </div>
       </div>
       <div className="btn">

       <button>See More</button>
       </div>
    </div>
  )
}

export default Project
