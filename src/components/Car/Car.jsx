import React, { useState } from 'react';
import Porsche911Page from '../porshe_911/porshe_911';
import Porsche5Page from '../porshe5/porsche5' // Make sure the import path is correct
import Porsche10Page from '../Porcshe10/porsche10'
const Cars = () => {
  const [show911, setShow911] = useState(false);
   const [showTaycan, setShowTaycan] = useState(false);
   const [shows, setShows] = useState(false);

  const carModels = [
    {
      name: "911",
      description: "The iconic sports car with rear-engine design",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      name: "Taycan",
      description: "All-electric sports sedan with breathtaking performance",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSuZLFTqI5PI2kR6b5etWtn-gmVyImP3RjBW5_UX8SYoRs27rAPXQKxnvKkY1EI",
    },
    {
      name: "Spyder",
      description: "The plug-in hybrid hypercar that pioneered modern performance and efficiency.",
      image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS8y1Ymrfeb2ZrShaT9Cmfye_SjqCswkDbHT4p4VsbpVsgutYXltrAxvaIVsv4ZRzqz3DnV5u51rp0yhtCs55VPZEQcVP0O-3mAmSHpBSYeIcYElqU",
    }
  ];

  const handleLearnMoreClick = (carName) => {
    if (carName === '911') {
      setShow911(true);
    }
     if (carName === 'Taycan') {
      setShowTaycan(true);
    // You can add logic here for other cars
  };
       if (carName === 'Spyder') {
      setShows(true);
    // You can add logic here for other cars
  };

   
    // You can add logic here for other cars
  };

  if (show911) {
    return <Porsche911Page />;
  }

    if (showTaycan) {
    return <Porsche5Page />;
  }
     if (shows) {
    return <Porsche10Page />;
  }

  return (
    <div className="cars-page">
      <h1>Porsche Model Lineup</h1>
      <div className="cars-grid">
        {carModels.map((car, index) => (
          <div key={index} className="car-card">
            <img src={car.image} alt={car.name} />
            <div className="car-info">
              <h3>Porsche {car.name}</h3>
              <p>{car.description}</p>
              <button onClick={() => handleLearnMoreClick(car.name)}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;