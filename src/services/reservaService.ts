// src/services/reservaService.ts
import axios from 'axios';
import type { UserData } from '../interface/SystemInterfaces';
import type { ReservaResponse } from '../interface/SystemInterfaces';

const API_URL = 'https://tu-api.com/reservas';

export const enviarReserva = async (datos: UserData): Promise<ReservaResponse> => {
  const response = await axios.post<ReservaResponse>(API_URL, datos, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};