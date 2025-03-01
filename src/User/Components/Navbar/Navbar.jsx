import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="nav">
      <a href="index.html">
        <img src="/aero unwired logo white.png" alt="Aero Unwired Logo" />
      </a>
      <div>
        <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
          <li><a className="active" href="index.html">HOME</a></li>
          <li><a href="about.html">ABOUT</a></li>
          <li><a href="events.html">EVENTS</a></li>
          <li><a href="gallery.html">GALLERY</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </div>
      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </div>
  );
};

export default Navbar;
