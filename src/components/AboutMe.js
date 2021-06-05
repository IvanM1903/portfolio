import React from "react";
import Linkedin from "../images/linkedin-badge.jpg";
import Empl from "../images/linkedin-employ.jpg";
import Stud from "../images/linkedin-studies.jpg";
const AboutMe = () => {
  return (
    <section className="container-fluid" id="About-sect">
      <div className="row-container">
        <p className="content-aboutme">
          I am <span className="name-aboutme">Iván</span>, a 20 years old student of Bachelor in Computer Science Engineering at Carlos III University of Madrid.
            I am passionate about <span className="interest-aboutme">video games</span> and <span className="interest-aboutme">computers</span>. I consider myself an active person who always
            needs to achieve what he sets out to do. I love <span className="prop-aboutme">learning new things</span> about what I already know in
            terms of programming and I am also very interested in <span className="other-aboutme">cibersecurity</span> field and <span className="other-aboutme">web design</span>.
          </p>
        <div className="social-aboutme">
          <a href="https://www.linkedin.com/in/ivan-m-p/" target="_blank" rel="noreferrer">
            <div className="row linkedin-badge">
              <img className="linkedin-image" src={Linkedin} alt="linkedin-cover"></img>
              <span className="linkedin-name">
                Iván M.P
              </span>
              <div className="linkedin-descr">
                Bachelor in Computer Science Engineering at Carlos III University of Madrid | Cybersecurity enthusiast 👨🏻‍💻
              </div>
              <div className="linkedin-employ">
                <img src={Empl} alt="Linkedin employ"></img>
                <span>Self Employed</span>
              </div>
              <div className="linkedin-studies">
                <img src={Stud} alt="Linkedin studies"></img>
                <span>University of Madrid</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
