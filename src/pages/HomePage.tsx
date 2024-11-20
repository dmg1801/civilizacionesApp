import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple, Icon, LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';

// Importar imágenes de íconos
import egyptIconImg from '../assets/icons/egypt.png';
import greeceIconImg from '../assets/icons/greece.png';
import aztecIconImg from '../assets/icons/aztecs.png';
import romeIconImg from '../assets/icons/rome.png';
import japanIconImg from '../assets/icons/japan.png';
import vikigIconImg from '../assets/icons/viking.png';
import incaIconImg from '../assets/icons/inca.png';
import mayaIconImg from '../assets/icons/maya.png';
import rapaNuiIconImg from '../assets/icons/moais.png';

// Crear íconos personalizados
const romeIcon = new Icon({
    iconUrl: romeIconImg,
    iconSize: [30, 30], 
    iconAnchor: [15, 40], 
});

const japanIcon = new Icon({
    iconUrl: japanIconImg,
    iconSize: [30, 30], 
    iconAnchor: [15, 40], 
});

const vikingIcon = new Icon({
    iconUrl: vikigIconImg,
    iconSize: [30, 30], 
    iconAnchor: [15, 40], 
});

const egyptIcon = new Icon({
  iconUrl: egyptIconImg,
  iconSize: [30, 30], 
  iconAnchor: [15, 40], 
});

const greeceIcon = new Icon({
  iconUrl: greeceIconImg,
  iconSize: [30, 30],
  iconAnchor: [15, 40],
});

const aztecIcon = new Icon({
  iconUrl: aztecIconImg,
  iconSize: [30, 30],
  iconAnchor: [15, 40],
});

const incaIcon = new Icon({
    iconUrl: incaIconImg,
    iconSize: [30, 30],
    iconAnchor: [15, 40],
});
  
const mayaIcon = new Icon({
    iconUrl: mayaIconImg,
    iconSize: [30, 30],
    iconAnchor: [15, 40],
});

const rapaNuiIcon = new Icon({
    iconUrl: rapaNuiIconImg,
    iconSize: [30, 30],
    iconAnchor: [15, 40],
});

// Coordenadas de las regiones y sus íconos asociados
const regions: { id: string; name: string; coords: LatLngTuple; icon: Icon }[] = [
  { id: 'egypt', name: 'Egipto', coords: [26.8206, 30.8025], icon: egyptIcon },
  { id: 'greece', name: 'Grecia', coords: [37.0742, 22.8243], icon: greeceIcon },
  { id: 'aztecs', name: 'Aztecas', coords: [10.42847, -100.5528], icon: aztecIcon },
  { id: 'rome', name: 'Roma', coords: [41.8922233, 12.4755719], icon: romeIcon },
  { id: 'japan', name: 'Japón', coords: [35.4804816,137.1299671], icon: japanIcon },
  { id: 'viking', name: 'Vikingos', coords: [59.3038711,9.1913491], icon: vikingIcon },
  { id: 'inca', name: 'Incas', coords: [-13.1631936,-72.547837], icon: incaIcon },
  { id: 'maya', name: 'Mayas', coords: [17.2239752,-89.6548334], icon: mayaIcon },
  { id: 'rapaNui', name: 'Rapa Nui (Isla de Pascua)', coords: [-27.1258031,-109.4212154], icon: rapaNuiIcon },
];

const bounds: LatLngBoundsExpression = [
    [-90, -180], // Suroeste (mínimo)
    [90, 180],   // Noreste (máximo)
  ];
  

const HomePage: React.FC = () => {

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer  center={[20, 0]} // Coordenadas iniciales del mapa
        zoom={2} // Nivel de zoom inicial
        style={{ height: '100%', width: '100%' }}
        maxBounds={bounds} // Establece los límites máximos
        maxBoundsViscosity={1.0} // Controla qué tan cerca puedes llegar al borde antes de que se detenga
        minZoom={2} // Nivel mínimo de zoom permitido
        maxZoom={8} // Nivel máximo de zoom permitido
        >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {regions.map((region) => (
          <Marker key={region.id} position={region.coords} icon={region.icon}>
            <Popup>
                <div style={{ textAlign: 'center' }}>
                    <Link to={`/region/${region.id}`} style={{ display: 'block', marginBottom: '10px' }}>
                    {region.name}
                    </Link>
                    <img
                    src={(region.icon as Icon).options.iconUrl as string}
                    alt={region.name}
                    style={{ width: '150px', height: '150px', borderRadius: '8px' }}
                    />
                </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HomePage;
