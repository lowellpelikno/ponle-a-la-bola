import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Reserva from './pages/Reserva';
import { ToastContainer } from 'react-toastify';
import MiResumen from './components/MiResumen';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';

import 'react-toastify/dist/ReactToastify.css';





function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/resumen" element={<MiResumen />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer />
    </div>

  );
}

export default App;