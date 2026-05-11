import { createContext, useState, useContext, useEffect } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => {
    const salvos = localStorage.getItem('meusFavoritos');
    return salvos ? JSON.parse(salvos) : [];
  });

  useEffect(() => {
    localStorage.setItem('meusFavoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const adicionarFavorito = (livro) => {
    if (!favoritos.find(f => f.id === livro.id)) {
      setFavoritos([...favoritos, livro]);
    }
  };

  const removerFavorito = (id) => {
    setFavoritos(favoritos.filter(f => f.id !== id));
  };

  const isFavorito = (id) => favoritos.some(f => f.id === id);

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito, isFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export const useFavoritos = () => useContext(FavoritosContext);