import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Renovar.css';

function Renovar() {
  const [emprestimos, setEmprestimos] = useState([
    {
      id: 1,
      titulo: "Jogos Vorazes",
      autor: "Suzanne Collins",
      dataVencimento: "2026-04-15",
      renovacoes: 1,
      maxRenovacoes: 3,
      imagem: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      titulo: "Percy Jackson e o Ladrão de Raios",
      autor: "Rick Riordan",
      dataVencimento: "2026-04-20",
      renovacoes: 0,
      maxRenovacoes: 3,
      imagem: "https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg"
    }
  ]);

  const renovarEmprestimo = (id) => {
    setEmprestimos(emprestimos.map(emp => {
      if (emp.id === id && emp.renovacoes < emp.maxRenovacoes) {
        return {
          ...emp,
          renovacoes: emp.renovacoes + 1,
          dataVencimento: new Date(new Date(emp.dataVencimento).getTime() + 14 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0]
        };
      }
      return emp;
    }));
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  return (
    <div className="renovar-container">
      <Header />
      <div className="renovar-content">
        <div className="renovar-header">
          <h1>Renovar Empréstimos</h1>
          <p>Renove seus empréstimos facilmente e estenda o prazo de devolução</p>
        </div>

        {emprestimos.length === 0 ? (
          <div className="no-emprestimos">
            <p>Você não possui empréstimos ativos no momento.</p>
          </div>
        ) : (
          <div className="emprestimos-grid">
            {emprestimos.map(emp => (
              <div key={emp.id} className="emprestimo-card">
                <img src={emp.imagem} alt={emp.titulo} className="emprestimo-image" />
                <div className="emprestimo-info">
                  <h3>{emp.titulo}</h3>
                  <p className="autor">por {emp.autor}</p>
                  
                  <div className="info-detalhe">
                    <span className="label">Vencimento:</span>
                    <span className="valor">{formatarData(emp.dataVencimento)}</span>
                  </div>

                  <div className="info-detalhe">
                    <span className="label">Renovações:</span>
                    <span className="valor">{emp.renovacoes}/{emp.maxRenovacoes}</span>
                  </div>

                  <button
                    className={`btn-renovar ${emp.renovacoes >= emp.maxRenovacoes ? 'desabilitado' : ''}`}
                    onClick={() => renovarEmprestimo(emp.id)}
                    disabled={emp.renovacoes >= emp.maxRenovacoes}
                  >
                    {emp.renovacoes >= emp.maxRenovacoes
                      ? 'Máximo de renovações atingido'
                      : 'Renovar Empréstimo'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Renovar;
