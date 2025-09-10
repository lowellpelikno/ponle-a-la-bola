// UserForm.tsx
import React, { useState } from 'react';
import '../styles/UserForm.css';
import type { GridItem } from '../interface/SystemInterfaces';

interface Props {
  onBack: () => void;
  selectedNumbers: GridItem[];
}



const UserForm: React.FC<Props>= ({onBack, selectedNumbers}) => {

    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
        <h2>📝 Números seleccionados:</h2>
        <button onClick={onBack}>← Volver</button>

      <ul>
        {selectedNumbers.map((item, idx) => (
          <li key={idx}>{item.number}</li>
        ))}
      </ul>


    
        <div className="form-wrapper">
        <h2>📝 Ingresa tus datos</h2>
        <form className="form-container" onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            />
            <input
            type="tel"
            name="phone"
            placeholder="Número telefónico"
            value={formData.phone}
            onChange={handleChange}
            required
            />
            <button type="submit">Enviar</button>
        </form>
        </div>
    </>
  );
};

export default UserForm;