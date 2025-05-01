import axios from 'axios';

const API_URL = 'https://www.mythologyapi.com/api/v1';

export const fetchDeities = async () => {
  try {
    const response = await axios.get(`${API_URL}/deities`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar deuses:', error);
    throw error;
  }
};

export const fetchDeityDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/deities/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do deus:', error);
    throw error;
  }
};
