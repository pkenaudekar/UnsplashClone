import axios from 'axios';
const keys = require('../config/dev');

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${keys.accessKey}`,
  },
});
