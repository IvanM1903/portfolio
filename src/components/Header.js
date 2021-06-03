import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Iván Martín Prieto</h1>
                <h3>Computer Engineer</h3>
                <Typed 
                    className="typed-text"
                    strings={["Web Design","Cibersecurity","Web Development"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main">Contact Me</a>
            </div>
        </div>
       
    )
}

export default Header
