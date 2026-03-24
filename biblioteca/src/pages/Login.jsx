import { useNavigate } from 'react-router-dom'; // 1. Importar o hook
import './Login.css';
import avatar from '../images/perfill.png';

export default function Login() {
  const navigate = useNavigate(); // 2. Inicializar a função de navegação

  const handleLogin = () => {
    // Aqui você pode adicionar lógica de validação no futuro
    navigate('/Dashboard'); // 3. Nome da rota que você definiu no App.js
  };

  return (
    <div className="container">
      <div className="login-box">

        <h1 className="titulo">Entrar na Conta</h1>

        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>

        <div className="input-group">
          <input type="text" placeholder="Usuário ou email" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Senha" />
        </div>

        <div className="options">
          <label>
            <input type="checkbox" /> Lembrar de mim
          </label>
          <a href="/CriarConta">Criar conta</a>
        </div>

        {/* 4. Adicionar o evento onClick chamando a função */}
        <button className="btn" onClick={handleLogin}>
          Entrar
        </button>

      </div>
    </div>
  );
}