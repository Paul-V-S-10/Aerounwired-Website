import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="dimensions">
      <div class="fontnew">
        <p class="texttitle">CLUB AEROUNWIRED</p>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat+Underline:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </div>
      <a title="Instagram Handle" alt="Link to Instagram Account "href="https://www.instagram.com/club_aerounwired/" target='_blank'><img src="instagram.png" class="instagram"></img></a>
      <a title="Linkedin Profile"alt="Link to Linkedin Profile" href="https://www.linkedin.com/company/aerounwired/" target='_blank'><img src="linkedin.png" class="linkedin"></img></a>
      <a title="YouTube Channel"alt="Link to YouTube Channel" href="https://www.youtube.com/@aerounwirednitc" target='_blank'><img src="youtube.png" class="youtube"></img></a>
      <img class="unilogo" src="nitclogo.png"></img>
      <div class="copy"><p>Copyright © 2024<br></br>All Rights Reserved by Aerounwired</p>
      </div>

      <div class="Location">
        <h2 class="heading">Location</h2>
        <pre class="para"><br></br>National Institute of Technology- Calicut, <br></br>Kozhikode- 673601, <br></br>Kerala, India<hr></hr></pre>
      </div>

      <div class="Contact">
        <h2 class="heading">Contact Us</h2>
        <pre class="para"><br></br>Secretary : Varun Dinachandra <br></br>Phone No. : +91 88619 60236<br></br>Email Us  : <a class="hyper" target="_blank" title="Email Us!" href="https://mail.google.com/mail/?view=cm&fs=1&to=aerounwired@nitc.ac.in">aerounwired@nitc.ac.in</a><hr></hr></pre>
      </div>
    </footer>    
  );
};

export default Footer;
