import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { iniciarSesion } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

import '../styles/Login.css';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(state => state.auth);

  const [email, setEmail] = useState('jesus@gmail.com');
  const [password, setPassword] = useState('Prueba123*');
  const [errors, setErrors] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(iniciarSesion({ email, password }))
    .unwrap()
    .then(() => navigate('/'))
    .catch(err => { setErrors(err); console.error(errors); });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label>Email</label>
          <input placeholder='Introduce un correo valido' type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input placeholder='Contraseña' type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};