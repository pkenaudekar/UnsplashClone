import axios from 'axios';
const keys = require('../config/keys');
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + ACCESS_KEY,
  },
});
