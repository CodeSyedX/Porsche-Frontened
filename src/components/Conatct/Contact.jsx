// Contact Page

import React, { useState } from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Our Porsche experts are ready to answer your questions and help you find your dream car.</p>
          <div className="contact-details">
            <p><strong>Address:</strong> Porschestraße 1, 70435 Stuttgart, Germany</p>
            <p><strong>Phone:</strong> +49 711 911-0</p>
            <p><strong>Email:</strong> info@porsche.com</p>
          </div>
        </div>
        <form className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};


export default Contact;