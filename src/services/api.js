import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

const headers = {
  "Content-Type": "application/json"
};

export const getAllDeities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/deities`, { headers });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar deuses:", error);
    return [];
  }
};

export const getDeityById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/deities/${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o deus com id ${id}:`, error);
    return null;
  }
};

// ✅ Aliases para manter compatibilidade com os componentes
export const fetchDeities = getAllDeities;
export const fetchDeityDetails = getDeityById;
