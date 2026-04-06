import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MeusLivros.css';

function MeusLivros() {
  // Simulando dados de livros reservados - em uma aplicação real, isso viria de uma API ou estado global
  const [livrosReservados] = useState([
    {
      id: 1,
      titulo: "Extraordinário",
      autor: "R.J. Palacio",
      categoria: "Ficção",
      imagem: "https://m.media-amazon.com/images/I/6132ndvQdiL.jpg",
      dataReserva: "2024-04-01",
      dataRetirada: null, // null significa não retirado ainda
      prazoDevolucao: "2024-04-15"
    },
    {
      id: 2,
      titulo: "Heartstopper",
      autor: "Alice Oseman",
      categoria: "Romance",
      imagem: "https://m.media-amazon.com/images/I/8129HX+5JGL.jpg",
      dataReserva: "2024-03-28",
      dataRetirada: "2024-03-29", // já foi retirado
      prazoDevolucao: "2024-04-12"
    },
    {
      id: 3,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      categoria: "Clássico",
      imagem: "https://i.pinimg.com/736x/a5/1c/2e/a51c2e9e6bd2f1662c4f07b2a6386be1.jpg",
      dataReserva: "2024-04-02",
      dataRetirada: null,
      prazoDevolucao: "2024-04-16"
    },
    {
      id: 4,
      titulo: "Manual de Assassinato para Boas Garotas",
      autor: "Holly Jackson",
      categoria: "Mistério",
      imagem: "https://i.pinimg.com/1200x/16/af/d7/16afd7ec50df7f3e560e5124f6a5811d.jpg",
      dataReserva: "2024-03-25",
      dataRetirada: "2024-03-26",
      prazoDevolucao: "2024-04-09"
    }
  ]);

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  const calcularDiasRestantes = (prazo) => {
    const hoje = new Date();
    const dataPrazo = new Date(prazo);
    const diffTime = dataPrazo - hoje;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const livrosNaoRetirados = livrosReservados.filter(livro => !livro.dataRetirada);
  const livrosRetirados = livrosReservados.filter(livro => livro.dataRetirada);

  return (
    <div className="meus-livros-container">
      <Header />
      <div className="meus-livros-content">
        <div className="meus-livros-header">
          <h1>Meus Livros</h1>
          <p>Gerencie seus livros reservados e emprestados</p>
        </div>

        <div className="livros-secoes">
          {/* Livros para Retirar */}
          <section className="secao-livros">
            <h2 className="secao-titulo">
              📦 Para Retirar ({livrosNaoRetirados.length})
            </h2>
            {livrosNaoRetirados.length === 0 ? (
              <div className="sem-livros">
                <p>Você não tem livros para retirar no momento.</p>
              </div>
            ) : (
              <div className="livros-grid">
                {livrosNaoRetirados.map(livro => (
                  <div key={livro.id} className="livro-card">
                    <div className="status-indicator nao-retirado">
                      <span>Para Retirar</span>
                    </div>
                    <img src={livro.imagem} alt={livro.titulo} className="livro-image" />
                    
                    <div className="livro-info">
                      <h3>{livro.titulo}</h3>
                      <p className="autor">{livro.autor}</p>
                      <span className="categoria">{livro.categoria}</span>
                      
                      <div className="datas-info">
                        <div className="data-item">
                          <strong>Reservado em:</strong> {formatarData(livro.dataReserva)}
                        </div>
                        <div className="data-item">
                          <strong>Prazo para retirada:</strong> {formatarData(livro.prazoDevolucao)}
                        </div>
                      </div>
                      
                      <button className="btn-retirar">
                        Confirmar Retirada
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Livros Emprestados */}
          <section className="secao-livros">
            <h2 className="secao-titulo">
              📖 Emprestados ({livrosRetirados.length})
            </h2>
            {livrosRetirados.length === 0 ? (
              <div className="sem-livros">
                <p>Você não tem livros emprestados no momento.</p>
              </div>
            ) : (
              <div className="livros-grid">
                {livrosRetirados.map(livro => {
                  const diasRestantes = calcularDiasRestantes(livro.prazoDevolucao);
                  const atrasado = diasRestantes < 0;
                  
                  return (
                    <div key={livro.id} className="livro-card">
                      <div className={`status-indicator ${atrasado ? 'atrasado' : 'emprestado'}`}>
                        <span>{atrasado ? 'Atrasado' : 'Emprestado'}</span>
                      </div>
                      <img src={livro.imagem} alt={livro.titulo} className="livro-image" />
                      
                      <div className="livro-info">
                        <h3>{livro.titulo}</h3>
                        <p className="autor">{livro.autor}</p>
                        <span className="categoria">{livro.categoria}</span>
                        
                        <div className="datas-info">
                          <div className="data-item">
                            <strong>Retirado em:</strong> {formatarData(livro.dataRetirada)}
                          </div>
                          <div className="data-item">
                            <strong>Devolver até:</strong> {formatarData(livro.prazoDevolucao)}
                          </div>
                          <div className={`prazo-status ${atrasado ? 'atrasado' : diasRestantes <= 3 ? 'proximo' : 'ok'}`}>
                            {atrasado ? (
                              <span>⚠️ Atrasado há {Math.abs(diasRestantes)} dia(s)</span>
                            ) : (
                              <span>⏰ {diasRestantes} dia(s) restante(s)</span>
                            )}
                          </div>
                        </div>
                        
                        <button className="btn-devolver">
                          Devolver Livro
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MeusLivros;
