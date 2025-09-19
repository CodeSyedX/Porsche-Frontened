import React, { useState } from 'react';

const Dashboard = ({ activePage, setActivePage }) => {
  return (
    <nav className="dashboard">
      <div className="dashboard-container">
        <div className="logo">PORSCHE</div>
        <ul className="nav-options">
          <li>
            <button 
              className={activePage === 'home' ? 'active' : ''}
              onClick={() => setActivePage('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={activePage === 'cars' ? 'active' : ''}
              onClick={() => setActivePage('cars')}
            >
              Cars
            </button>
          </li>
          <li>
            <button 
              className={activePage === 'contact' ? 'active' : ''}
              onClick={() => setActivePage('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Dashboard;