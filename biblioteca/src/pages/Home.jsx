import '../pages/Home.css';
import Header from '../components/Header';
import './BooksShowcase.css';

const books = [
  {
    id: 1,
    title: "The Jungle Book",
    category: "Story by",
    author: "Rudyard Kipling",
    image: "/jungle-book.jpg", // Substitua pelos seus caminhos
    avatar: "/rudyard-avatar.jpg",
    desc: "On a warm evening in the Seeonee hills, a family of wolves finds someone..."
  },
  {
    id: 2,
    title: "The Wolf Wilder",
    category: "Novel by",
    author: "K. Rundell",
    image: "/wolf-wilder.jpg",
    avatar: "/rundell-avatar.jpg",
    desc: "Fairy tale and history merge seamlessly (Publishers Weekly, starred review)..."
  },
  // Adicione os outros 3 livros aqui seguindo o mesmo padrão
];

function Home() {
    return (
        <div>
            <Header />

            {/* Banner Principal */}
            <img src="/banner-principal.png" alt="Bem-vindo à JDL Biblioteca" className="banner" />

            {/* Seção de Gêneros */}
            <div className="generos">
                <h1 className='titulo-genero'>Categorias de Livros</h1>

                {/* Slider 3D Infinito */}
                <div
                    className="slider"
                    style={{
                        '--width': '160px',   // Reduzi o tamanho para combinar com suas imagens
                        '--height': '160px',  // Reduzi a altura
                        '--quantity': '8',
                        '--duration': '40s',
                        maxWidth: '1600px',    // Limita a largura total do carrossel na tela
                        margin: '0 '      // Centraliza o carrossel na página
                    }}
                >
                    <div className="list">
                        {/* Card 1: Fantasia */}
                        <div className="item" style={{ '--position': 1 }}>
                            <a href="/catalogo/fantasia" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-fantasia.png" alt="Fantasia" className="image-fantasia" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 2: HQ e Manga */}
                        <div className="item" style={{ '--position': 2 }}>
                            <a href="/catalogo/hqs" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-hq-manga.png" alt="HQs e Mangás" className="image-fantasia" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 3: Amor e Drama */}
                        <div className="item" style={{ '--position': 3 }}>
                            <a href="/catalogo/amor" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-amor-drama.png" alt="Amor e Drama" className="image-fantasia" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 4: Mistério */}
                        <div className="item" style={{ '--position': 4 }}>
                            <a href="/catalogo/misterio" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-misterio-investigacao.png" alt="Mistério" className="image-fantasia" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 5: Poesia */}
                        <div className="item" style={{ '--position': 5 }}>
                            <a href="/catalogo/poesia" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-poesias-cronicas.png" alt="Poesias" className="image-fantasia" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 6: Aventura */}
                        <div className="item" style={{ '--position': 6 }}>
                            <a href="/catalogo/aventura" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-aventura.png" alt="Aventura" className="image-fantasia" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 7: Literatura Brasileira */}
                        <div className="item" style={{ '--position': 7 }}>
                            <a href="/catalogo/literatura-brasileira" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-literaturabrasileira.png" alt="Literatura Brasileira" className="image-fantasia" />
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Card 8: Biografia */}
                        <div className="item" style={{ '--position': 8 }}>
                            <a href="/catalogo/biografia" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-biografias.png" alt="Biografia" className="image-fantasia" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="showcase-container">
                    <div className="showcase-header">
                        <h2>Books Showcase</h2>
                        <div className="nav-buttons">
                            <button>❮</button>
                            <button>❯</button>
                        </div>
                    </div>

                    <div className="books-grid">
                        {books.map((book) => (
                            <div key={book.id} className="book-card">
                                <img src={book.image} alt={book.title} className="book-cover" />
                                
                                <div className="book-info">
                                    <h3>{book.title}</h3>
                                    <p className="book-description">
                                        {book.desc} <span className="more">more</span>
                                    </p>
                                    
                                    <div className="author-section">
                                        <img src={book.avatar} alt={book.author} className="author-avatar" />
                                        <div className="author-text">
                                            <span className="category">{book.category}</span>
                                            <span className="name">{book.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        );
    }

export default Home;