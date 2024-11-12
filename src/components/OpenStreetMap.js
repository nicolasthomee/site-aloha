import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const OpenStreetMap = () => {
  const position = [-25.359376907348633, -51.476539611816406]; 

  return (
    <MapContainer 
      center={position} 
      zoom={14} 
      style={{ height: '300px', width: '100%', maxWidth: '600px', margin: '40px auto 0 auto' }} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Estamos aqui!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default OpenStreetMap;
