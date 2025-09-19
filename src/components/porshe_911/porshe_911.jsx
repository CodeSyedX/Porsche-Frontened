import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Html, PerspectiveCamera } from '@react-three/drei';
import './Porsche911Page.css';

// It is a temporary solution for this environment.
const Model = (props) => {
  try {
    const { nodes, materials } = useGLTF('/models/scene-transformed.glb');
    return (
      <group {...props} dispose={null} scale={80}>
        <mesh geometry={nodes.Object_9.geometry} material={materials.Porsche_911GT3_2022Grille3A_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Porsche_911GT3_2022Grille4A_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Porsche_911GT3_2022Grille5A_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Porsche_911GT3_2022BadgeA_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Porsche_911GT3_2022Base_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Porsche_911GT3_2022Carbon1_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.Porsche_911GT3_2022Coloured_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.Porsche_911GT3_2022Grille1A_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.Porsche_911GT3_2022Grille2A_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.Porsche_911GT3_2022Grille6A_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.Porsche_911GT3_2022Grille7A_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.Porsche_911GT3_2022InteriorTillingA_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.Porsche_911GT3_2022LightA_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.Porsche_911GT3_2022Paint_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.Porsche_911GT3_2022Window_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.RED_GLASS} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.Porsche_911GT3_2022ManufacturerPlateA_Material} rotation={[0.009, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.Porsche_911GT3_2022Paint_Material} scale={0.01} />
        <mesh geometry={nodes.Object_70.geometry} material={materials.Porsche_911GT3_2022InteriorA_Material} scale={0.01} />
        <mesh geometry={nodes.Object_76.geometry} material={materials.Porsche_911GT3_2022_Wheel1A_3D_3DWheel1A_Material} position={[0.007, 0.003, 0.012]} rotation={[0, 0, 0.017]} scale={0.01} />
        <mesh geometry={nodes.Object_3385.geometry} material={materials.Porsche_911GT3_2022_CallipersCalliperA_Zone_Material} position={[0.007, 0.003, 0.012]} rotation={[0, 0, 0.017]} scale={0.01} />
      </group>
    );
  } catch (error) {
    console.error("Failed to load 3D model:", error);
    return null;
  }
};

useGLTF.preload('/models/scene-transformed.glb');

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
    model: "Porsche 911 Carrera S",
    year: "2023",
    mileage: "8,500 mi",
    price: "$115,000"
  };

  // Image gallery
  const carImages = [
    "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSbzgYu9_gaHePJgJWnn1Pe9X884VlUhY0po2yZFTGD5jb3Mzq1Y_uSNwm6qtBNvdD62TzpDY3LDaPwsS4_7rYRiDvOkUWii6hkYgFGIXLufFAoQxg",
    "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQfTc3wRU_HXjYztb6w9qhNveTlXQoIM0__rdDSfgQqcoMBTtIjazKEhtCNzKXHPavKaallMQLvLg0WSlHxO9eRw0q7R5Up9NXABqdnovxA4EUklB4",
    "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTg8zonqITb2sL2bgtVQGAG66aSaG0Z_huFXruQV7UrHk6dQ7k25RmF3I7C_gwHhAk3_EXqEL7_pt7ILXFRtu9IIc_IZx-XvBcOyn67OPzNB57Y9I0",
    "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS7A93cK5lfeVKRnYdLcZs6P-ICIQnryhg4NXyl4ijdYFov6a7QDug0PtVy1nPsazzpangFzmqhzuWiHjdWkgTuIz34WCu00sebvW4prYLpC6unSLE"
  ];

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
    const basePrice = 1000;
    const pricePerInvite = 50;
    const pricePerHour = 100;
    return basePrice + (invites * pricePerInvite) + (duration * pricePerHour);
  };

  return (
    <>
  
      <div className="porsche-page">
        {/* Header */}
        <header className="page-header">
          <h1>Porsche 911 Carrera S</h1>
          <p>The iconic sports car that defines performance and luxury</p>
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
                  <li>3.0L Twin-Turbocharged Flat-6 Engine</li>
                  <li>443 Horsepower</li>
                  <li>8-Speed PDK Dual-Clutch Transmission</li>
                  <li>Premium Package with Sport Chrono</li>
                  <li>Porsche Active Suspension Management</li>
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
