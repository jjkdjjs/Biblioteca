import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Reservar.css';

// Nota: Se você usar FontAwesome, substitua os <i> pelas tags da biblioteca
function Reservar() {
  const [busca, setBusca] = useState("");
  const [livrosDisponiveis] = useState([
    { id: 1, titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Ficção", imagem: "https://m.media-amazon.com/images/I/6132ndvQdiL.jpg", posicaoFila: null },
    { id: 2, titulo: "Heartstopper", autor: "Alice Oseman", categoria: "Romance", imagem: "https://m.media-amazon.com/images/I/8129HX+5JGL.jpg", posicaoFila: 3 },
    { id: 3, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Clássico", imagem: "https://i.pinimg.com/736x/a5/1c/2e/a51c2e9e6bd2f1662c4f07b2a6386be1.jpg", posicaoFila: null },
    { id: 4, titulo: "Manual de Assassinato para Boas Garotas", autor: "Holly Jackson", categoria: "Mistério", imagem: "https://i.pinimg.com/1200x/16/af/d7/16afd7ec50df7f3e560e5124f6a5811d.jpg", posicaoFila: null },
    { id: 5, titulo: "Sombra e Ossos", autor: "Leigh Bardugo", categoria: "Fantasia", imagem: "https://i.pinimg.com/736x/80/be/59/80be59ecd08839af3fc7d3916e99ce95.jpg", posicaoFila: 1 },
    { id: 6, titulo: "Os Sete Maridos de Evelyn Hugo", autor: "Taylor Jenkins Reid", categoria: "Drama", imagem: "https://i.pinimg.com/736x/0e/f0/dd/0ef0dd82fbbaf3a27d8f7796cf86003f.jpg", posicaoFila: null }
  ]);

  const [reservados, setReservados] = useState([]);

  const livrosFiltrados = livrosDisponiveis.filter(livro => 
    livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    livro.autor.toLowerCase().includes(busca.toLowerCase())
  );

  const toggleReserva = (livro) => {
    if (reservados.find(l => l.id === livro.id)) {
      setReservados(reservados.filter(l => l.id !== livro.id));
    } else {
      setReservados([...reservados, livro]);
    }
  };

  const confirmarReservas = () => {
    if (reservados.length > 0) {
      alert(`Reserva confirmada! Retire seus livros na biblioteca da Escola Osvaldo Cruz em até 48 horas.`);
      setReservados([]);
    }
  };

  return (
    <div className="reservar-container">
      <Header />
      <div className="reservar-content">
        <div className="reservar-header">
          <span className="instituicao-tag">Biblioteca Escola Osvaldo Cruz</span>
          <h1>Reserva de Acervo</h1>
          <p>Selecione as obras desejadas. O sistema garante sua reserva por 2 dias úteis.</p>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Pesquisar por título ou autor..." 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="reservar-layout">
          <div className="livros-disponibles">
            <div className="section-title-area">
              <h2>Livros Disponíveis</h2>
              <span className="results-count">{livrosFiltrados.length} títulos encontrados</span>
            </div>
            
            <div className="livros-grid">
              {livrosFiltrados.map(livro => (
                <div key={livro.id} 
                     className={`livro-card ${reservados.some(l => l.id === livro.id) ? 'selecionado' : ''}`}
                     onClick={() => toggleReserva(livro)}
                >
                  <img src={livro.imagem} alt={livro.titulo} className="livro-image" />
                  
                  <div className="livro-info">
                    <span className="categoria">{livro.categoria}</span>
                    <h3>{livro.titulo}</h3>
                    <p className="autor">{livro.autor}</p>

                    {livro.posicaoFila && (
                      <div className="posicao-fila"> 
                        <span>{livro.posicaoFila}º na fila de espera</span>
                      </div>
                    )}

                    <button className={`btn-reservar ${reservados.some(l => l.id === livro.id) ? 'ativo' : ''}`}>
                      {reservados.some(l => l.id === livro.id) ? 'Remover Seleção' : 'Selecionar Livro'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="resumo-reservas">
            <div className="resumo-card">
              <h2>Sua Seleção</h2>
              
              {reservados.length === 0 ? (
                <div className="vazio-container">
                  <div className="vazio-icon-placeholder">
                    {/* Ícone de sacola vazia aqui */}
                  </div>
                  <p className="vazio">Nenhum livro selecionado</p>
                  <p className="vazio-sub">Clique nos livros para montar sua reserva escolar.</p>
                </div>
              ) : (
                <>
                  <ul className="lista-selecionados">
                    {reservados.map(livro => (
                      <li key={livro.id} className="item-animado">
                        <div className="item-info-resumo">
                          <strong>{livro.titulo}</strong>
                          <span>{livro.autor}</span>
                        </div>
                        <button className="btn-remover" onClick={(e) => {
                          e.stopPropagation();
                          toggleReserva(livro);
                        }}>
                           {/* Ícone de Lixeira ou X aqui */}
                           <span>×</span>
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="info-regras">
                    <div className="regra-header">
                      {/* Ícone de Informação aqui */}
                      <strong>Regras de Retirada</strong>
                    </div>
                    <ul>
                      <li>Apresente sua carteirinha escolar.</li>
                      <li>Prazo máximo de busca: <strong>48 horas</strong>.</li>
                      <li>Local: Biblioteca da Escola.</li>
                    </ul>
                  </div>

                  <div className="total-selecionados">
                    Total: <strong>{reservados.length}</strong> {reservados.length === 1 ? 'volume' : 'volumes'}
                  </div>

                  <button className="btn-confirmar" onClick={confirmarReservas}>
                    Finalizar Solicitação
                  </button>
                </>
              )}
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reservar;