import api from './api';

export async function signUp(email, password) {
  console.log('passando no signUp', email, password)
  const response = await api.post('/users/sign-up', { email, password });
  return response.data;
}
//
