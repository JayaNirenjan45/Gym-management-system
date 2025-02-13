import React, { useState } from "react";
import "./Homepage.css";
import img1 from "./assets/bg1.jpg";
import img2 from "./assets/bg2.jpg";
import img3 from "./assets/bg3.jpg";

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