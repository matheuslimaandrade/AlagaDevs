import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Abrigo = ({ abrigo }) =>
{
    const [pessoas, setPessoas] = useState(abrigo.disponivel ? Math.floor(Math.random() * 50) + 1 : 0);

    const disponivel = Math.random() < 0.5;
    const abrigoIcon = new L.DivIcon({
        className: 'custom-div-icon',
        html: `<div style='background-color: ${disponivel ? '#ff6347' : '#000000'}; width:24px; height:24px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: white;'>A</div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 24],
    });

    return (
        <Marker
            position={[abrigo.latitude, abrigo.longitude]}
            icon={abrigoIcon}
        >
            <Popup>
                <h2>{abrigo.tipo}</h2>
                <h3><strong>{disponivel ? 'Disponível' : 'Indisponível'}</strong></h3>
                <p><strong>Endereço:</strong> {abrigo.endereco}</p>
                <p><strong>Bairro:</strong> {abrigo.bairro}</p>
                {disponivel ? (
                    <p>Quantidade de pessoas no abrigo: {pessoas}</p>
                ) : (
                    <p>Este abrigo está atualmente indisponível.</p>
                )}
            </Popup>
        </Marker>
    );
};

export default Abrigo;
