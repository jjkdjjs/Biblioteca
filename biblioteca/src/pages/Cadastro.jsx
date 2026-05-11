import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { usePerfil } from '../contexts/PerfilContext';
import './Cadastro.css';

export default function Cadastro() {
  const navigate = useNavigate();
  const { login } = usePerfil();
  const [formData, setFormData] = useState({
    nome: '', usuario: '', email: '', senha: '', foto: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem('usuarios_db') || '[]');
    usuarios.push(formData);
    localStorage.setItem('usuarios_db', JSON.stringify(usuarios));
    login(formData);
    navigate(-1);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <button className="btn-back" onClick={() => navigate(-1)}>← Voltar</button>
        </div>
        <div className="auth-content">
          <h1>Criar Conta</h1>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <label className="input-label">Nome</label>
                <input className="input-field" placeholder="Nome completo" required 
                  value={formData.nome}
                  onChange={e => setFormData({...formData, nome: e.target.value})} />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Usuário</label>
              <input className="input-field" placeholder="@usuario" required 
                value={formData.usuario}
                onChange={e => setFormData({...formData, usuario: e.target.value})} />
            </div>

            <div className="input-group">
              <label className="input-label">URL da Foto de Perfil</label>
              <input className="input-field" placeholder="Cole o link de uma imagem" 
                value={formData.foto}
                onChange={e => setFormData({...formData, foto: e.target.value})} />
            </div>

            <div className="input-group">
              <label className="input-label">E-mail</label>
              <input className="input-field" type="email" placeholder="seu@email.com" required 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>

            <div className="input-group">
              <label className="input-label">Senha</label>
              <input className="input-field" type="password" placeholder="••••••••" required 
                value={formData.senha}
                onChange={e => setFormData({...formData, senha: e.target.value})} />
            </div>

            <button className="btn-primary" type="submit">Finalizar Cadastro</button>
          </form>
        </div>
      </div>
    </div>
  );
}