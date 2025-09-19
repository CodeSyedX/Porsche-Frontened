import React, { useState } from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Porsche</h3>
          <p>Experience the extraordinary</p>
        </div>
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li>Models</li>
            <li>Services</li>
            <li>Dealers</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Porsche. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;