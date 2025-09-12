import { useLocation, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { enviarReserva } from '../services/reservaService';
//import type { UserData } from '../interface/SystemInterfaces';
//import { validarFormulario } from '../utils/ValidarFormulario';
import { toast } from 'react-toastify';


import ModalConfirmacion from './ModalConfirmacion';
import SpinnerCarga from './SpinnerCarga';  
import '../styles/UserForm.css';
//import type { ReservaNumeros } from '../interface/SystemInterfaces';

const UserForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!state?.seleccionados || state.seleccionados?.length === 0) {
      navigate('/'); // Ajusta la ruta según tu configuración
    }
    
  }, [state, navigate]);
   const totalCost = (state?.seleccionados?.length || 0) * 20;
   const numbers = (state?.seleccionados || []);
  //const [totalCost, setTotalCost] = useState((state?.seleccionados?.length || 0) * 20);
  /* const [form, setForm] = useState<ReservaNumeros>({
    numbers: state?.seleccionados || [],
    totalCost: (state?.seleccionados?.length || 0) * 20,
  });  */

  const [mostrarModal, setMostrarModal] = useState(false);
  const [cargando, setCargando] = useState(false);

  /* const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //setForm(prev:String => ({ ...prev, [name]: value }));
    setForm({ ...form, [name]: value });
  }; */

  const guardar = async () => {
    /* const errores = validarFormulario(form);
    if (errores.length > 0) {
      errores.forEach(error => toast.error(error));
      return;
    } */
    setMostrarModal(true);
    
  };
const confirmarEnvio = async () => {
  setMostrarModal(false);
  setCargando(true);
  try {
      const resultado = await enviarReserva(numbers);
      console.log('Reserva confirmada:', resultado);
      navigate('/resumen');
    } catch (error) {
      console.error('Error al enviar la reserva:', error);
      toast.error('Hubo un problema al guardar la reserva');
    } finally {
      setCargando(false);
    }

}
  const cancelar = () => {
    navigate('/');
  };

  return (
    <div className="formulario-container">
      <h2>Confirmar reserva</h2>
      <p>Números seleccionados:</p>
      <span className='spanLista'>{numbers.join(', ')}</span>
      <hr/>
       <strong>Total: ${totalCost}</strong>
      <hr/>
      <form>
        {/* <input name="name" required minLength={3} placeholder="Nombre" value={form.name} onChange={handleChange} />
        <input name="email" required type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" required type="tel" pattern="\d{10,}" maxLength={10} title="Debe contener al menos 10 dígitos numéricos" placeholder="Teléfono" value={form.phone} onChange={handleChange} />
         */}
        <div className="botones">
          <button type="button" onClick={guardar}>Guardar</button>{/*  */}
          <button type="button" onClick={cancelar}>Cancelar</button>
        </div>
      </form>
      <ModalConfirmacion
        visible={mostrarModal}
        onConfirm={confirmarEnvio}
        onCancel={() => setMostrarModal(false)}
        mensaje="¿Estás seguro de que deseas guardar esta reserva?"
      />

      {cargando && <SpinnerCarga />}

    </div>
  );
};

export default UserForm;