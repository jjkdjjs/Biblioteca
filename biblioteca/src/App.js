import './App.css';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Catalogo from './pages/Catalogo';
import Renovar from './pages/Renovar';
import Reservar from './pages/Reservar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/renovar" element={<Renovar />} />
          <Route path="/reservar" element={<Reservar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;