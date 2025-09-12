// src/services/Interceptor.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7129/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para incluir el token
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
 console.log('Token en el interceptor:', token);
  if (!token) {
    // Opcional: redirigir al login
    window.location.href = '/login';
    throw new axios.Cancel('No hay Sesion activa');
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;

});

export default axiosInstance;