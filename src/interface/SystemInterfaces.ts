// src/interface

// Representa un número de lotería
export interface GridItem {
  number: number;
}

// Datos del usuario del formulario
export interface UserData {
  name: string;
  email: string;
  phone: string;
  numeros: number[]; 
  totalCost: number;
}
export interface ReservaResponse {
  id: string;
  mensaje: string;
  fecha: string;
}
