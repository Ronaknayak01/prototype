// HeroSection.js
import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Where your music</h1>
        <h1 id='below'>is everything.</h1>
        <p>Develop your fanbase, build your business</p> 
        <p>and create the world around your music.</p>
        <div className="hero-buttons">
          <Link to='/dashboard'><button>Go to Dashboard</button></Link>
          <Link to='/login'><button>Sign In</button></Link>
          <Link to='/signup'><button>Sign Up</button></Link>
          <Link to='/community'><button>Community</button></Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
