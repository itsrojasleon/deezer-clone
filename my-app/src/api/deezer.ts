import axios from 'axios';

export const roslenAPI = axios.create({
  baseURL: 'https://api.deezer.com'
});
