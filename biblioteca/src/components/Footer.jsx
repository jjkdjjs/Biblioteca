import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Biblioteca JDL</h2>
          <p className="footer-text">
            Promovendo o acesso ao conhecimento e incentivando a leitura para todos da Escola Osvaldo Cruz.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=ffffff" alt="Facebook" className="footer-social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=ffffff" alt="Instagram" className="footer-social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Links Úteis</h3>
          <ul className="footer-links">
            <li><a href="/catalogo">Catálogo</a></li>
            <li><a href="/meuslivros">Meus Livros</a></li>
            <li><a href="/favoritos">Favoritos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <div className="footer-contact-list">
            <p className="footer-contact-item">
              <img src="https://img.icons8.com/?size=100&id=uVHiOKL11CSm&format=png&color=000000" alt="Endereço" className="footer-contact-icon" />
               R. Carlos Moser, 91 - Centro, Rodeio - SC, 89136-000
            </p>
            <p className="footer-contact-item">
              <img src="https://img.icons8.com/?size=100&id=D4xyVOS1pmvV&format=png&color=000000" alt="Telefone" className="footer-contact-icon" />
              (47) 3399-3067 e (47) 9600-6772 
            </p>
            <p className="footer-contact-item">
              <img src="https://img.icons8.com/?size=100&id=X0mEIh0RyDdL&format=png&color=000000" alt="Email" className="footer-contact-icon" />
              18155@sed.sc.gov.br
            </p>
          </div>
          <div className="horario-box">
            <p className="horario-label">Horário de Funcionamento</p>
            <p>Terças, Quartas e Quintas: 08h às 21h</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Biblioteca JDL. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;