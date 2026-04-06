import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritosContext = createContext();

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos deve ser usado dentro de um FavoritosProvider');
  }
  return context;
};

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  // Carregar favoritos do localStorage ao inicializar
  useEffect(() => {
    const favoritosSalvos = localStorage.getItem('favoritos');
    if (favoritosSalvos) {
      setFavoritos(JSON.parse(favoritosSalvos));
    }
  }, []);

  // Salvar favoritos no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const adicionarFavorito = (livro) => {
    setFavoritos(prev => {
      const jaExiste = prev.find(fav => fav.id === livro.id);
      if (jaExiste) {
        return prev.filter(fav => fav.id !== livro.id);
      } else {
        return [...prev, livro];
      }
    });
  };

  const removerFavorito = (livroId) => {
    setFavoritos(prev => prev.filter(fav => fav.id !== livroId));
  };

  const isFavorito = (livroId) => {
    return favoritos.some(fav => fav.id === livroId);
  };

  const value = {
    favoritos,
    adicionarFavorito,
    removerFavorito,
    isFavorito
  };

  return (
    <FavoritosContext.Provider value={value}>
      {children}
    </FavoritosContext.Provider>
  );
};