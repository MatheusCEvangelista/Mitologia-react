import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDeityDetails } from "../services/api";

const DeityDetail = () => {
  const { id } = useParams();
  const [deity, setDeity] = useState(null);

  useEffect(() => {
    const loadDeity = async () => {
      const data = await fetchDeityDetails(id);
      setDeity(data);
    };
    loadDeity();
  }, [id]);

  if (!deity) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{deity.name}</h2>
      <p>{deity.description}</p>
      <p><strong>Símbolo:</strong> {deity.symbol}</p>
    </div>
  );
};

export default DeityDetail;
