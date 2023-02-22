// axios 

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.coinstats.app/public/v1',
});

// interceptor for errors 
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;