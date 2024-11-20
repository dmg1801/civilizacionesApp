import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';

// Importar imágenes de íconos
import egyptIconImg from '../assets/icons/egypt.png';
import greeceIconImg from '../assets/icons/greece.png';
import mexicoIconImg from '../assets/icons/mexico.png';

// Crear íconos personalizados
const egyptIcon = new Icon({
  iconUrl: egyptIconImg,
  iconSize: [30, 40], // Tamaño del ícono en píxeles
  iconAnchor: [15, 40], // Punto donde se "ancla" el ícono en el marcador
});

const greeceIcon = new Icon({
  iconUrl: greeceIconImg,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

const mexicoIcon = new Icon({
  iconUrl: mexicoIconImg,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
});

// Coordenadas de las regiones y sus íconos asociados
const regions: { id: string; name: string; coords: LatLngTuple; icon: Icon }[] = [
  { id: 'egypt', name: 'Egipto', coords: [26.8206, 30.8025], icon: egyptIcon },
  { id: 'greece', name: 'Grecia', coords: [39.0742, 21.8243], icon: greeceIcon },
  { id: 'mexico', name: 'México', coords: [23.6345, -102.5528], icon: mexicoIcon },
];

const HomePage: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {regions.map((region) => (
          <Marker key={region.id} position={region.coords} icon={region.icon}>
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
