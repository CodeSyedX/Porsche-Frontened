import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Html, PerspectiveCamera } from '@react-three/drei';
import './Porsche911Page.css';

// It is a temporary solution for this environment.
const Model = (props) => {
  try {
    const { nodes, materials } = useGLTF('/models/scene5-transformed.glb');
    return (
      <group {...props} dispose={null} scale={1.0}>
  <mesh geometry={nodes.Object_4.geometry} material={materials.Vehicle_Exterior_mm_tyre} position={[-0.863, 0.321, 1.168]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.083, 1.083, 1.083]} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Vehicle_Exterior_mm_rotor} position={[-0.863, 0.321, 1.168]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.083, 1.083, 1.083]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Vehicle_Exterior_mm_misc} position={[-0.863, 0.321, 1.168]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.083, 1.083, 1.083]} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.Vehicle_Exterior_mm_ext} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.Vehicle_Exterior_mm_cab} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.Vehicle_Exterior_mm_badges} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.Vehicle_Exterior_mm_lights} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_41.geometry} material={materials.Vehicle_Exterior_mm_windows} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_82.geometry} material={materials.Vehicle_Exterior_mm_chassis} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    );
  } catch (error) {
    console.error("Failed to load 3D model:", error);
    return null;
  }
};

useGLTF.preload('/models/scene5-transformed.glb');

const App = () => {
  // State for image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State for 360° view
  const [is360View, setIs360View] = useState(false);

  // State for price calculator
  const [invites, setInvites] = useState(1);
  const [duration, setDuration] = useState(1);

  // Car details
  const carDetails = {
    model: "Porche Taycan",
    year: "2023",
    mileage: "9,500 mi",
    price: "$255,000"
  };

  // Updated Image gallery with new, working links for a black Porsche
  const carImages = [
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsjQ0WjK65eySquprjG7fMbV9mlSavW7081IEkU3r2IvfRm6gIcK4Gp5Fv8joA",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIELqZqhZKZf9uhA3zRu99E6xWI2w6Gb_8F8Faw53MjacQyyZi6HRsYj7pXIMc",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRythWS_LFr8OJR7d-4PD0zGW2OHxwVXhZiBjqn2bofR9zbAi5YdNbwXcQ9s0A0",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWdzbr0vhzDaFV_rpFhx70WGfoA8ydzF406tmGNmxyiZ-KvjpZ9bsPLa2XNwsy"]

  // Handle next/previous image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carImages.length) % carImages.length);
  };

  // Toggle 360 view
  const toggle360View = () => {
    setIs360View(!is360View);
    setCurrentImageIndex(0);
  };

  // Calculate price based on inputs
  const calculatePrice = () => {
    const basePrice = 1020;
    const pricePerInvite = 60;
    const pricePerHour = 110;
    return basePrice + (invites * pricePerInvite) + (duration * pricePerHour);
  };

  return (
    <div className="porsche-page">
      {/* Header */}
      <header className="page-header">
        <h1>Porsche Taycan</h1>
        <p>A timeless blend of raw power and sophisticated design</p>
      </header>

      <div className="content-container">
        {/* Left Column - Image Gallery / 3D Model */}
        <div className="image-section">
          <div className="image-display">
            {is360View ? (
              // 3D Model View
              <div
                className="model-viewer"   style={{ width: "100%", height: "50vh", backgroundColor: "#FFF" }}
              >
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
                  <color attach="background" args={['transparent']} />
                  <ambientLight intensity={1.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0.5} />
                  <pointLight position={[-10, -10, -10]} decay={0.5} />
                  <Suspense fallback={<Html center className="loading-text">Loading 3D model...</Html>}>
                   <Model scale={[30, 30, 30]} /> 
                    <Environment preset="city" />
                  </Suspense>
                  <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                  <OrbitControls
                    makeDefault
                    enableZoom={true}
                    enablePan={false}
                    rotateSpeed={0.4}
                    target={[0, 0, 0]}
                  />
                </Canvas>
              </div>
            ) : (
              // Static Image Gallery
              <div className="image-gallery">
                <img
                  src={carImages[currentImageIndex]}
                  alt={`Porsche 5 - View ${currentImageIndex + 1}`}
                  className="car-image"
                />

                <div className="image-controls">
                  <button onClick={prevImage} className="nav-button">&#10094;</button>
                  <button onClick={nextImage} className="nav-button">&#10095;</button>
                </div>
              </div>
            )}

            <button
              onClick={toggle360View}
              className="view-360-btn"
            >
              {is360View ? 'Exit 360° View' : 'Start 360° View'}
            </button>

            {!is360View && (
              <div className="image-indicators">
                {carImages.map((_, index) => (
                  <span
                    key={index}
                    className={index === currentImageIndex ? 'indicator active' : 'indicator'}
                    onClick={() => setCurrentImageIndex(index)}
                  ></span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Car Details and Calculator */}
        <div className="details-section">
          {/* Car Overview */}
          <div className="car-overview">
            <h2>Vehicle Overview</h2>
            <div className="specs-grid">
              <div className="spec">
                <span className="spec-label">Model</span>
                <span className="spec-value">{carDetails.model}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Year</span>
                <span className="spec-value">{carDetails.year}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Mileage</span>
                <span className="spec-value">{carDetails.mileage}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Price</span>
                <span className="spec-value">{carDetails.price}</span>
              </div>
            </div>

            <div className="features">
              <h3>Key Features</h3>
              <ul>
                <li>800V fast-charging architecture</li>


                <li>Two-speed transmission</li>


                <li>Digital driver's cockpit</li>
                <li>Adaptive air suspension</li>
                <li>High-performance regenerative braking</li>
              </ul>
            </div>
          </div>

          {/* Price Calculator */}
          <div className="price-calculator">
            <h2>Event Pricing Calculator</h2>
            <div className="calculator-form">
              <div className="form-group">
                <label htmlFor="invites">Number of Invites:</label>
                <input
                  type="number"
                  id="invites"
                  min="1"
                  value={invites}
                  onChange={(e) => setInvites(parseInt(e.target.value) || 1)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration of Event (hours):</label>
                <input
                  type="number"
                  id="duration"
                  min="1"
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
                />
              </div>

              <div className="calculation-result">
                <h3>Estimated Cost: ${calculatePrice()}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="page-footer">
        <p>© 2023 Porsche Experience Center. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;