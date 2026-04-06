import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Reservar.css';

function Reservar() {
  const [livrosDisponiveis] = useState([
    {
      id: 1,
      titulo: "Extraordinário",
      autor: "R.J. Palacio",
      categoria: "Ficção",
      imagem: "https://m.media-amazon.com/images/I/6132ndvQdiL.jpg",
      posicaoFila: null
    },
    {
      id: 2,
      titulo: "Heartstopper",
      autor: "Alice Oseman",
      categoria: "Romance",
      imagem: "https://m.media-amazon.com/images/I/8129HX+5JGL.jpg",
      posicaoFila: 3
    },
    {
      id: 3,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      categoria: "Clássico",
      imagem: "https://i.pinimg.com/736x/a5/1c/2e/a51c2e9e6bd2f1662c4f07b2a6386be1.jpg",
      posicaoFila: null
    },
    {
      id: 4,
      titulo: "Manual de Assassinato para Boas Garotas",
      autor: "Holly Jackson",
      categoria: "Mistério",
      imagem: "https://i.pinimg.com/1200x/16/af/d7/16afd7ec50df7f3e560e5124f6a5811d.jpg",
      posicaoFila: null
    },
    {
      id: 5,
      titulo: "Sombra e Ossos",
      autor: "Leigh Bardugo",
      categoria: "Fantasia",
      imagem: "https://i.pinimg.com/736x/80/be/59/80be59ecd08839af3fc7d3916e99ce95.jpg",
      posicaoFila: 1
    },
    {
      id: 6,
      titulo: "Os Sete Maridos de Evelyn Hugo",
      autor: "Taylor Jenkins Reid",
      categoria: "Drama",
      imagem: "https://i.pinimg.com/736x/0e/f0/dd/0ef0dd82fbbaf3a27d8f7796cf86003f.jpg",
      posicaoFila: null
    }
  ]);

  const [reservados, setReservados] = useState([]);

  const toggleReserva = (livro) => {
    if (reservados.find(l => l.id === livro.id)) {
      setReservados(reservados.filter(l => l.id !== livro.id));
    } else {
      setReservados([...reservados, livro]);
    }
  };

  const isReservado = (id) => reservados.some(l => l.id === id);

  const confirmarReservas = () => {
    if (reservados.length > 0) {
      alert(`${reservados.length} livro(s) reservado(s) com sucesso!`);
      setReservados([]);
    }
  };

  return (
    <div className="reservar-container">
      <Header />
      <div className="reservar-content">
        <div className="reservar-header">
          <h1>Reserva de Livros</h1>
          <p>Escolha os livros que deseja reservar na biblioteca</p>
        </div>

        <div className="reservar-layout">
          <div className="livros-disponibles">
            <h2>Livros Disponíveis</h2>
            <div className="livros-grid">
              {livrosDisponiveis.map(livro => (
                <div key={livro.id} className={`livro-card ${isReservado(livro.id) ? 'selecionado' : ''}`}>
                  <img src={livro.imagem} alt={livro.titulo} className="livro-image" />
                  
                  <div className="livro-info">
                    <h3>{livro.titulo}</h3>
                    <p className="autor">{livro.autor}</p>
                    <span className="categoria">{livro.categoria}</span>

                    {livro.posicaoFila && (
                      <div className="posicao-fila">
                        ⏳ {livro.posicaoFila}ª na fila
                      </div>
                    )}

                    <button
                      className={`btn-reservar ${isReservado(livro.id) ? 'ativo' : ''}`}
                      onClick={() => toggleReserva(livro)}
                    >
                      {isReservado(livro.id) ? '✓ Selecionado' : 'Selecionar'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resumo-reservas">
            <div className="resumo-card">
              <h2>Resumo da Reserva</h2>
              
              {reservados.length === 0 ? (
                <p className="vazio">Nenhum livro selecionado</p>
              ) : (
                <>
                  <ul className="lista-selecionados">
                    {reservados.map(livro => (
                      <li key={livro.id}>
                        <span>{livro.titulo}</span>
                        <button
                          className="btn-remover"
                          onClick={() => toggleReserva(livro)}
                          title="Remover da seleção"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="total-selecionados">
                    Total: <strong>{reservados.length}</strong> livro(s)
                  </div>

                  <button className="btn-confirmar" onClick={confirmarReservas}>
                    Confirmar Reservas
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reservar;
