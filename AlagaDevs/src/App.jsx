import React, { useState } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import SearchBar from './components/SearchBar';
import MapView from './components/MapView';
import CameraIcon from './components/CameraIcon';
import './styles/App.css';

const App = () =>
{
  const [position, setPosition] = useState([-8.0476, -34.8770]); // Coordenadas iniciais de Recife
  const [zoom, setZoom] = useState(12); // Zoom inicial
  const [markerPosition, setMarkerPosition] = useState(null); // Posição do marcador

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="menu-icon">
          <FaBars size={24} />
        </div>
        <div className="profile-icon">
          <FaUserCircle size={32} />
        </div>
      </header>
      <SearchBar setPosition={setPosition} setZoom={setZoom} setMarkerPosition={setMarkerPosition} />
      <MapView position={position} zoom={zoom} markerPosition={markerPosition} />
      <div className="footer">
        <button className="footer-button">Acompanhe seus locais</button>
        <CameraIcon />
      </div>
    </div>
  );
};

export default App;
