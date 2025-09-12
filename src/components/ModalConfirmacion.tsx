// src/components/ModalConfirmacion.tsx
import React from 'react';
import type { Props } from '../interface/SystemInterfaces';
import '../styles/ModalConfirmacion.css';



const ModalConfirmacion: React.FC<Props> = ({ visible, onConfirm, onCancel, mensaje }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <p>{mensaje || '¿Deseas confirmar la reserva?'}</p>
        <div className="modal-botones">
          <button onClick={onConfirm}>Sí</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacion;