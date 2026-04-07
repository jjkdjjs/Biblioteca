import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MeusLivros.css';

function MeusLivros() {
  const [abaAtiva, setAbaAtiva] = useState('retirar'); // Estado para alternar abas

  const [livrosReservados] = useState([
    {
      id: 1,
      titulo: "Extraordinário",
      autor: "R.J. Palacio",
      categoria: "Ficção",
      imagem: "https://m.media-amazon.com/images/I/6132ndvQdiL.jpg",
      dataReserva: "2024-04-01",
      dataRetirada: null,
      prazoDevolucao: "2026-04-15"
    },
    {
      id: 2,
      titulo: "Heartstopper",
      autor: "Alice Oseman",
      categoria: "Romance",
      imagem: "https://m.media-amazon.com/images/I/8129HX+5JGL.jpg",
      dataReserva: "2024-03-28",
      dataRetirada: "2024-03-29",
      prazoDevolucao: "2024-04-12"
    }
  ]);

  const formatarData = (data) => new Date(data).toLocaleDateString('pt-BR');

  const calcularDiasRestantes = (prazo) => {
    const hoje = new Date();
    const dataPrazo = new Date(prazo);
    const diffTime = dataPrazo - hoje;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const livrosNaoRetirados = livrosReservados.filter(livro => !livro.dataRetirada);
  const livrosRetirados = livrosReservados.filter(livro => livro.dataRetirada);

  return (
    <div className="meus-livros-wrapper">
      <Header />
      
      <main className="meus-livros-content">
        <header className="page-header">
          <h1>Minha Estante</h1>
          <p>Acompanhe suas leituras e prazos na Biblioteca Osvaldo Cruz.</p>
        </header>

        {/* Sistema de Abas para facilitar a navegação */}
        <div className="tab-navigation">
          <button 
            className={`tab-button ${abaAtiva === 'retirar' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('retirar')}
          >
            Reservas para Retirar ({livrosNaoRetirados.length})
          </button>
          <button 
            className={`tab-button ${abaAtiva === 'emprestados' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('emprestados')}
          >
            Livros com Você ({livrosRetirados.length})
          </button>
        </div>

        <div className="secao-container">
          {abaAtiva === 'retirar' ? (
            <div className="livros-grid">
              {livrosNaoRetirados.length > 0 ? (
                livrosNaoRetirados.map(livro => (
                  <div key={livro.id} className="livro-item-card">
                    <img src={livro.imagem} alt={livro.titulo} />
                    <div className="livro-item-detalhes">
                      <span className="badge-status reserva">Pendente</span>
                      <h3>{livro.titulo}</h3>
                      <p className="autor">{livro.autor}</p>
                      <div className="info-data">
                        <span><strong>Reserva:</strong> {formatarData(livro.dataReserva)}</span>
                        <span><strong>Limite Retirada:</strong> {formatarData(livro.prazoDevolucao)}</span>
                      </div>
                      <button className="btn-primario">Confirmar Retirada</button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="vazio-msg">Nenhuma reserva pendente.</p>
              )}
            </div>
          ) : (
            <div className="livros-grid">
              {livrosRetirados.length > 0 ? (
                livrosRetirados.map(livro => {
                  const dias = calcularDiasRestantes(livro.prazoDevolucao);
                  const isAtrasado = dias < 0;
                  return (
                    <div key={livro.id} className={`livro-item-card ${isAtrasado ? 'borda-atraso' : ''}`}>
                      <img src={livro.imagem} alt={livro.titulo} />
                      <div className="livro-item-detalhes">
                        <span className={`badge-status ${isAtrasado ? 'atrasado' : 'em-dia'}`}>
                          {isAtrasado ? 'Em Atraso' : 'Emprestado'}
                        </span>
                        <h3>{livro.titulo}</h3>
                        <p className="autor">{livro.autor}</p>
                        <div className="info-data">
                          <span className={isAtrasado ? 'texto-alerta' : ''}>
                            <strong>Devolução:</strong> {formatarData(livro.prazoDevolucao)}
                          </span>
                          <span className="dias-contagem">
                            {isAtrasado ? `Atrasado ${Math.abs(dias)} dias` : `${dias} dias restantes`}
                          </span>
                        </div>
                        <button className="btn-secundario">Devolver Agora</button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="vazio-msg">Você não possui livros emprestados no momento.</p>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MeusLivros;