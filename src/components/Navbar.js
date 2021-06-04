import React from 'react';
import Logo from "../images/logo.png";
//REACT FONTAWESOME IMPORTS


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Home-sect"><img src={Logo} className="logo" alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <hr color="white"></hr>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link scrollTo" href="#Home-sect">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollTo" href="#About-sect">ABOUT ME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollTo" href="#Skill-sect">SKILLSET</a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollTo" href="#Portfolio-sect">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link scrollTo" href="#Contact-sect">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
