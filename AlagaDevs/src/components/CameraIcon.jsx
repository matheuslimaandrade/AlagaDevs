import React from 'react';
import { FaCamera } from 'react-icons/fa';

const CameraIcon = () =>
{
    return (
        <div className="camera-icon">
            <div className="camera-circle">
                <FaCamera size={24} />
            </div>
        </div>
    );
};

export default CameraIcon;
