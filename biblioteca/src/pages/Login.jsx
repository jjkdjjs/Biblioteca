import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { usePerfil } from '../contexts/PerfilContext';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const { fotoPerfil, atualizarFotoPerfil } = usePerfil();
  const fileInputRef = useRef(null);

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validações
      if (!file.type.startsWith('image/')) {
        setErro('Por favor, selecione apenas arquivos de imagem.');
        return;
      }

      if (file.size > 5 * 1024 * 1024) { // 5MB
        setErro('A imagem deve ter no máximo 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        atualizarFotoPerfil(e.target.result);
        setErro('');
        setSucesso('Foto de perfil atualizada com sucesso!');
        setTimeout(() => setSucesso(''), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleLogin = () => {
    setErro('');
    setSucesso('');

    if (!usuario || !senha) {
      setErro('Preencha usuário e senha.');
      return;
    }

    // Lógica de autenticação aqui
    setSucesso('Login realizado com sucesso!');
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <button type="button" className="btn-back" onClick={() => navigate(-1)}>
            ← Voltar
          </button>
        </div>

        <div className="auth-form-section">
          <div className="auth-title-section">
            <h1 className="auth-title">Bem-vindo de Volta</h1>
            <p className="auth-subtitle">Entre na sua conta para continuar</p>
          </div>

          <div className="profile-upload-section">
            <div className="profile-avatar" onClick={handleAvatarClick}>
              <img
                src={fotoPerfil || '/perfil1.png'}
                alt="Foto de perfil"
                className="avatar-image"
              />
              <div className="avatar-overlay">
                <span className="upload-text">Alterar Foto</span>
              </div>
            </div>
            <p className="upload-hint">
              Clique na foto para alterar sua imagem de perfil
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFotoChange}
              style={{ display: 'none' }}
            />
          </div>

          {erro && <div className="alert alert-error">{erro}</div>}
          {sucesso && <div className="alert alert-success">{sucesso}</div>}

          <form className="auth-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="input-group">
              <label className="input-label" htmlFor="usuario">Usuário ou Email</label>
              <input
                id="usuario"
                type="text"
                className="input-field"
                placeholder="Digite seu usuário ou email"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                className="input-field"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--cinza-escuro)' }}>
                <input type="checkbox" style={{ margin: 0 }} />
                Lembrar de mim
              </label>
            </div>

            <button type="submit" className="btn-primary">
              Entrar na Conta
            </button>
          </form>

          <div className="auth-footer">
            <p style={{ margin: 0, color: 'var(--cinza-escuro)' }}>
              Não tem uma conta?{' '}
              <Link to="/Cadastro" className="auth-link">
                Criar conta
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}