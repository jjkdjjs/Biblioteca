import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { usePerfil } from '../contexts/PerfilContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login, usuarioLogado, logout } = usePerfil();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios_db') || '[]');
    
    const user = usuarios.find(u => u.email === email && u.senha === senha);

    if (user) {
      localStorage.setItem('usuarioLogado', JSON.stringify(user));
      
      login(user);
      
      window.dispatchEvent(new Event('storageUpdate'));
      
      navigate('/');
    } else {
      alert('E-mail ou senha incorretos!');
    }
  };

  if (usuarioLogado) {
    return (
      <div className="auth-container">
        <div className="auth-card" style={{ textAlign: 'center', padding: '40px' }}>
          <h2>Você já está logado!</h2>
          <p>Olá, <strong>{usuarioLogado.nome}</strong></p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '25px' }}>
            <button className="btn-primary" onClick={() => navigate('/')}>
              Ir para Início
            </button>
            
            <button 
              className="btn-primary" 
              style={{ backgroundColor: '#2E4A7D' }} 
              onClick={() => navigate('/perfil')}
            >
              Ver meu Perfil
            </button>
            
            <button 
              className="btn-back" 
              onClick={() => {
                logout();
                localStorage.removeItem('usuarioLogado');
                window.dispatchEvent(new Event('storageUpdate'));
              }} 
              style={{ width: '100%', border: '1px solid #ccc', background: 'none', marginTop: '10px' }}
            >
              Sair da Conta
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <button className="btn-back" onClick={() => navigate(-1)}>← Voltar</button>
        </div>
        <div className="auth-content">
          <h1>Login</h1>
          <form className="auth-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label className="input-label">E-mail</label>
              <input 
                className="input-field" 
                type="email" 
                placeholder="seu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                required 
              />
            </div>
            
            <div className="input-group">
              <label className="input-label">Senha</label>
              <input 
                className="input-field" 
                type="password" 
                placeholder="••••••••"
                value={senha}
                onChange={e => setSenha(e.target.value)} 
                required 
              />
            </div>
            
            <button className="btn-primary" type="submit">Entrar</button>
          </form>
          
          <div className="auth-footer">
            <p>Novo por aqui? <Link to="/Cadastro" className="auth-link">Crie uma conta</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}