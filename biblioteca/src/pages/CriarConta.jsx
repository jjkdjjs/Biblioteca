import './CriarConta.css';
import avatar from '../images/perfill.png';

export default function Cadastro() {
  return (
    <div className="container">
      <div className="login-box">

        <h1 className="titulo">Criar Conta</h1>
        <p className="subtitulo">Cadastro na Biblioteca Escolar</p>

        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>

        <div className="input-group">
          <input type="text" placeholder="Nome completo" />
        </div>

        <div className="input-group">
          <input type="text" placeholder="Usuário ou matrícula" />
        </div>

        <div className="input-group">
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Senha" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Confirmar senha" />
        </div>

        <button className="btn">Cadastrar</button>

        <p className="link-login">
          Já tem conta? <a href="/">Entrar</a>
        </p>

      </div>
    </div>
  );
}