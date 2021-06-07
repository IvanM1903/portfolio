import React from 'react';
import Galaga from "../images/galaga.png";
import web_uni from "../images/web-uc3m.png";
import web_iot from "../images/web-iot.png";
import mirror from "../images/mirror.png";

function Portfolio() {
    return (
        <section id="Portfolio-sect" className="container-fluid">
            <div className="portfolio-container">
                <div className="portfolio-element portfolio-odd">
                    <img className="portfolio-img" src={Galaga} alt="Galaga game"></img>
                    <div className="portfolio-text">
                        <p className="portfolio-title">
                            <span>Galaga Videogame &nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="portfolio-year">2018</span></p>
                        <p className="portfolio-desc">It was my first project. It consists of a recreation of the famous Galaga videogame made in Java using object oriented programming.</p>
                    </div>
                </div>
                <hr></hr>
                <div className="portfolio-element portfolio-even">
                    <img className="portfolio-img" src={web_uni} alt="Website university prototype"></img>
                    <div className="portfolio-text">
                        <p className="portfolio-title">
                            <span>University web site prototype &nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="portfolio-year">2020</span></p>
                        <p className="portfolio-desc">Design of a prototype of a functional role-based university website (student, faculty, administrator) using CSS, Javascript, JQuery and HTML.</p>
                    </div>
                </div>
                <hr></hr>
                <div className="portfolio-element portfolio-odd">
                    <img className="portfolio-img" src={web_iot} alt="IoT platform"></img>
                    <div className="portfolio-text">
                        <p className="portfolio-title">
                            <span>IoT platform - GCP &nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="portfolio-year">2021</span></p>
                        <p className="portfolio-desc">The Raspberry Pi had humidity/temperature sensors and a GPS that sent measurements to a message router. There were microservices to manage the requests and a relational database in mariaDB to store the information from different publishers.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
