// src/components/SpinnerCarga.tsx
import React from 'react';
import '../styles/SpinnerCarga.css';

const SpinnerCarga: React.FC = () => (
  <div className="spinner-overlay">
    <div className="spinner" />
  </div>
);

export default SpinnerCarga;