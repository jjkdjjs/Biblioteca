import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Catalogo.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useFavoritos } from '../contexts/FavoritosContext';

export default function Catalogo() {
    const [busca, setBusca] = useState('');
    const [categoria, setCategoria] = useState('Todos');
    const [searchParams] = useSearchParams();
    const { adicionarFavorito, isFavorito } = useFavoritos();

    // Aplicar filtro da URL quando o componente montar
    useEffect(() => {
        const categoriaParam = searchParams.get('categoria');
        if (categoriaParam && categoriaParam !== 'Todos') {
            setCategoria(categoriaParam);
        }
    }, [searchParams]);

    const livros = [
        // Romance
        { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis', categoria: 'Romance', capa: 'https://i.pinimg.com/1200x/cb/b5/ac/cbb5ac9e879c51ef9117b784026a1f2b.jpg', editora: 'Companhia das Letras', ano: 1899, paginas: 208, resumo: 'Romance psicológico que narra a história de Bentinho e Capitu, explorando temas como ciúme, traição e a natureza humana.' },
        { id: 2, titulo: 'Capitães da Areia', autor: 'Jorge Amado', categoria: 'Romance', capa: 'https://i.pinimg.com/736x/6d/56/b3/6d56b309afc1bd531d76fd284d030be3.jpg', editora: 'Companhia das Letras', ano: 1937, paginas: 256, resumo: 'História de um grupo de meninos abandonados que formam uma gangue na cidade de Salvador.' },
        { id: 3, titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', categoria: 'Romance', capa: 'https://i.pinimg.com/1200x/f1/52/2e/f1522ee9b09a8aa80e39097d1dadb768.jpg', editora: 'Companhia das Letras', ano: 1881, paginas: 192, resumo: 'Narrativa inovadora contada por um defunto, satirizando a sociedade brasileira do século XIX.' },
        { id: 4, titulo: 'Quincas Borba', autor: 'Machado de Assis', categoria: 'Romance', capa: 'https://i.pinimg.com/736x/d0/66/02/d0660246a95fcfe2ad7bac4d9e38e6c1.jpg', editora: 'Companhia das Letras', ano: 1891, paginas: 224, resumo: 'Romance filosófico que explora ideias do humanitismo através das vidas de Rubião e Quincas Borba.' },
        { id: 5, titulo: 'Iracema', autor: 'José de Alencar', categoria: 'Romance', capa: 'https://i.pinimg.com/736x/f5/62/fb/f562fb4f1d0c8d4e582184a6d0469752.jpg', editora: 'Companhia das Letras', ano: 1865, paginas: 176, resumo: 'Romance indianista que narra o amor entre Iracema, filha de um chefe tabajara, e Martim, um português.' },
        { id: 6, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', categoria: 'Romance', capa: 'https://i.pinimg.com/736x/bb/d0/2e/bbd02e95af990363cb7037e1dd1414d6.jpg', editora: 'Penguin Classics', ano: 1813, paginas: 432, resumo: 'Clássico da literatura inglesa que satiriza os costumes sociais e o casamento na Inglaterra do século XIX.' },

        // Fantasia
        { id: 7, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', categoria: 'Fantasia', capa: 'https://i.pinimg.com/1200x/af/24/f9/af24f9cf0942c17966cd15ab8bb73cf1.jpg', editora: 'Rocco', ano: 1997, paginas: 208, resumo: 'Primeiro livro da saga Harry Potter, onde um menino descobre ser um bruxo e inicia sua jornada em Hogwarts.' },
        { id: 8, titulo: 'Percy Jackson e o Ladrão de Raios', autor: 'Rick Riordan', categoria: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg', editora: 'Intrínseca', ano: 2005, paginas: 400, resumo: 'Percy Jackson descobre ser filho de Poseidon e embarca em uma aventura para recuperar o raio de Zeus.' },
        { id: 9, titulo: 'Senhor dos Anéis - A Sociedade do Anel', autor: 'J.R.R. Tolkien', categoria: 'Fantasia', capa: 'https://i.pinimg.com/736x/bb/f8/ad/bbf8ad84fed4fcca7cdf2caac291c411.jpg', editora: 'Martins Fontes', ano: 1954, paginas: 576, resumo: 'Primeiro volume da trilogia O Senhor dos Anéis, onde Frodo recebe a missão de destruir o Anel do Poder.' },
        { id: 10, titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', categoria: 'Fantasia', capa: 'https://i.pinimg.com/1200x/b9/db/fb/b9dbfb358fba4e023cd39f038dd2644d.jpg', editora: 'Martins Fontes', ano: 1937, paginas: 336, resumo: 'Aventura de Bilbo Bolseiro, um hobbit que é arrastado para uma jornada épica com anões.' },
        { id: 11, titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez', categoria: 'Fantasia', capa: 'https://i.pinimg.com/1200x/3e/c8/bf/3ec8bf13867398d10c0f99860aa3d644.jpg', editora: 'Record', ano: 1967, paginas: 448, resumo: 'Saga da família Buendía na cidade fictícia de Macondo, misturando realismo mágico e história.' },
        { id: 12, titulo: 'Grande Sertão: Veredas', autor: 'João Guimarães Rosa', categoria: 'Fantasia', capa: 'https://i.pinimg.com/736x/39/ed/72/39ed72b62dbc0fc90e269ef90627ee34.jpg', editora: 'Nova Fronteira', ano: 1956, paginas: 608, resumo: 'Romance complexo ambientado no sertão brasileiro, narrado por Riobaldo.' },

        // Infantil
        { id: 13, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', categoria: 'Infantil', capa: 'https://i.pinimg.com/1200x/db/a9/5f/dba95f65f272d72461c40541d0c8d33b.jpg', editora: 'Agir', ano: 1943, paginas: 96, resumo: 'Fábula filosófica sobre um príncipe que viaja por diferentes planetas aprendendo lições sobre a vida.' },
        { id: 14, titulo: 'O Meu Pé de Laranja Lima', autor: 'José Mauro de Vasconcelos', categoria: 'Infantil', capa: 'https://i.pinimg.com/1200x/a8/46/2d/a8462d781540719280d62ca4ee42c537.jpg', editora: 'Melhoramentos', ano: 1968, paginas: 192, resumo: 'História autobiográfica de um menino pobre que encontra amizade em uma árvore de laranja.' },
        { id: 15, titulo: 'Sítio do Picapau Amarelo', autor: 'Monteiro Lobato', categoria: 'Infantil', capa: 'https://i.pinimg.com/736x/2e/9d/2e/2e9d2e56c43e76577eaee22a32fdfb51.jpg', editora: 'Brasiliense', ano: 1920, paginas: 128, resumo: 'Aventuras da boneca Emília e seus amigos no sítio encantado.' },

        // Mistério
        { id: 16, titulo: 'Assassinato no Expresso do Oriente', autor: 'Agatha Christie', categoria: 'Mistério', capa: 'https://i.pinimg.com/736x/d7/50/09/d750099c9c075b670f33a00bb935aca9.jpg', editora: 'Nova Fronteira', ano: 1934, paginas: 256, resumo: 'Hercule Poirot investiga um assassinato a bordo do luxuoso trem Expresso do Oriente.' },
        { id: 17, titulo: 'O Código Da Vinci', autor: 'Dan Brown', categoria: 'Mistério', capa: 'https://i.pinimg.com/1200x/35/54/91/355491e1e2b2df931a44458f8e192c4a.jpg', editora: 'Sextante', ano: 2003, paginas: 480, resumo: 'Robert Langdon e Sophie Neveu desvenda mistérios relacionados ao Santo Graal.' },
        { id: 18, titulo: 'Sherlock Holmes - Um Estudo Escarlate', autor: 'Arthur Conan Doyle', categoria: 'Mistério', capa: 'https://i.pinimg.com/736x/2c/bd/41/2cbd41cd5d85beb9f0321a09443296e1.jpg', editora: 'Zahar', ano: 1887, paginas: 224, resumo: 'Primeira aventura do detetive Sherlock Holmes e seu amigo Dr. Watson.' },
        { id: 19, titulo: 'Um de Nós Está Mentindo', autor: 'Karen M. McManus', categoria: 'Mistério', capa: 'https://m.media-amazon.com/images/I/81r6K6pVipL._AC_UF1000,1000_QL80_.jpg', editora: 'Rocco', ano: 2017, paginas: 368, resumo: 'Cinco estudantes entram em detenção, mas apenas quatro saem vivos. Todos são suspeitos.' },

        // Ficção Científica
        { id: 20, titulo: 'Fundação', autor: 'Isaac Asimov', categoria: 'Ficção Científica', capa: 'https://editoraaleph.com.br/cdn/shop/files/capas_site_700x1000_Fundacao.png?v=1714169773&width=1200', editora: 'Aleph', ano: 1951, paginas: 256, resumo: 'Primeiro livro da série Fundação, sobre a queda e reconstrução do Império Galáctico.' },
        { id: 21, titulo: '1984', autor: 'George Orwell', categoria: 'Ficção Científica', capa: 'https://i.pinimg.com/736x/84/53/49/84534989671c960ce66e724246527fd8.jpg', editora: 'Companhia das Letras', ano: 1949, paginas: 336, resumo: 'Distopia sobre um regime totalitário que controla todos os aspectos da vida.' },
        { id: 22, titulo: 'Eu, Robô', autor: 'Isaac Asimov', categoria: 'Ficção Científica', capa: 'https://i.pinimg.com/1200x/60/95/cc/6095cca1e31548954af2605b382f034f.jpg', editora: 'Aleph', ano: 1950, paginas: 256, resumo: 'Coletânea de contos sobre robôs e as Três Leis da Robótica.' },
        { id: 23, titulo: 'Duna', autor: 'Frank Herbert', categoria: 'Ficção Científica', capa: 'https://i.pinimg.com/1200x/03/4a/f3/034af376ad179d85a965ebb0a7e937b3.jpg', editora: 'Aleph', ano: 1965, paginas: 688, resumo: 'Épica ambientada no planeta deserto Arrakis, onde se encontra a substância mais valiosa do universo.' },

        // Literatura Brasileira
        { id: 24, titulo: 'Vidas Secas', autor: 'Graciliano Ramos', categoria: 'Literatura Brasileira', capa: 'https://i.pinimg.com/736x/ab/88/70/ab8870426d5d0e7ec25b690efddb9c93.jpg', editora: 'Record', ano: 1938, paginas: 176, resumo: 'Romance sobre a vida miserável de uma família de retirantes no sertão nordestino.' },
        { id: 25, titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', categoria: 'Literatura Brasileira', capa: 'https://m.media-amazon.com/images/I/51BofHhKUEL._SX342_SY445_ML2_.jpg', editora: 'Rocco', ano: 1977, paginas: 96, resumo: 'Último romance de Clarice Lispector, narrado por Rodrigo S.M., sobre a nordestina Macabéa.' },
        { id: 26, titulo: 'O Cortiço', autor: 'Aluísio Azevedo', categoria: 'Literatura Brasileira', capa: 'https://i.pinimg.com/736x/1d/1a/6c/1d1a6c4895688dd28327e7a7e21f0756.jpg', editora: 'Companhia das Letras', ano: 1890, paginas: 304, resumo: 'Romance naturalista que retrata a vida no cortiço Cabeça de Porco, no Rio de Janeiro.' },
        { id: 27, titulo: 'O Alienista', autor: 'Machado de Assis', categoria: 'Literatura Brasileira', capa: 'https://i.pinimg.com/736x/9e/3f/c0/9e3fc0bba682fa3ed424fe2f73d24f58.jpg', editora: 'Companhia das Letras', ano: 1882, paginas: 112, resumo: 'Conto satírico sobre um médico que classifica a população de uma cidade como louca.' },

        // Drama
        { id: 28, titulo: 'Romeu e Julieta', autor: 'William Shakespeare', categoria: 'Drama', capa: 'https://i.pinimg.com/1200x/ef/dc/63/efdc634c5560d506d470bf182b5a9d47.jpg', editora: 'Penguin Classics', ano: 1597, paginas: 336, resumo: 'Tragédia clássica sobre o amor proibido entre dois jovens de famílias rivais.' },
        { id: 29, titulo: 'O Fantasma da Ópera', autor: 'Gaston Leroux', categoria: 'Drama', capa: 'https://i.pinimg.com/736x/4c/2c/2f/4c2c2fe369c5036f7aecf50dfd055a99.jpg', editora: 'L&PM', ano: 1910, paginas: 272, resumo: 'Mistério romântico sobre um fantasma que assombra a Ópera de Paris.' },
        { id: 30, titulo: 'Hamlet', autor: 'William Shakespeare', categoria: 'Drama', capa: 'https://i.pinimg.com/736x/c3/b2/fc/c3b2fc513e43e5118911967ea2e78078.jpg', editora: 'Penguin Classics', ano: 1603, paginas: 352, resumo: 'Príncipe da Dinamarca busca vingar a morte de seu pai.' },
        { id: 31, titulo: 'O Auto da Compadecida', autor: 'Ariano Suassuna', categoria: 'Drama', capa: 'https://i.pinimg.com/1200x/a3/26/7d/a3267d75ec3030a94cbd2d17e0accba9.jpg', editora: 'Nova Fronteira', ano: 1955, paginas: 208, resumo: 'Auto paraibano que mistura elementos do cordel com o teatro popular brasileiro.' },

        // Poesia
        { id: 32, titulo: 'Claro Enigma', autor: 'Carlos Drummond de Andrade', categoria: 'Poesia', capa: 'https://i.pinimg.com/736x/e5/68/ee/e568eefea50d8f350bbbc2cd47830e14.jpg', editora: 'Companhia das Letras', ano: 1951, paginas: 128, resumo: 'Poesia moderna brasileira que explora temas existenciais e sociais.' },
        { id: 33, titulo: 'Mensagem', autor: 'Fernando Pessoa', categoria: 'Poesia', capa: 'https://i.pinimg.com/736x/4a/f2/38/4af238d545a78d318e195f5e74195865.jpg', editora: 'Companhia das Letras', ano: 1934, paginas: 96, resumo: 'Poema épico português escrito sob o heterônimo de Álvaro de Campos.' },
        { id: 34, titulo: 'Viagens na Minha Terra', autor: 'Almeida Garrett', categoria: 'Poesia', capa: 'https://i.pinimg.com/736x/13/32/c4/1332c4e592653553827846bd2392a2cd.jpg', editora: 'Livraria Garnier', ano: 1846, paginas: 320, resumo: 'Viagem poética e romântica através de Portugal.' },

        // HQs e Mangás
        { id: 35, titulo: 'Watchmen', autor: 'Alan Moore', categoria: 'HQs e Mangás', capa: 'https://i.pinimg.com/1200x/c8/51/5e/c8515ec44d3a556ce3c1bd3ba3fa92b2.jpg', editora: 'Panini', ano: 1986, paginas: 416, resumo: 'Uma desconstrução dos super-heróis em um cenário de Guerra Fria, onde justiceiros mascarados são banidos.' },
        { id: 36, titulo: 'Naruto Vol. 01', autor: 'Masashi Kishimoto', categoria: 'HQs e Mangás', capa: 'https://i.pinimg.com/1200x/fe/c3/17/fec317b9f3b3a4c4dde64286867471cc.jpg', editora: 'Panini', ano: 1999, paginas: 192, resumo: 'O início da jornada de um jovem ninja que busca reconhecimento e o sonho de se tornar o líder de sua vila.' },

        // Aventura
        { id: 38, titulo: 'A Ilha do Tesouro', autor: 'Robert Louis Stevenson', categoria: 'Aventura', capa: 'https://i.pinimg.com/736x/53/8c/e7/538ce75b692ac327662fc6e834f343b3.jpg', editora: 'Zahar', ano: 1883, paginas: 240, resumo: 'O jovem Jim Hawkins embarca em um navio em busca de um tesouro escondido, enfrentando piratas perigosos.' },
        { id: 39, titulo: 'Vinte Mil Léguas Submarinas', autor: 'Júlio Verne', categoria: 'Aventura', capa: 'https://i.pinimg.com/1200x/4c/3d/67/4c3d67c614c61fffbc4d60ef57a7107c.jpg', editora: 'Zahar', ano: 1870, paginas: 488, resumo: 'Uma expedição submarina comandada pelo misterioso Capitão Nemo a bordo do náutilus.' },

        // Biografia
        { id: 40, titulo: 'O Diário de Anne Frank', autor: 'Anne Frank', categoria: 'Biografia', capa: 'https://m.magazineluiza.com.br/a-static/420x420/livro-o-diario-de-anne-frank-em-quadrinhos/apaginadistribuidoradelivros/248463/019e0b37aef8252398b4ed4250f0f198.jpg', editora: 'Record', ano: 1947, paginas: 352, resumo: 'Os relatos reais de uma menina judia escondida durante a ocupação nazista nos Países Baixos.' },
        { id: 41, titulo: 'Steve Jobs', autor: 'Walter Isaacson', categoria: 'Biografia', capa: 'https://i.pinimg.com/1200x/6d/af/b3/6dafb3efa10f3cab729d81f7d40510de.jpg', editora: 'Companhia das Letras', ano: 2011, paginas: 632, resumo: 'A vida detalhada do cofundador da Apple, baseada em anos de entrevistas exclusivas.' },
        { id: 42, titulo: 'Malala: A Menina que Queria Ir para a Escola', autor: 'Adriana Carranca', categoria: 'Biografia', capa: 'https://m.media-amazon.com/images/I/9164WeAYFsL.jpg', editora: 'Companhia das Letrinhas', ano: 2015, paginas: 96, resumo: 'A história da jovem paquistanesa que desafiou o Talibã pelo direito das mulheres à educação.' }
    ];
        

    const categorias = ['Todos', 'Romance', 'Fantasia', 'Infantil', 'Mistério', 'Ficção Científica', 'Literatura Brasileira', 'Drama', 'Poesia', 'HQs e Mangás', 'Aventura', 'Biografia'];

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
                        Busque pelo título ou selecione uma categoria para encontrar o livro certo.
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
                        {/* Lógica para mostrar livros ou aviso de categoria vazia */}
                        {livrosFiltrados.length > 0 ? (
                            livrosFiltrados.map((livro) => (
                                <article key={livro.id} className="livro-card">
                                    <button
                                        className={`favorito-btn ${isFavorito(livro.id) ? 'favoritado' : ''}`}
                                        onClick={() => adicionarFavorito(livro)}
                                        title={isFavorito(livro.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                                    >
                                        {isFavorito(livro.id) ? '❤️' : '🤍'}
                                    </button>
                                    <Link to={`/livro/${livro.id}`}>
                                        <img
                                            src={livro.capa}
                                            alt={livro.titulo}
                                            onError={(e) => e.target.src = '/capa-padrao.png'}
                                        />
                                    </Link>
                                    <div className="livro-info">
                                        <h3>{livro.titulo}</h3>
                                        <p className="livro-category">{livro.categoria}</p>
                                        <p className="livro-author">{livro.autor}</p>
                                        <div className="livro-actions">
                                            <Link to={`/livro/${livro.id}`} className="livro-btn detalhes-btn">Ver Detalhes</Link>
                                            <Link to="/reservar" className="livro-btn reservar-btn">Reservar</Link>
                                        </div>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: '#666' }}>
                                <p>Nenhum livro disponível para a categoria <strong>{categoria}</strong> no momento.</p>
                            </div>
                        )}
                    </div>

                </section>
            </main>
            <Footer />
        </div>
    );
}