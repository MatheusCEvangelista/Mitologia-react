import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDeityDetails } from '../services/api';

function DeityDetail() {
  const { id } = useParams();
  const [deity, setDeity] = useState(null);

  useEffect(() => {
    fetchDeityDetails(id)
      .then(data => setDeity(data))
      .catch(err => console.error('Erro ao carregar detalhes:', err));
  }, [id]);

  if (!deity) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{deity.name}</h1>
      <p><strong>Descrição:</strong> {deity.description}</p>
      <p><strong>Dominio:</strong> {deity.domain}</p>
      <p><strong>Família:</strong> {deity.family}</p>
      <img src={deity.imageUrl} alt={deity.name} />
    </div>
  );
}

export default DeityDetail;
