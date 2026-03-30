import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Cadastro.css';

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setErro('');

    if (!nome || !usuario || !email || !senha || !confirmarSenha) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não conferem.');
      return;
    }

    // Aqui você pode integrar com API de cadastro
    alert('Cadastro realizado com sucesso! Faça login para continuar.');
    navigate('/Login');
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="page-header">
          <button type="button" className="btn-back" onClick={() => navigate(-1)}>
            Voltar
          </button>
        </div>

        <h1 className="titulo">Criar Conta</h1>
        <p className="subtitulo">Cadastro na Biblioteca Escolar</p>

        <div className="avatar">
          <img src="/perfil1.png" alt="Perfil" />
        </div>

        {erro && <p className="erro">{erro}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Usuário ou matrícula"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Confirmar senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>

        <p className="link-login">
          Já tem conta? <Link to="/Login">Entrar</Link>
        </p>

      </div>
    </div>
  );
}