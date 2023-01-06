import axios from 'axios';

export default axios.create({
  baseURL: '/api/',
  // baseURL: 'https://devajuda.com.br/api/',
})