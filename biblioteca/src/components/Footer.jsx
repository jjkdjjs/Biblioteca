import React from "react";
import "./Footer.css";

const FOOTER_CONFIG = {
  biblioteca: {
    nome: "Biblioteca JDL",
    descricao: "Promovendo o acesso ao conhecimento e incentivando a leitura para todos da Escola Osvaldo Cruz.",
  },
  links: [
    { label: "Catálogo", href:"/Catalogo" },
    { label: "Meus Livros", href:"/meus-livros" },
    { label: "Favoritos", href:"/Favoritos" },
  ],
  contato: {
    endereco: "R. Carlos Moser, 91 - Centro, Rodeio - SC, 89136-000",
    telefones: "(47) 3399-3067 e (47) 9600-6772",
    email: "18155@sed.sc.gov.br",
    horario: "Terças, Quartas e Quintas: 08h às 21h",
  },
  redes: [
    { nome: "Facebook", url: "https://www.facebook.com", icon: "https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=ffffff" },
    { nome: "Instagram", url: "https://www.instagram.com", icon: "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=ffffff" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { biblioteca, links, contato, redes } = FOOTER_CONFIG;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">{biblioteca.nome}</h2>
          <p className="footer-text">{biblioteca.descricao}</p>
          <div className="footer-socials">
            {redes.map((rede, idx) => (
              <a
                key={idx}
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title={rede.nome}
              >
                <img src={rede.icon} alt={rede.nome} className="footer-social-icon" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3>Links Úteis</h3>
          <ul className="footer-links">
            {links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato & Horário</h3>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <span>{contato.endereco}</span>
            </div>
            <div className="footer-contact-item">
              <span>{contato.telefones}</span>
            </div>
            <div className="footer-contact-item">
              <span>{contato.email}</span>
            </div>
          </div>
          <div className="horario-box">
            <p>{contato.horario}</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} {biblioteca.nome}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;