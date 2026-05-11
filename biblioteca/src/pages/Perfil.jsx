import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Perfil.css';

export default function Perfil() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem('usuarioLogado');
    if (dados) {
      const parsedUser = JSON.parse(dados);
      setUser(parsedUser);
      setTempUser(parsedUser);
    } else {
      navigate('/Login');
    }
  }, [navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500000) {
        alert("A imagem é muito grande! Escolha uma foto de até 500KB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setTempUser({ ...tempUser, foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    try {
      localStorage.setItem('usuarioLogado', JSON.stringify(tempUser));
      const usuariosDB = JSON.parse(localStorage.getItem('usuarios_db') || '[]');
      const novosUsuarios = usuariosDB.map(u => u.email === user.email ? tempUser : u);
      localStorage.setItem('usuarios_db', JSON.stringify(novosUsuarios));
      
      setUser(tempUser);
      window.dispatchEvent(new Event('storageUpdate'));
      setIsEditing(false);
    } catch (error) {
      alert("Erro: O armazenamento está cheio! Tente usar uma foto menor.");
    }
  };

  if (!user) return null;

  return (
    <div className="perfil-page-wrapper">
      <Header />
      <div className="perfil-container">
        <div className="perfil-box">
          <div className="perfil-header">
            <div className="avatar-wrapper">
              <img 
                src={tempUser.foto || '/perfil1.png'} 
                alt="Perfil" 
                className="avatar-img-perfil" 
              />
              {isEditing && (
                <label className="upload-icon">
                  <span>+</span>
                  <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                </label>
              )}
            </div>
            
            {isEditing ? (
              <input 
                className="edit-nome-input"
                value={tempUser.nome || ''} 
                onChange={e => setTempUser({...tempUser, nome: e.target.value})}
              />
            ) : (
              <h1>{user.nome}</h1>
            )}
            <p className="perfil-email-sub">{user.email}</p>
          </div>

          <div className="perfil-content">
            <div className="info-item">
              <label>Nome de Usuário</label>
              {isEditing ? (
                <input 
                  value={tempUser.usuario || ''} 
                  onChange={e => setTempUser({...tempUser, usuario: e.target.value})}
                />
              ) : (
                <p>{user.usuario}</p>
              )}
            </div>

            <div className="info-item">
              <label>Sobre mim</label>
              {isEditing ? (
                <textarea 
                  value={tempUser.bio || ''} 
                  onChange={e => setTempUser({...tempUser, bio: e.target.value})}
                  placeholder="Conte algo sobre você..."
                />
              ) : (
                <p className="bio-text">{user.bio || 'Estudante da Escola Osvaldo Cruz.'}</p>
              )}
            </div>
          </div>

          <div className="perfil-acoes">
            {isEditing ? (
              <>
                <button onClick={handleSave} className="btn-salvar">Gravar Alterações</button>
                <button onClick={() => { setTempUser(user); setIsEditing(false); }} className="btn-cancelar">Descartar</button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)} className="btn-editar">Editar Dados</button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}