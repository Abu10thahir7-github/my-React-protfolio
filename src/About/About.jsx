import React from "react";
import "./About.css";
import MY from "../Assets/my photo.jpg";
function About() {
  return (
    <div className="About">
      <div className="about-title">
        <h3 className="title">About</h3>
        <hr />
      </div>
      <div className="about-cont">
        <div className="content">
          <div className="img-con">
            <img src={MY} alt="" />
          </div>
          <div className="text">
            <p className="">
              <span>Name</span> : Abu Thahir
            </p>
            <p className="">
              <span>Age</span> : 18
            </p>
            <p className="">
              <span>From</span> : Palakkad, Kerala
            </p>
            <p className="">
              <span>Language</span> : Malayalam
            </p>
            <p className="">
              <span>Freelance</span> : Available
            </p>
            <p className="">
              <span>Phone</span> : 01712345678
            </p>
          </div>
        </div>
        <div className="educa-expe">
          <div className="expe">
            <h3>Experience</h3>
              <hr />
            <div className="expe-1">
              <p>Softroniics Company</p>
              <p>Oct 2023 - Present (6 months)</p>
              <p>Mern Full Stack Intern</p>
            </div>
          </div>
          <div className="educa">
            <h3>Education</h3>
            <hr />
            <div className="educa-1">
              <p>hss keralasseri</p>
              <p>predegree, Business/Commerce, General</p>
              <p>jun 2021 - Apr 2033</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
