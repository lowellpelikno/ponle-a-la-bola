// GridComponent.jsx
import React, { useState } from 'react';
import '../styles/GridComponent.css';

const names = [
  "Roel Contreras", "Mateo García", "Rigoberto López", "Eduardo Sánchez", "EL ABUELO",
  "Erick Tapia", "Aldo Rodríguez", "Librado Ventura", "EL BANDA", "Rodrigo Blanco",
  "Manuel Zarate", "Miguel Hernández", "Mónica Ayala", "Jorge Vargas", "Mauricio Tequida",
  "Ivan Félix", "Neto Loera", "Antolín Mendoza", "Jesus Acosta"
];

// Generamos los 100 elementos iniciales
const initialGrid = Array.from({ length: 100 }, (_, i) => ({
  number: i + 1,
  name: names[i % names.length]
}));

const GridComponent = () => {
  const [gridData, setGridData] = useState(initialGrid);
  const [clickedItems, setClickedItems] = useState([]);

  const handleClick = (item) => {
    // Eliminar del grid original
    const updatedGrid = gridData.filter((cell) => cell.number !== item.number);
    setGridData(updatedGrid);

    // Agregar al nuevo listado
    setClickedItems([...clickedItems, item]);
  };

  return (
    <>
      <h2>📦 Grid original</h2>
      <div className="grid-container">
        {gridData.map((item) => (
          <div
            key={item.number}
            className="grid-cell"
            onClick={() => handleClick(item)}
          >
            <span className="cell-number">{item.number}</span>
            <span className="cell-name">{item.name}</span>
          </div>
        ))}
      </div>

      <h2>🆕 Nuevos elementos</h2>
      <div className="grid-container new-grid">
        {clickedItems.map((item) => (
          <div key={item.number} className="grid-cell clicked">
            <span className="cell-number">{item.number}</span>
            <span className="cell-name">{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default GridComponent;