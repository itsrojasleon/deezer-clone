import axios from 'axios';

export const roslenAPI = axios.create({
  baseURL: 'http://localhost:4000'
});
