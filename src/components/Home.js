import React, { useEffect, useState } from "react";
import { fetchDeities } from "../services/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [deities, setDeities] = useState([]);

  useEffect(() => {
    const loadDeities = async () => {
      const data = await fetchDeities();
      setDeities(data);
    };
    loadDeities();
  }, []);

  return (
    <div>
      <h1>Deuses da Mitologia Grega</h1>
      <ul>
        {deities.map((deity) => (
          <li key={deity.id}>
            <Link to={`/deity/${deity.id}`}>{deity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
