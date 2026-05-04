import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { usePerfil } from '../contexts/PerfilContext';
import './Header.css';

function Header() {
    const [termo, setTermo] = useState('');
    const [foto, setFoto] = useState('/perfil1.png'); 
    const navigate = useNavigate();
    const { usuarioLogado, logout } = usePerfil();

    // 1. Hook para carregar a foto do LocalStorage e atualizar via evento
    useEffect(() => {
        const atualizarInterface = () => {
            const dados = JSON.parse(localStorage.getItem('usuarioLogado'));
            if (dados) {
                // Tenta pegar 'foto' (do cadastro) ou 'fotoPerfil' (do upload no perfil)
                setFoto(dados.foto || dados.fotoPerfil || '/perfil1.png');
            }
        };

        atualizarInterface();

        // Escuta atualizações do Perfil e do Login
        window.addEventListener('storageUpdate', atualizarInterface);
        window.addEventListener('storage', atualizarInterface); // Atualiza entre abas

        return () => {
            window.removeEventListener('storageUpdate', atualizarInterface);
            window.removeEventListener('storage', atualizarInterface);
        };
    }, []);

    const temMulta = usuarioLogado?.multas > 0;

    const aoPesquisar = (e) => {
        e.preventDefault();
        if (termo.trim()) {
            navigate(`/catalogo?busca=${encodeURIComponent(termo)}`);
        }
    };

    return (
        <header className="header-container">
            <div className="header-content">
                {/* Logo */}
                <Link to="/" className="logo-box">
                    <img src="/logo.png" alt="Logo JDL" className="logo-img" />
                </Link>

                {/* Navegação Central */}
                <nav className="nav-menu">
                    <Link to="/" className="nav-item">Início</Link>
                    <Link to="/catalogo" className="nav-item">Catálogo</Link>
                    <Link to="/meus-livros" className="nav-item">Meus Livros</Link>
                    <Link to="/favoritos" className="nav-item">Favoritos</Link>
                </nav>

                {/* Barra de Busca */}
                <form className="search-bar" onSubmit={aoPesquisar}>
                    <input
                        type="text"
                        placeholder="Buscar livros..."
                        value={termo}
                        onChange={(e) => setTermo(e.target.value)}
                    />
                    <button type="submit" className="search-icon">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </form>

                {/* Seção do Usuário */}
                <div className="user-section">
                    {/* Aqui verificamos o usuarioLogado do Context para saber se exibe a foto ou o botão Entrar */}
                    {usuarioLogado ? (
                        <div className="profile-group">
                            <div className="avatar-wrapper">
                                <Link to="/perfil">
                                    <img
                                        src={foto} 
                                        className="user-avatar"
                                        alt="Perfil"
                                    />
                                    {temMulta && <span className="fine-indicator" title="Você possui multas pendentes"></span>}
                                </Link>
                            </div>
                            <button onClick={() => { logout(); navigate('/'); }} className="logout-button">Sair</button>
                        </div>
                    ) : (
                        <Link to="/Login" className="login-button">Entrar</Link>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;