import api from './api';

export async function getTrades(token, userId) {
  console.log(token, userId)
  const response = await api.get('/trades', {token, userId});
  return response.data;
}

export async function postTrade(token) {
  const response = await api.post('/trades', {token});
  return response.data;
}

export async function updateTrade(token) {
  const response = await api.put('/trades', {token});
  return response.data;
}

export async function deleteTrade(token) {
  const response = await api.delete('/trades', {token});
  return response.data;
}