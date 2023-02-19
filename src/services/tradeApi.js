import api from './api';

export async function getTrades(token, body) {

  const response = await api.get(`/trades`, {
    params: {
      startDate: body.startDate,
      endDate: body.endDate,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  return response.data;
}

export async function postTrade(token, body) {
  console.log('🚀🚀🚀 ~ file: tradeApi.js:14 ~ postTrade ~ token, body', token, body);
  const response = await api.post('/trades', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateTrade(token, body) {
  console.log('🚀🚀🚀 ~ file: tradeApi.js:24 ~ updateTrade ~ token, body', token, body);
  const response = await api.put('/trades', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteTrade(token, body) {
  const response = await api.delete('/trades', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
