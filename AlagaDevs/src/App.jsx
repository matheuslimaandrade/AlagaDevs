import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import SearchBar from './components/SearchBar';
import MapView from './components/MapView';
import './styles/App.css';

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
