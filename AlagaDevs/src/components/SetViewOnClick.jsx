import { useMap } from 'react-leaflet';
import React from 'react';

const SetViewOnClick = ({ position, zoom }) => {
    const map = useMap();
    map.setView(position, zoom);
    return null;
};

export default SetViewOnClick;
