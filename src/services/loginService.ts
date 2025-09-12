import axios from 'axios';
import type { LoginRequest, LoginResponse } from '../interface/SystemInterfaces';

const API_URL = 'https://localhost:7129/api';

export const loginUsuario = async (datos: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/Auth/login`, datos);
  return response.data;
};