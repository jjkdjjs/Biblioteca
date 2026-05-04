import './App.css';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Catalogo from './pages/Catalogo';
import Renovar from './pages/Renovar';
import Reservar from './pages/Reservar';
import MeusLivros from './pages/MeusLivros';
import Favoritos from './pages/Favoritos';
import LivroDetalhe from './pages/LivroDetalhe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritosProvider } from './contexts/FavoritosContext';
import { PerfilProvider } from './contexts/PerfilContext';

function App() {
  return (
    <PerfilProvider>
      <FavoritosProvider>
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
              <Route path="/meus-livros" element={<MeusLivros />} />
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/livro/:id" element={<LivroDetalhe />} />
            </Routes>
          </BrowserRouter>
        </div>
      </FavoritosProvider>
    </PerfilProvider>
  );
}

export default App;