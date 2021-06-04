import React from "react";
import Me from "../images/me-aboutme.png";

const AboutMe = () => {
    return(
     <div className="container-fluid" id="About-sect">
         <div className="col-12 col-md-6">
            <p className="content-aboutme col-12">
            I am <span className="name-aboutme">Iván</span>, a 20 years old student of Computer Engineering from Carlos III University of Madrid.
            I am passionate about <span className="interest-aboutme">video games</span> and <span className="interest-aboutme">computers</span>. I consider myself an active person who always 
            needs to achieve what he sets out to do. I love <span className="prop-aboutme">learning new things</span> about what I already know in 
            terms of programming and I am also very interested in cibersecurity field and web design.
            </p>
            <div className="picture-container col-12">
              <img className="picture-me" src={Me}></img>
            </div>
         </div>
         <div className="col-12 social-aboutme col-md-6">
            <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="es_ES" data-type="vertical" data-theme="dark" data-vanity="ivan-m-p"><a class="LI-simple-link" href='https://es.linkedin.com/in/ivan-m-p?trk=profile-badge'>Iván M.</a></div>          
         </div>
     </div>   
    )
}

export default AboutMe
