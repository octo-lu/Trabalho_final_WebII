import axios from 'axios';

// Configuração do Axios para a API
const api = axios.create({
  baseURL: 'https://sua-api.com/api', // Substitua pela URL da sua API
});

// Funções para chamadas de API
export const fetchImages = () => api.get('/images');
export const scheduleVisit = (data) => api.post('/schedule', data);
