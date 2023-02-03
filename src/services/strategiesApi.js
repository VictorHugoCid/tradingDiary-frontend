import api from './api';

export async function getStrategies(token) {
  const response = await api.get('/strategies', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postStrategy(token, body) {

  const response = await api.post('/strategies', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateStrategy(token) {
  const response = await api.put('/strategies', { token });
  return response.data;
}

export async function deleteStrategy(token) {
  const response = await api.delete('/strategies', { token });
  return response.data;
}
