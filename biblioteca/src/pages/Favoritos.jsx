import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useFavoritos } from '../contexts/FavoritosContext';
import './Favoritos.css';

function Favoritos() {
  const { favoritos, removerFavorito } = useFavoritos();

  return (
    <div className="favoritos-container">
      <Header />
      <main className="favoritos-content">
        <div className="favoritos-header">
          <h1>Meus Favoritos</h1>
          <p>Livros que você marcou como favoritos</p>
        </div>

        {favoritos.length === 0 ? (
          <div className="sem-favoritos">
            <h2>Você ainda não tem livros favoritos</h2>
            <p>Explore o catálogo e marque seus livros preferidos com </p>
            <Link to="/catalogo" className="btn-explorar">
              Explorar Catálogo
            </Link>
          </div>
        ) : (
          <div className="favoritos-grid">
            {favoritos.map((livro) => (
              <article key={livro.id} className="livro-card">
                <button
                  className="remover-favorito-btn"
                  onClick={() => removerFavorito(livro.id)}
                  title="Remover dos favoritos"
                >
                  ❌
                </button>
                <Link to={`/livro/${livro.id}`}>
                  <img
                    src={livro.capa}
                    alt={livro.titulo}
                    onError={(e) => e.target.src = '/capa-padrao.png'}
                  />
                </Link>
                <div className="livro-info">
                  <h3>{livro.titulo}</h3>
                  <p className="livro-category">{livro.categoria}</p>
                  <p className="livro-author">{livro.autor}</p>
                  <div className="livro-actions">
                    <Link to={`/livro/${livro.id}`} className="detalhes-btn">
                      Ver Detalhes
                    </Link>
                    <Link to="/reservar" className="reservar-btn">
                      Reservar
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Favoritos;
