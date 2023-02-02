import api from './api';

export async function getTrades(token, body) {
  console.log(token, body)
  const response = await api.get('/trades', body , {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postTrade(token, body) {
  console.log(token, body)
  const response = await api.post('/trades', body , {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("🚀🚀🚀 ~ file: tradeApi.js:20 ~ postTrade ~ response", response)
  return response.data;
}

export async function updateTrade(token, body) {
  const response = await api.put('/trades', body , {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteTrade(token, body) {
  const response = await api.delete('/trades', body , {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}