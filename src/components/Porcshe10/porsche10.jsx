import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Html, PerspectiveCamera } from '@react-three/drei';
import './Porsche911Page.css';

// It is a temporary solution for this environment.
const Model = (props) => {
  try {
    const { nodes, materials } = useGLTF('/models/scene10-transformed.glb');
    return (
      <group {...props} dispose={null} scale={1}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Vehicle_Exterior_mm_tyre} position={[-0.925, 0.348, 1.193]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.162, 1.162, 1.162]} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Vehicle_Exterior_mm_rotor} position={[-0.925, 0.348, 1.193]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.162, 1.162, 1.162]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Vehicle_Exterior_mm_misc} position={[-0.925, 0.348, 1.193]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.162, 1.162, 1.162]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Vehicle_Exterior_mm_wheel} position={[-0.925, 0.348, 1.193]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.162, 1.162, 1.162]} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.Vehicle_Exterior_mm_badges} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.Vehicle_Exterior_mm_ext} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.Vehicle_Exterior_mm_lights} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.Vehicle_Exterior_mm_cab} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_54.geometry} material={materials.Vehicle_Exterior_mm_chassis} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_84.geometry} material={materials.Vehicle_Exterior_mm_windows} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    );
  } catch (error) {
    console.error("Failed to load 3D model:", error);
    return null;
  }
};

useGLTF.preload('/models/scene10-transformed.glb');

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
    model: "Porsche 918 Spyder",
    year: "2010",
    mileage: "7,500 mi",
    price: "$105,000"
  };

  // Image gallery
  const carImages = [
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4RDv_H_UmfGZMMZKPhnuGU2AXMgzCu-RViq1sSZQwrvA7K9dEuVP3-FNYsKPt",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT_ox5LlQlfAWRyOGhcMUKgSZ8hIzWmaZL2FTlxqNbwtUFtAc7BdbB6gbjHU7YP",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDx0XWJM13xJez9xah1Kkf0Mk9wbg7_USEwSHekul-40NWbibEm71rAfZYm1h1",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaoZOl_GhNSKJ8SzC9UGGodVS3T6WtrvyLZZ2VO_9zeUTIwGl9yssvOfj0kX5"];

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
    const basePrice = 1050;
    const pricePerInvite = 55;
    const pricePerHour = 108;
    return basePrice + (invites * pricePerInvite) + (duration * pricePerHour);
  };

  return (
    <>
  
      <div className="porsche-page">
        {/* Header */}
        <header className="page-header">
          <h1>Porsche 918 Spyder</h1>
          <p>The plug-in hybrid hypercar that pioneered modern performance and efficiency.</p>
        </header>

        <div className="content-container">
          {/* Left Column - Image Gallery / 3D Model */}
          <div className="image-section">
            <div className="image-display">
              {is360View ? (
                // 3D Model View
                <div 
  className="model-viewer"

  style={{ width: "100%", height: "50vh", backgroundColor: "#FFF" }}

>


                  <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
                    <color attach="background" args={['#FFF']} />
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
                    alt={`Porsche 911 - View ${currentImageIndex + 1}`}
                    className="car-image"
                  />

                  <div className="image-controls">
                    <button onClick={prevImage} className="nav-button">&#10094;</button>
                    <button onClick={nextImage} className="nav-button">&#10095;</button>
                  </div>
                </div>
              )}

              <button onClick={toggle360View} className="view-360-btn">
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
                  <li>: V8 engine + two electric motors, totaling 887 hp</li>
                  <li>Carbon fiber monocoque chassis</li>
                  <li>Adaptive rear wing and air flaps.

</li>
                  <li>Allows for open-top driving.</li>
                  <li>"Top-pipe" exhausts located above the engine.</li>
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
    </>
  );
};

export default App;
