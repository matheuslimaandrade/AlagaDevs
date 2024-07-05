import React from 'react';
import { Marker, Circle, Popup } from 'react-leaflet';
import L from 'leaflet';
import cameraIcon from '../assets/camera.png';
import PulseCircle from './PulseCircle';
import '../styles/Camera.css';

const cameraIconImg = new L.Icon({
    iconUrl: cameraIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const getColor = (level) =>
{
    switch (level)
    {
        case 1:
            return 'green';
        case 2:
            return 'yellow';
        case 3:
            return 'red';
        default:
            return 'blue';
    }
};

const Camera = ({ camera }) =>
{
    const { position, level } = camera;

    return (
        <>
            <Marker position={position} icon={cameraIconImg}>
                <Popup>
                    <span>Nível de Chuva: {level}</span>
                </Popup>
            </Marker>
            <Circle
                center={position}
                color={getColor(level)}
                radius={100}
                fillOpacity={0.5}
            />
            <PulseCircle position={position} color={getColor(level)} />
        </>
    );
};

export default Camera;
