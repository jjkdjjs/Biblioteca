import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MeusLivros.css';

function MeusLivros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const salvas = JSON.parse(localStorage.getItem('minhasReservas') || '[]');
    setLivros(salvas);
  }, []);

  const cancelarReserva = (id) => {
    const atualizadas = livros.filter(l => l.id !== id);
    setLivros(atualizadas);
    localStorage.setItem('minhasReservas', JSON.stringify(atualizadas));
  };

  return (
    <div className="meus-livros-wrapper">
      <Header />
      <main className="meus-livros-content">
        <h1>Meus Empréstimos e Reservas</h1>
        <div className="livros-grid">
          {livros.length > 0 ? (
            livros.map((livro) => (
              <div key={livro.id} className="livro-item-card">
                <img src={livro.capa} alt={livro.titulo} />
                <div className="livro-item-detalhes">
                  <h3>{livro.titulo}</h3>
                  <p>Status: <span className="badge-status em-dia">Reservado</span></p>
                  <button className="btn-cancelar" onClick={() => cancelarReserva(livro.id)}>Cancelar Reserva</button>
                </div>
              </div>
            ))
          ) : (
            <p className="vazio-msg">Você ainda não reservou nenhum livro.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MeusLivros;