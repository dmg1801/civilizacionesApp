import React from 'react';
import { useParams } from 'react-router-dom';

const artifactDetails = {
  mask: { name: 'Máscara de Tutankamón', description: 'Hecha de oro macizo y piedras preciosas.' },
  rosetta: { name: 'Piedra Rosetta', description: 'Clave para descifrar los jeroglíficos.' },
  parthenon: { name: 'Partenón', description: 'Templo dedicado a Atenea.' },
  sunstone: { name: 'Piedra del Sol', description: 'Calendario azteca monumental.' },
};

const ArtifactPage: React.FC = () => {
  const { artifactId } = useParams<{ artifactId: string }>();
  const artifact = artifactDetails[artifactId as keyof typeof artifactDetails];

  if (!artifact) return <p>Artefacto no encontrado</p>;

  return (
    <div>
      <h1>{artifact.name}</h1>
      <p>{artifact.description}</p>
      <a href="/">Volver al mapa</a>
    </div>
  );
};

export default ArtifactPage;
