import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = () => {
    setErro('');

    if (!usuario || !senha) {
      setErro('Preencha usuário e senha.');
      return;
    }

    // Lógica de autenticação aqui
    navigate('/');
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="page-header">
          <button type="button" className="btn-back" onClick={() => navigate(-1)}>
            Voltar
          </button>
        </div>

        <h1 className="titulo">Entrar na Conta</h1>

        <div className="avatar">
          <img src="/perfil1.png" alt="Perfil" />
        </div>

        {erro && <p className="erro">{erro}</p>}

        <div className="input-group">
          <input
            type="text"
            placeholder="Usuário ou email"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
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

        <div className="options">
          <label>
            <input type="checkbox" /> Lembrar de mim
          </label>
          <Link to="/Cadastro">Criar conta</Link>
        </div>

        <button className="btn" onClick={handleLogin}>
          Entrar
        </button>

      </div>
    </div>
  );
}