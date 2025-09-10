import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { enviarReserva, ReservaPayload } from '../services/reservaService';
import '../styles/UserForm.css';

const UserForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const guardar = () => {
    console.log('Datos guardados:', form, state.seleccionados);
    // Aquí podrías enviar los datos a una API
    navigate('/');
  };

  const cancelar = () => {
    navigate('/');
  };

  return (
    <div className="formulario-container">
      <h2>Confirmar reserva</h2>
      <p>Números seleccionados:</p>
      <span className='spanLista'>{state?.seleccionados?.join(', ')}</span>
      <hr/>
      <form>
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} />
        <div className="botones">
          <button type="button" onClick={guardar}>Guardar</button>
          <button type="button" onClick={cancelar}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;