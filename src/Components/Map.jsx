import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Pin from './Pin';

const Map = ({ items }) => {
  if (!Array.isArray(items)) {
    throw new Error('Invalid data format: items must be an array');
  }

  return (
    <div className="w-full h-full">
      <MapContainer center={[44.5, -89.5]} zoom={5} scrollWheelZoom={false} className='w-full h-full'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {items.map(item => (
          <Pin key={item.id} item={item} />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;

