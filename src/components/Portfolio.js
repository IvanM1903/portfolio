import React from 'react';
import Galaga from "../images/galaga.png";
import web_uni from "../images/web-uc3m.png";
import web_iot from "../images/web-iot.png";
import galaga_0 from "../images/Galaga-0.png";
import galaga_1 from "../images/Galaga-1.png";
import web_0 from "../images/web-0.png";
import web_1 from "../images/web-1.png";
import iot_0 from "../images/iot-0.png";

function Portfolio() {
    return (
        <section id="Portfolio-sect" className="container-fluid">
            <div className="portfolio-container">
                <div className="portfolio-element portfolio-odd">
                    <img className="portfolio-img" src={Galaga} alt="Galaga game" data-bs-toggle="modal" data-bs-target="#staticBackdrop-Galaga"></img>
                    <div className="portfolio-text">
                        <p className="portfolio-title">
                            <span>Galaga Videogame &nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="portfolio-year">2018</span></p>
                        <p className="portfolio-desc">It was my first project. It consists of a recreation of the famous Galaga videogame made in Java using object oriented programming.</p>
                    </div>
                </div>
                <hr></hr>
                <div className="portfolio-element portfolio-even">
                    <img className="portfolio-img" src={web_uni} alt="Website university prototype" data-bs-toggle="modal" data-bs-target="#staticBackdrop-WebSite"></img>
                    <div className="portfolio-text">
                        <p className="portfolio-title">
                            <span>University web site prototype &nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="portfolio-year">2020</span></p>
                        <p className="portfolio-desc">Design of a prototype of a functional role-based university website (student, faculty, administrator) using CSS, Javascript, JQuery and HTML.</p>
                    </div>
                </div>
                <hr></hr>
                <div className="portfolio-element portfolio-odd">
                    <img className="portfolio-img" src={web_iot} alt="IoT platform" data-bs-toggle="modal" data-bs-target="#staticBackdrop-IoT"></img>
                    <div className="portfolio-text">
                        <p className="portfolio-title">
                            <span>IoT platform - GCP &nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="portfolio-year">2021</span></p>
                        <p className="portfolio-desc">The Raspberry Pi had humidity/temperature sensors and a GPS that sent measurements to a message router. There were microservices to manage the requests and a relational database in mariaDB to store the information from different publishers.</p>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop-Galaga" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>
                                This game was my first project. It consists of a recreation of the famous Galaga videogame made in Java using object oriented programming.
                            </p>
                            <p className="modal-img-container">
                                <img src={galaga_0} alt="My Galaga game"></img>
                                <img src={galaga_1} alt="My Galaga game"></img>
                            </p>   
                            <p>
                                Thanks to UC3M for giving us the necessary tools to develop this awesome school project!    
                            </p>                         
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop-WebSite" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                    <div className="modal-body">
                            <p>
                                Design of a prototype of a functional role-based university website (student, faculty, administrator) using CSS, Javascript, JQuery and HTML.
                            </p>
                            <p className="modal-img-container">
                                <img src={web_0} alt="My web prototype"></img>
                                <img src={web_1} alt="My web prototype"></img>
                            </p>   
                            <p>
                                The pictures shown a preview of the mobile version of the web site. 
                            </p>                         
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop-IoT" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-body">
                            <p>
                                The Raspberry Pi had humidity/temperature sensors and a GPS that sent measurements to a message router. There were microservices to manage the requests and a relational database in mariaDB to store the information from different publishers.                            </p>
                            <p>
                                <img className="img-iot" src={iot_0} alt="My iot platform with GCP"></img>
                            </p>   
                            <p>
                                Thanks to UC3M and Google to let us use and get knowledge in this tool as powerful as GCP.  
                            </p>                         
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        
    )
}

export default Portfolio
