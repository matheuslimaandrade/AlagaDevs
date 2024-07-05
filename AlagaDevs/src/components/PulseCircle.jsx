import React, { useEffect, useState } from 'react';
import { CircleMarker, useMap } from 'react-leaflet';

const PulseCircle = ({ position, color }) =>
{
    const [radius, setRadius] = useState(10);
    const [opacity, setOpacity] = useState(1);

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setRadius((prevRadius) => (prevRadius >= 30 ? 10 : prevRadius + 1));
            setOpacity((prevOpacity) => (prevOpacity <= 0 ? 1 : prevOpacity - 0.03));
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <CircleMarker
            center={position}
            radius={radius}
            fillColor={color}
            color={color}
            opacity={opacity}
            fillOpacity={opacity}
        />
    );
};

export default PulseCircle;
