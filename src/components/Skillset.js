import React from 'react';
import logoPack from "../images/web-pack.png";
import logoPy from "../images/python.png";
import logoC from "../images/c-programming.png";
import logoCPlus from "../images/cplus.png";
import logoJava from "../images/java.png";
import logoSql from "../images/sql.png";

function Skillset() {
    return (
        <section id="Skill-sect" className="container-fluid">
            <div className="skillset-container">
                <div className="card">
                    <img src={logoPack} className="card-img-top card-webpack" alt="WebPack logo"></img>
                    <div className="card-body">
                        <h5 className="card-title">HTML - JavaScript - CSS</h5>
                        <p className="card-text">Web design and development</p>
                    </div>
                </div>
                <div className="card">
                    <img src={logoPy} className="card-img-top card-python" alt="Python logo"></img>                    
                    <div className="card-body">
                        <h5 className="card-title">Python</h5>
                        <p className="card-text">Web applications and AI</p>
                    </div>
                </div>
                <div className="card">
                    <img src={logoC} className="card-img-top card-c" alt="C logo"></img>                    
                    <div className="card-body">
                        <h5 className="card-title">C Language</h5>
                        <p className="card-text">Desktop and network applications</p>
                    </div>
                </div>
                <div className="card">
                    <img src={logoCPlus} className="card-img-top card-cplus" alt="C++ logo"></img>
                    <div className="card-body">
                        <h5 className="card-title">C++ Language</h5>
                        <p className="card-text">Desktop applications</p>
                    </div>
                </div>
                <div className="card">
                    <img src={logoJava} className="card-img-top card-java" alt="Java logo"></img>                    
                    <div className="card-body">
                        <h5 className="card-title">Java Language</h5>
                        <p className="card-text">Desktop applications </p>
                    </div>
                </div>
                <div className="card">
                    <img src={logoSql} className="card-img-top card-sql" alt="SQL logo"></img>                    
                    <div className="card-body">
                        <h5 className="card-title">SQL Language</h5>
                        <p className="card-text">Relational databases</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

/*
<div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                        </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>      
                </div>

*/


export default Skillset
