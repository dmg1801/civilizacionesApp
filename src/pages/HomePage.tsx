import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const HomePage: React.FC = () => {
    const regions: { id: string; name: string; coords: LatLngTuple }[] = [
        { id: 'egypt', name: 'Egipto', coords: [26.8206, 30.8025] },
        { id: 'greece', name: 'Grecia', coords: [39.0742, 21.8243] },
        { id: 'mexico', name: 'México', coords: [23.6345, -102.5528] },
    ];

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {regions.map((region) => (
          <Marker key={region.id} position={region.coords}>
            <Popup>
              <Link to={`/region/${region.id}`}>{region.name}</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HomePage;
