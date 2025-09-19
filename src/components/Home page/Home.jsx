import React, { useState } from 'react';
import Hero from '../Hero/Hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="features">
        <h2>Why Choose Porsche?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Performance</h3>
            <p>Experience unparalleled acceleration, handling, and driving dynamics.</p>
          </div>
          <div className="feature">
            <h3>Design</h3>
            <p>Timeless aesthetics that blend form and function in perfect harmony.</p>
          </div>
          <div className="feature">
            <h3>Innovation</h3>
            <p>Cutting-edge technology that enhances every aspect of your drive.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;