import axios from 'axios'

const axiosConfig = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
axiosConfig.interceptors.request.use(
    (config: any) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Basic ${token}`;
        }
        return config;
      }
    },
    (error) => Promise.reject(error)
);

export default axiosConfig;