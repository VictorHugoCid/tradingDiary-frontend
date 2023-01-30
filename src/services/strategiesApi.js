import api from './api';

export async function getStrategies(token) {
  const response = await api.post('/strategies', {token});
  return response.data;
}

export async function poststrategy(token) {
  const response = await api.post('/strategies', {token});
  return response.data;
}

export async function updatestrategy(token) {
  const response = await api.put('/strategies', {token});
  return response.data;
}

export async function deletestrategy(token) {
  const response = await api.delete('/strategies', {token});
  return response.data;
}
