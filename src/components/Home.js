import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDeities } from '../services/api';

function Home() {
  const [deities, setDeities] = useState([]);

  useEffect(() => {
    fetchDeities()
      .then(data => setDeities(data))
      .catch(err => console.error('Erro ao carregar dados:', err));
  }, []);

  return (
    <div>
      <h1>Deuses da Mitologia Grega</h1>
      <ul>
        {deities.map(deity => (
          <li key={deity.id}>
            <Link to={`/deity/${deity.id}`}>{deity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
