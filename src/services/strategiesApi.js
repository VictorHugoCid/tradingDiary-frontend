import api from './api';

export async function getStrategies(token) {
  const response = await api.post('/strategies', {token});
  return response.data;
}
//
