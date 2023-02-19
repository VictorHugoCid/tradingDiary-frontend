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

export async function updateStrategy(form, token) {
  const response = await api.put('/strategies', form,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteStrategy(id) {
  const response = await api.delete(`/strategies`, {
    params: {
      id,
    },
  });
  return response.data;
}

const strategiesApi = {
  deleteStrategy,
  updateStrategy,
  postStrategy,
  getStrategies,
};

export { strategiesApi };
