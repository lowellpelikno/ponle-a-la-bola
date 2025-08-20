// GridComponent.jsx
//import React from 'react';
import '../styles/GridComponent.css';

const names = [
  "Roel Contreras", "Mateo García", "Rigoberto López", "Eduardo Sánchez", "EL ABUELO",
  "Erick Tapia", "Aldo Rodríguez", "Librado Ventura", "EL BANDA", "Rodrigo Blanco",
  "Manuel Zarate", "Miguel Hernández", "Mónica Ayala", "Jorge Vargas", "Mauricio Tequida",
  "Ivan Félix", "Neto Loera", "Antolín Mendoza", "Jesus Acosta"
];

// Simulamos los 100 nombres (puedes usar tu lógica real aquí)
const gridData = Array.from({ length: 100 }, (_, i) => ({
  number: i + 1,
  name: names[i % names.length] // Repetimos nombres cíclicamente
}));

const GridComponent = () => {
  return (
    <>
    
      <div className="grid-container">
        {gridData.map((item) => (
          <div key={item.number} className="grid-cell">
            <span className="cell-number">{item.number}</span>
          </div>
        ))}
      </div>
    </>
    
  );
};

export default GridComponent;