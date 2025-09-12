import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export const RequireAuth = () => {
  const usuario = useAppSelector(state => state.auth.usuario);
  const token = localStorage.getItem('token');
 console.log('Usuario en RequireAuth:', usuario);
 console.log('Token en RequireAuth:', token);
  if (!usuario || !token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};