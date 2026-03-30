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
        <div className="catalogo-page">
            <Header />
            <main className="catalogo-content">
                <section className="catalogo-panel">
                <h1 className="catalogo-title">Catálogo de Livros</h1>
                <p className="catalogo-intro">
                    Busque pelo título ou selecione uma categoria para encontrar o livro certo. É rápido e intuitivo.
                </p>

                <div className="catalogo-filters">
                    <label className="catalogo-field">
                        <span>Buscar livro</span>
                        <input
                            type="text"
                            placeholder="Digite o nome do livro"
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                    </label>

                    <label className="catalogo-field">
                        <span>Categoria</span>
                        <select
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            {categorias.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="livros-grid">
                    {livrosFiltrados.map((livro, index) => (
                        <article key={index} className="livro-card">
                            <img
                                src={livro.capa}
                                alt={livro.titulo}
                                onError={(e) => e.target.src = '/capa-padrao.png'}
                            />
                            <div className="livro-info">
                                <h3>{livro.titulo}</h3>
                                <p className="livro-category">{livro.categoria}</p>
                                <button className="livro-btn">Reservar</button>
                            </div>
                        </article>
                    ))}
                </div>

                </section>
            </main>
        </div>
    );
}