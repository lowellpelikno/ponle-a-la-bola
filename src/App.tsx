import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reserva from './pages/Reserva';

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </div>

  );
}

export default App;