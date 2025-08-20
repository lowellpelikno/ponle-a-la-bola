// GridComponent.tsx
import React, { useState } from 'react';
import '../styles/GridComponent.css';

interface GridItem {
  number: number;
}

const initialGrid: GridItem[] = Array.from({ length: 100 }, (_, i) => ({
  number: i + 1
}));

const GridComponent2: React.FC = () => {
  const [gridData, setGridData] = useState<GridItem[]>(initialGrid);
  const [clickedItems, setClickedItems] = useState<GridItem[]>([]);

  const handleClick = (item: GridItem): void => {
    setGridData(prev => prev.filter(cell => cell.number !== item.number));
    setClickedItems(prev => [...prev, item]);
  };
const totalCost = clickedItems.length * 20;

  return (
    <>
    <h2>🆕 Números seleccionados</h2>
        <div className="total-cost">
            <strong>Total:</strong> ${totalCost.toLocaleString()}
        </div>
      <div className="grid-container new-grid">
        {clickedItems.map((item) => (
          <div key={item.number} className="grid-cell clicked">
            <span className="cell-number">{item.number}</span>
          </div>
        ))}
      </div>
      <h2>📦 Numeros disponibles</h2>
      <div className="grid-container original-grid">
        {gridData.map((item) => (
          <div
            key={item.number}
            className="grid-cell"
            onClick={() => handleClick(item)}
          >
            <span className="cell-number">{item.number}</span>
          </div>
        ))}
      </div>

      
    </>
  );
};

export default GridComponent2;