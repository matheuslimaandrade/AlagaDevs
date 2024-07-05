import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Camera from './Camera';
import SetViewOnClick from './SetViewOnClick';
import L from 'leaflet';

const MapView = ({ position, zoom, markerPosition }) =>
{
    const cameras = [
        { id: 1, position: [-8.063, -34.894], level: 1 },
        { id: 2, position: [-8.048, -34.919], level: 2 },
        { id: 3, position: [-8.034, -34.913], level: 3 },
        { id: 4, position: [-8.054, -34.900], level: 1 },
        { id: 5, position: [-8.041, -34.870], level: 2 },
        { id: 6, position: [-8.028, -34.947], level: 3 },
        { id: 7, position: [-8.038, -34.924], level: 1 },
        { id: 8, position: [-8.054, -34.883], level: 2 },
        { id: 9, position: [-8.068, -34.876], level: 3 },
        { id: 10, position: [-8.039, -34.938], level: 1 },
        { id: 11, position: [-8.060, -34.913], level: 2 },
        { id: 12, position: [-8.050, -34.925], level: 3 },
        { id: 13, position: [-8.032, -34.923], level: 1 },
        { id: 14, position: [-8.040, -34.877], level: 2 },
        { id: 15, position: [-8.022, -34.899], level: 3 },
        { id: 16, position: [-8.048, -34.887], level: 1 },
        { id: 17, position: [-8.063, -34.884], level: 2 },
        { id: 18, position: [-8.045, -34.850], level: 3 },
        { id: 19, position: [-8.030, -34.908], level: 1 },
        { id: 20, position: [-8.033, -34.963], level: 2 },
        { id: 21, position: [-8.020, -34.956], level: 3 },
        { id: 23, position: [-8.117, -34.915], level: 2 },   // Zona Sul
        { id: 24, position: [-8.125, -34.910], level: 3 },   // Zona Sul
    ];

    const icon = new L.DivIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#2ecc71; width:24px; height:24px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: white;'>V</div>",
        iconSize: [24, 24],
        iconAnchor: [12, 24]
    });

    return (
        <MapContainer
            center={position}
            zoom={zoom}
            style={{ height: '100vh', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <SetViewOnClick position={position} zoom={zoom} />

            {markerPosition && (
                <Marker position={markerPosition} icon={icon} />
            )}

            {cameras.map((camera) => (
                <Camera key={camera.id} camera={camera} />
            ))}
        </MapContainer>
    );
};

export default MapView;
