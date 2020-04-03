import axios from 'axios';

const deezerAPI = axios.create({
  baseURL: 'http://localhost:4000'
});

deezerAPI.interceptors.request.use(
  async config => {
    const token = await window.localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  err => Promise.reject(err)
);

export default deezerAPI;
