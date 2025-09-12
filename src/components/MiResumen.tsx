import React, { useEffect, useState } from 'react';
import { obtenerMisReservas } from '../services/reservaService';
import type { ReservaResponseData } from '../interface/SystemInterfaces';
import '../styles/MiResumen.css';

const MiResumen: React.FC = () => {
  const [reservas, setReservas] = useState<ReservaResponseData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarReservas = async () => {
      try {
        const response = await obtenerMisReservas();
        setReservas(response.data);
      } catch (error) {
        console.error('Error al cargar reservas:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarReservas();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (!reservas.length) return <p>No tienes reservas registradas.</p>;

  return (
    <div className="resumen-listado">
      {reservas.map((reserva) => (
        <div key={reserva.idReserva} className="reserva-card">
          <div className="reserva-info">
            <h3>Reserva #{reserva.idReserva}</h3>
            <hr />
              <p>Fecha reserva:</p>
              <span>{reserva.fechaCreadoString}</span>
              <p>Números:</p>
              <span>{reserva.numeros.join(', ')}</span>
          </div>
          <div className="reserva-costo">
            <p>${reserva.costo.toFixed(2)}</p>
            <hr />
            <p>Estado:</p>
            <span>{reserva.estadoString}</span>
          </div>
        </div>
      ))}
</div>
  );
};

export default MiResumen;