import React, { useState, useEffect } from 'react';
import './Homepage.css';
import img1 from './assets/bg1.jpg';
import img2 from './assets/bg2.jpg';
import img3 from './assets/bg3.jpg';
import img4 from './assets/bg4.jpg';
import img5 from './assets/bg5.jpg';
import img6 from './assets/bg6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          ))}
        </div>
        <div className="carousel-controls">
          <button className="carousel-button" onClick={goToPrevious}>&#8592;</button>
          <button className="carousel-button" onClick={goToNext}>&#8594;</button>
        </div>
      </div>

      {/* Contact Box (Moved outside the carousel) */}
        <br/><br/><br/>
      </div>
  );
};

export default Homepage;