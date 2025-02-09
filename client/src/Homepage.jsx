import React, { useState } from "react";
import "./Homepage.css";
import logo from "./assets/images.jpg";
import img1 from "./assets/amb1.jpg";
import img2 from "./assets/amb2.jpg";
import img3 from "./assets/amb3.jpg";

function Homepage() {
  const images = [img1, img2, img3]; // Array of images
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // Move to next image on click
  };

  const redirectToHome = () => {
    window.location.href = "/"; // Redirect to homepage
  };

  return (
    <>
      <div className="navbar">
        <div className="logo" onClick={redirectToHome} style={{ cursor: "pointer" }}>
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="image-container" onClick={handleClick}>
          <img src={images[currentImage]} alt="Click to Change" className="dynamic-image" />
          <p>Image {currentImage + 1} of {images.length} — Click to change</p>
        </div>
      </div>
    </>
  );
}

export default Homepage;
