import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <img src="/logo.png" alt="Logo JDL Biblioteca Osvaldo Cruz" className="logo" />
            <nav className="nav-container">
                <a href="/" className="nav-link">Início</a>
                <a href="/catalogo" className="nav-link">Catálogo</a>
                <a href="/meus-livros" className="nav-link">Meus Livros</a>
                <a href="/favoritos" className="nav-link">Favoritos</a>
            </nav>

            <form className="form">
                <button>
                    <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                        <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <input className="input" placeholder="Buscar livros..." required="" type="text" />
                <button className="reset" type="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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