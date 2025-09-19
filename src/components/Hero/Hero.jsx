import React, { useState } from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Experience Porsche</h1>
          <p>Discover the exceptional performance and timeless design that define every Porsche vehicle. For over 70 years, we've been pushing the boundaries of automotive excellence.</p>
          <button className="cta-button">Explore Models</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Porsche 911" />
        </div>
      </div>
    </section>
  );
};


export default Hero;


