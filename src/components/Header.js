import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <section className="header-wraper container-fluid" id="Home-sect">
            <div className="main-info">
                <div className="info-name-comp">
                    <h1>Iván Martín Prieto</h1>
                    <h3>Computer Engineer</h3>
                </div>
                <div className="info-rest">
                    <Typed
                        className="typed-text"
                        strings={["Web Design", "Cibersecurity", "Web Development"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    <a href="#Contact-sect" className="btn-main">Contact Me</a>
                </div>
            </div>
        </section>

    )
}

export default Header
