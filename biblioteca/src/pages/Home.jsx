import '../pages/Home.css';
import Header from '../components/Header';

const books = [
{
  id: 1,
  title: "Jogos Vorazes (Livro 1)",
  category: "Story by",
  author: "Suzanne Collins",
  image: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg",
  avatar: "https://m.media-amazon.com/images/M/MV5BMTQyODc5Nzc2MF5BMl5BanBnXkFtZTcwNDAwODgxOA@@._V1_.jpg",
  desc: "Em um futuro distópico, Katniss Everdeen participa de um jogo mortal onde apenas um pode sobreviver."
},
{
  id: 2,
  title: "Percy Jackson e o Ladrão de Raios",
  category: "Story by",
  author: "Rick Riordan",
  image: "https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg",
  avatar: "https://www.btsb.com/btsbcontent/uploads/2013/12/rick-riordan.jpg",
  desc: "Percy descobre que é filho de um deus grego e embarca em uma missão cheia de perigos e aventuras."
},
{
  id: 3,
  title: "Extraordinário",
  category: "Story by",
  author: "R.J. Palacio",
  image: "https://m.media-amazon.com/images/I/6132ndvQdiL.jpg",
  avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/41sroqaj9t16luqfel9b9hkmfn.jpg",
  desc: "Auggie, um garoto com uma condição facial rara, enfrenta desafios ao entrar na escola pela primeira vez."
},
{
  id: 4,
  title: "Um de Nós Está Mentindo",
  category: "Story by",
  author: "Karen M. McManus",
  image: "https://m.media-amazon.com/images/I/81r6K6pVipL._AC_UF1000,1000_QL80_.jpg",
  avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/oi2ase2qm4v5i4neohill8bnr1.jpg",
  desc: "Cinco estudantes entram em detenção, mas apenas quatro saem vivos. Todos são suspeitos."
},
{
  id: 5,
  title: "Heartstopper",
  category: "Story by",
  author: "Alice Oseman",
  image: "https://m.media-amazon.com/images/I/8129HX+5JGL.jpg",
  avatar: "https://www.hayfestival.com/images/product/large/20066.jpg",
  desc: "Uma história doce sobre amizade, descobertas e romance entre dois adolescentes."
}
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
                        <h2>Livros em Destaque</h2>
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
                                        {book.desc} 
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