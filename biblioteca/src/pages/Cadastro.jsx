import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Cadastro.css';
import { usePerfil } from '../contexts/PerfilContext';

export default function Cadastro() {
  const navigate = useNavigate();
  const { atualizarFotoPerfil } = usePerfil();
  const fileInputRef = useRef(null);

  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState('/perfil1.png');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validar tipo do arquivo
      if (!file.type.startsWith('image/')) {
        setErro('Por favor, selecione apenas arquivos de imagem.');
        return;
      }

      // Validar tamanho (máximo 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErro('A imagem deve ter no máximo 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setFotoPerfil(imageUrl);
        atualizarFotoPerfil(imageUrl);
        setErro('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFotoClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErro('');
    setSucesso('');

    if (!nome || !usuario || !email || !senha || !confirmarSenha) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não conferem.');
      return;
    }

    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Simulação de cadastro bem-sucedido
    setSucesso('Cadastro realizado com sucesso! Redirecionando...');
    setTimeout(() => {
      navigate('/Login');
    }, 2000);
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
            <h1 className="auth-title">Criar Conta</h1>
            <p className="auth-subtitle">Junte-se à Biblioteca Escolar</p>
          </div>

          <div className="profile-upload-section">
            <div className="profile-avatar" onClick={handleFotoClick}>
              <img src={fotoPerfil} alt="Foto de perfil" className="avatar-image" />
              <div className="avatar-overlay">
                <span className="upload-text">Alterar foto</span>
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFotoChange}
              style={{ display: 'none' }}
            />
            <p className="upload-hint">Clique na imagem para alterar sua foto de perfil</p>
          </div>

          {erro && <div className="alert alert-error">{erro}</div>}
          {sucesso && <div className="alert alert-success">{sucesso}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Usuário</label>
                <input
                  type="text"
                  placeholder="Escolha um nome de usuário"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Email</label>
                <input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Senha</label>
                <input
                  type="password"
                  placeholder="Crie uma senha segura"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="input-group">
                <label className="input-label">Confirmar Senha</label>
                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <button className="btn-primary" type="submit">
              Criar Conta
            </button>
          </form>

          <div className="auth-footer">
            <p>Já tem uma conta? <Link to="/Login" className="auth-link">Faça login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}