import { useState } from 'react';
import './Catalogo.css';
import Header from '../components/Header';

export default function Catalogo() {
    const [busca, setBusca] = useState('');
    const [categoria, setCategoria] = useState('Todos');

    const livros = [
        { titulo: 'Dom Casmurro', categoria: 'Romance', capa: '/dom-casmurro.jpg' },
        { titulo: 'Harry Potter', categoria: 'Fantasia', capa: '/harry-potter-pedra.jpg' },
        { titulo: 'Percy Jackson', categoria: 'Fantasia', capa: '/percy-jackson-ladrao.jpg' },
        { titulo: 'O Pequeno Príncipe', categoria: 'Infantil', capa: '/pequeno-principe.jpg' },
        { titulo: 'Senhor dos Anéis', categoria: 'Fantasia', capa: '/senhor-dos-aneis-pt1-sociedade.jpg' },
        { titulo: 'Capitães da Areia', categoria: 'Romance', capa: '/capitaes-da-areia.jpg' }
    ];

    const categorias = ['Todos', 'Romance', 'Fantasia', 'Infantil'];

    const livrosFiltrados = livros.filter((livro) => {
        return (
            (categoria === 'Todos' || livro.categoria === categoria) &&
            livro.titulo.toLowerCase().includes(busca.toLowerCase())
        );
    });

    return (
        <div className="container">
            <Header />
            <div className="catalogo-box">
                <h1 className="titulo">Catálogo de Livros</h1>

                <div className="filtros">
                    <input
                        type="text"
                        placeholder="Buscar livro..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />

                    <select
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        {categorias.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="livros-grid">
                    {livrosFiltrados.map((livro, index) => (
                        <div key={index} className="livro-card">
                            <img
                                src={livro.capa}
                                alt={livro.titulo}
                                onError={(e) => e.target.src = '/capa-padrao.png'}
                            /><h3>{livro.titulo}</h3>
                            <p>{livro.categoria}</p>
                            <button>Reservar</button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}