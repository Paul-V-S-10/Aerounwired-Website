import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return ( <div className="gallery-container">
   <div> <h1 className="heading1">GALLERY</h1>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sigmar+One&display=swap" rel="stylesheet"></link>
    </div>
    <div className="gallery">
        
      <div className="gallery-item">
        <img src="/gallery-images/sample1.jpg" alt="Sample 1" />
      </div>
      <div className="gallery-item">
        <img src="/gallery-images/sample2.jpg" alt="Sample 2" />
      </div>
      <div className="gallery-item">
        <img src="/gallery-images/sample3.jpg" alt="Sample 3" />
      </div>
      <div className="gallery-item">
        <img src="/gallery-images/sample4.jpg" alt="Sample 4" />
      </div>
      <div className="gallery-item">
        <img src="/gallery-images/sample5.jpg" alt="Sample 5" />
      </div>
       <div className="gallery-item">
        <img src="/gallery-images/sample6.jpg" alt="Sample 5" />
      </div>
      <div className="gallery-item">
        <img src="/gallery-images/sample5.jpg" alt="Sample 5" />
      </div>
    </div>
    </div>
  );
};

export default Gallery;

