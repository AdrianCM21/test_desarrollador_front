import axios from 'axios';

export const axiosGlobal = axios.create({
  baseURL: 'https://tu-api-aqui.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

