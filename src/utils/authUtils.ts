// src/utils/authUtils.ts
import {jwtDecode} from 'jwt-decode';
import type { LoginResponse } from '../interface/SystemInterfaces';



export const obtenerUsuarioDesdeToken = (): LoginResponse | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded = jwtDecode<LoginResponse>(token);
    return {
      token,
      nombre: decoded.nombre,
      usuarioId: decoded.usuarioId,
      rol: decoded.rol,
      //email: decoded.Email
    };
  } catch (error) {
    console.error('Error al decodificar token:', error);
    return null;
  }
};
