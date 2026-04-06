import React, { createContext, useContext, useState, useEffect } from 'react';

const PerfilContext = createContext();

export const usePerfil = () => {
  const context = useContext(PerfilContext);
  if (!context) {
    throw new Error('usePerfil deve ser usado dentro de um PerfilProvider');
  }
  return context;
};

export const PerfilProvider = ({ children }) => {
  const [fotoPerfil, setFotoPerfil] = useState('/perfil1.png');

  // Carregar foto do perfil do localStorage ao inicializar
  useEffect(() => {
    const fotoSalva = localStorage.getItem('fotoPerfil');
    if (fotoSalva) {
      setFotoPerfil(fotoSalva);
    }
  }, []);

  // Salvar foto do perfil no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('fotoPerfil', fotoPerfil);
  }, [fotoPerfil]);

  const atualizarFotoPerfil = (novaFoto) => {
    setFotoPerfil(novaFoto);
  };

  const value = {
    fotoPerfil,
    atualizarFotoPerfil
  };

  return (
    <PerfilContext.Provider value={value}>
      {children}
    </PerfilContext.Provider>
  );
};