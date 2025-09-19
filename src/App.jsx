// App.js
import React, { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Home from './components/Home page/Home';
import Hero from './components/Hero/Hero' ;
import Contact from './components/Conatct/Contact';
import Car from './components/Car/Car'
import './App.css';


// Dashboard Component


// Hero Component

// Home Page


// Cars Page


// Footer Component


// Main App Component
function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'home':
        return <Home />;
      case 'cars':
        return <Car />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Dashboard activePage={activePage} setActivePage={setActivePage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;