import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseUrl: process.env.REACT_APP_API
})

api.interceptors.request.use(async (config) => {
  try {
    const token = getToken();
    if (token) {
      config.headers = {
        'x-access-token': `${token}`,
        'Accept': 'application/json',
      }
    }
    return config;
  } catch (err) {
    console.log(err)
  }
});

export default api;
