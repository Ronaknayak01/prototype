// HeroSection.js
import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Where your music is everything</h1>
        <p>Develop your fanbase, build your business, and create the world around your music.</p>
        <div className="hero-buttons">
          <Link to='/dashboard'><button>Go to Dashboard</button></Link>
          <button>Connect with fans</button>
          <button>Grow your business</button>
          <button>Understand your audience</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
