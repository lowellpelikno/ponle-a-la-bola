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
  numbers: number[]; 
  totalCost: number;
}
export interface ReservaNumeros {  
  numbers: number[]; 
  totalCost: number;
}

export interface Props {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  mensaje?: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  usuarioId: number;
  nombre: string;
  rol: string;
}
export interface AuthState {
  usuario: LoginResponse | null;
  loading: boolean;
  error: string | null;
}
export interface ReservaResponseData {
  idReserva: number;
  usuarioId: number;
  nombreUsuario: string | null;
  costo: number;
  fechaCreadoString: string;
  estadoString: string;
  activo: boolean;
  activoString: string;
  numeros: number[];
}
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  mensaje: string;
  totalCount: number | null;
  validationErrors: string[] | null;
}



