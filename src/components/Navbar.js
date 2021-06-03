import React from 'react';
import Logo from "../images/logo.png";
//REACT FONTAWESOME IMPORTS


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={Logo} className="logo" alt="logo..." /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <hr color="white"></hr>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT ME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SKILLSET</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
