import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import SearchBar from './SearchBar';
import MapView from './MapView';
import './App.css';

const App = () =>
{
  const [position, setPosition] = useState([-8.0476, -34.8770]); // Coordenadas iniciais de Recife
  const [zoom, setZoom] = useState(12); // Zoom inicial
  const [markerPosition, setMarkerPosition] = useState(null); // Posição do marcador

  return (
    <div className="app-container">
      <SearchBar setPosition={setPosition} setZoom={setZoom} setMarkerPosition={setMarkerPosition} />
      <div className="profile-icon">
        <FaUserCircle size={32} />
      </div>
      <MapView position={position} zoom={zoom} markerPosition={markerPosition} />
    </div>
  );
};

export default App;
