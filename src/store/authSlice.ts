import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { LoginRequest, AuthState } from '../interface/SystemInterfaces';
import { loginUsuario } from '../services/loginService';
import axios from 'axios';
import { obtenerUsuarioDesdeToken } from '../utils/authUtils';



const initialState: AuthState = {
  usuario: obtenerUsuarioDesdeToken(),
  loading: false,
  error: null
};

export const iniciarSesion = createAsyncThunk(
  'auth/iniciarSesion',
  async (datos: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await loginUsuario(datos);
      localStorage.setItem('token', response.token);
      return response;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data?.message || 'Error al iniciar sesión');
      }
      return rejectWithValue('Error desconocido');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    cerrarSesion: (state) => {
      state.usuario = null;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(iniciarSesion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(iniciarSesion.fulfilled, (state) => {
        state.loading = false;
        state.usuario = obtenerUsuarioDesdeToken();
      })
      .addCase(iniciarSesion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { cerrarSesion } = authSlice.actions;
export default authSlice.reducer;