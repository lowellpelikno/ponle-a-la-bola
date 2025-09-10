import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';

import '../styles/GridComponent.css';

const GridComponent = () => {
  const [numeros, setNumeros] = useState<number[]>(Array.from({ length: 100 }, (_, i) => i));
  const [seleccionados, setSeleccionados] = useState<number[]>([]);
  const navigate = useNavigate();

  const seleccionarNumero = (num: number) => {
    setNumeros(numeros.filter(n => n !== num));
    setSeleccionados([...seleccionados, num]);
  };

  const costoTotal = seleccionados.length * 20;

  const apartar = () => {
    navigate('/reserva', { state: { seleccionados } });
  };
 const quitarNumero = (num: number) => {
    setNumeros([...numeros, num].sort((a, b) => a - b));
    setSeleccionados(seleccionados.filter(n => n !== num));
  };

  function buscarNumero(value: string): void {
    if (value.trim() === "") {
      setNumeros(Array.from({ length: 100 }, (_, i) => i).filter(num =>
      num.toString().padStart(2, '0').includes(value.trim())).filter(num => !seleccionados.includes(num)));
      return;
    }
    const filtered = Array.from({ length: 100 }, (_, i) => i).filter(num =>
      num.toString().padStart(2, '0').includes(value.trim())
    );
    // Remove already selected numbers from the filtered list
    setNumeros(filtered.filter(num => !seleccionados.includes(num)));
  }

  return (
    <div className="grid-container">
    <h2 className="grid-title">Selecciona tus números</h2>
    <p>Buscar numero <input type="text" onChange={e => buscarNumero(e.target.value)} /> </p>
    <div className="grid-numeros">
      {numeros.map(num => (
        <button key={num} className="numero-btn" onClick={() => seleccionarNumero(num)}>
          {num === 0 ? '00' : num.toString().padStart(2, '0')}
        </button>
      ))}
    </div>

  <div className="resumen">
    <p className="resumen-texto">Números seleccionados: <strong>${costoTotal}</strong></p>

    <ul className="lista-seleccionados">
      {seleccionados.map(num => (
        <li key={num} className="item-seleccionado">
          <span>{num}</span>
          <FaTimesCircle
            onClick={() => quitarNumero(num)}
            className="icono-quitar"
            title="Quitar"
          />
        </li>
      ))}
    </ul>

    <button className="btn-apartar" onClick={apartar} disabled={seleccionados.length === 0}>
      Apartar números
    </button>
  </div>
</div>
  );
};

export default GridComponent;