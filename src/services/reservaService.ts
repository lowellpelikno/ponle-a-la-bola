// src/services/reservaService.ts
//import axios from 'axios';
//import type { UserData } from '../interface/SystemInterfaces';
import type { ApiResponse, ReservaResponseData } from '../interface/SystemInterfaces';
import axiosInstance from './Interceptor';

const API_URL = 'https://localhost:7129/api/NumerosReservados';

// FUNCIÓN PARA ENVIAR RESERVA AL BACKEND
export const enviarReserva = async (datos: number): Promise<ApiResponse<ReservaResponseData>> => {
  const dto = { numeros: datos };
  try {
    const response = await axiosInstance.post<ApiResponse<ReservaResponseData>>(API_URL, dto);
    console.log('Reserva enviada:', response.data); // Aquí ves lo que regresa el backend
    return response.data;
  } catch (err) {
    console.error('Error al enviar reserva', err);
    throw err; // Opcional: para que el componente que llama pueda manejar el error
  }
};
// FUNCIÓN PARA TRAER RESERVAS DEL USUARIO ACTUAL DESDE EL BACKEND "misReservas/{id}"
export const obtenerMisReservas = async (): Promise<ApiResponse<ReservaResponseData[]>> => {
  try {
    const response = await axiosInstance.get<ApiResponse<ReservaResponseData[]>>(`${API_URL}/misReservas/${2}`);
    return response.data;
  } catch (err) {
    console.error('Error al obtener reservas del usuario', err);
    throw err;
  }
};
