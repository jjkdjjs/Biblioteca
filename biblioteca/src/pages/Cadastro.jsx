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
    // Simula salvamento e já loga o usuário
    usuarios.push(formData);
    localStorage.setItem('usuarios_db', JSON.stringify(usuarios));
    login(formData); 
    navigate(-1); // Volta para onde a pessoa estava
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
                  onChange={e => setFormData({...formData, nome: e.target.value})} />
              </div>
              <div className="input-group">
                <label className="input-label">Usuário</label>
                <input className="input-field" placeholder="@usuario" required 
                  onChange={e => setFormData({...formData, usuario: e.target.value})} />
              </div>
            </div>

            <div className="input-group" style={{ marginBottom: '1.5rem' }}>
              <label className="input-label">URL da Foto de Perfil</label>
              <input className="input-field" placeholder="Cole o link de uma imagem" 
                onChange={e => setFormData({...formData, foto: e.target.value})} />
            </div>

            <div className="input-group" style={{ marginBottom: '1.5rem' }}>
              <label className="input-label">E-mail</label>
              <input className="input-field" type="email" placeholder="seu@email.com" required 
                onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>

            <div className="input-group" style={{ marginBottom: '2rem' }}>
              <label className="input-label">Senha</label>
              <input className="input-field" type="password" placeholder="••••••••" required 
                onChange={e => setFormData({...formData, senha: e.target.value})} />
            </div>

            <button className="btn-primary" type="submit">Finalizar Cadastro</button>
          </form>
        </div>
      </div>
    </div>
  );
}