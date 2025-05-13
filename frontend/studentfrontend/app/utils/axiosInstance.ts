import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request sent:', config);
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response received:', response);
    return response;
  },
  (error) => {
    console.error('Error response:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
