import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from './logo.jpg';

function Navbar() {
  return (
    <div className='Navbar'>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="home" smooth={true} duration={200}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" smooth={true} duration={200}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="skills" smooth={true} duration={200}>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="project" smooth={true} duration={200}>
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} duration={200}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
