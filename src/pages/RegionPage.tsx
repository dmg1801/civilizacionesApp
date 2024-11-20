import React from 'react';
import { useParams, Link } from 'react-router-dom';

const artifactsByRegion = {
  egypt: [
    { id: 'mask', name: 'Máscara de Tutankamón' },
    { id: 'rosetta', name: 'Piedra Rosetta' },
  ],
  greece: [
    { id: 'parthenon', name: 'Partenón' },
    { id: 'venus', name: 'Venus de Milo' },
  ],
  mexico: [
    { id: 'sunstone', name: 'Piedra del Sol' },
    { id: 'quetzalcoatl', name: 'Quetzalcóatl' },
  ],
};

const RegionPage: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const artifacts = artifactsByRegion[regionId as keyof typeof artifactsByRegion] || [];

  return (
    <div>
      <h1>Piezas de {regionId?.toUpperCase()}</h1>
      <ul>
        {artifacts.map((artifact) => (
          <li key={artifact.id}>
            <Link to={`/artifact/${artifact.id}`}>{artifact.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Volver al mapa</Link>
    </div>
  );
};

export default RegionPage;
