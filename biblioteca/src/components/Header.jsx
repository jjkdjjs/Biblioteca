import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importante para mudar de página
import './Header.css';

function Header() {
    const [termo, setTermo] = useState('');
    const navigate = useNavigate();

    const aoPesquisar = (e) => {
        e.preventDefault(); // Impede a página de recarregar
        if (termo.trim()) {
            // Envia o usuário para o catálogo com o parâmetro de busca na URL
            navigate(`/catalogo?busca=${encodeURIComponent(termo)}`);
        }
    };

    return (
        <header>
            <img src="/logo.png" alt="Logo JDL Biblioteca Osvaldo Cruz" className="logo" />
            
            <nav className="nav-container">
                <a href="/" className="nav-link">Início</a>
                <a href="/catalogo" className="nav-link">Catálogo</a>
                <a href="/meus-livros" className="nav-link">Meus Livros</a>
                <a href="/favoritos" className="nav-link">Favoritos</a>
            </nav>

            {/* O formulário agora chama a função aoPesquisar no Submit */}
            <form className="form" onSubmit={aoPesquisar}>
                <button type="submit">
                    <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                        <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                
                <input 
                    className="input" 
                    placeholder="Buscar livros..." 
                    type="text" 
                    value={termo}
                    onChange={(e) => setTermo(e.target.value)}
                />

                <button className="reset" type="reset" onClick={() => setTermo('')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </form>

            <div>
                <a href="/Cadastro">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Perfil" className="icone-perfil" />
                </a>
            </div>
        </header>
    );
}

export default Header;