import React, { createContext, useState, useContext, useEffect } from 'react';

const PerfilContext = createContext();

export function PerfilProvider({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState(() => {
    const salvo = localStorage.getItem('usuarioLogado');
    try {
      return salvo ? JSON.parse(salvo) : null;
    } catch (e) {
      console.error("Erro ao ler dados iniciais:", e);
      return null;
    }
  });

  const login = (dados) => {
    try {
      setUsuarioLogado(dados);
      localStorage.setItem('usuarioLogado', JSON.stringify(dados));
    } catch (e) {
      console.error("Erro: LocalStorage cheio!", e);
      localStorage.clear();
      alert("O espaço de armazenamento do navegador esgotou. Limpamos os dados, tente logar novamente com uma foto menor.");
    }
  };

  const logout = () => {
    setUsuarioLogado(null);
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('usuario_sessao');
  };

  useEffect(() => {
    const sincronizarSessao = () => {
      const dadosAtuais = localStorage.getItem('usuarioLogado');
      if (dadosAtuais) {
        setUsuarioLogado(JSON.parse(dadosAtuais));
      }
    };

    window.addEventListener('storageUpdate', sincronizarSessao);
    window.addEventListener('storage', sincronizarSessao);

    return () => {
      window.removeEventListener('storageUpdate', sincronizarSessao);
      window.removeEventListener('storage', sincronizarSessao);
    };
  }, []);

  return (
    <PerfilContext.Provider value={{ usuarioLogado, login, logout }}>
      {children}
    </PerfilContext.Provider>
  );
}

export const usePerfil = () => {
  const context = useContext(PerfilContext);
  if (!context) {
    throw new Error("usePerfil deve ser usado dentro de um PerfilProvider");
  }
  return context;
};