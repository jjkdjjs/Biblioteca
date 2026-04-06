import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    },
    {
        id: 6,
        title: "O Pequeno Príncipe",
        category: "Story by",
        author: "Antoine de Saint-Exupéry",
        image: "https://i.pinimg.com/736x/a5/1c/2e/a51c2e9e6bd2f1662c4f07b2a6386be1.jpg",
        avatar: "https://m.media-amazon.com/images/M/MV5BNzQ0YWMxNzYtOWM1Ni00MDM0LWI4ZDMtOTZjNzc2OThmMGY1XkEyXkFqcGc@._V1_.jpg",
        desc: "Um clássico atemporal sobre um jovem príncipe que viaja por planetas, aprendendo sobre amor e amizade."
    },
    {
        id: 7,
        title: "Manual de Assassinato para Boas Garotas",
        category: "Story by",
        author: "Holly Jackson",
        image: "https://i.pinimg.com/1200x/16/af/d7/16afd7ec50df7f3e560e5124f6a5811d.jpg",
        avatar: "https://images1.penguinrandomhouse.com/author/2159079",
        desc: "Pip decide investigar por conta própria um crime que abalou sua cidade há cinco anos, suspeitando que o verdadeiro assassino ainda está solto."
    },
    {
        id: 8,
        title: "Sombra e Ossos",
        category: "Story by",
        author: "Leigh Bardugo",
        image: "https://i.pinimg.com/736x/80/be/59/80be59ecd08839af3fc7d3916e99ce95.jpg",
        avatar: "https://images4.penguinrandomhouse.com/author/2140351",
        desc: "Em um mundo dividido por uma barreira de escuridão, uma jovem descobre um poder que pode finalmente libertar sua nação."
    },
    {
        id: 9,
        title: "Os Sete Maridos de Evelyn Hugo",
        category: "Story by",
        author: "Taylor Jenkins Reid",
        image: "https://i.pinimg.com/736x/0e/f0/dd/0ef0dd82fbbaf3a27d8f7796cf86003f.jpg",
        avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/80rvrf599r2ernjs2f4qf8ne70.jpg",
        desc: "Uma lendária estrela de Hollywood decide contar sua verdadeira história de vida, revelando segredos e amores proibidos."
    },
    {
        id: 10,
        title: "Coraline",
        category: "Story by",
        author: "Neil Gaiman",
        image: "https://i.pinimg.com/1200x/ac/6a/cc/ac6acca3e94e308e2906b1bdb3e93922.jpg",
        avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/3vt82n6mgsk5mqvmf0kbrghn01.jpg",
        desc: "Ao atravessar uma porta secreta em sua nova casa, Coraline encontra uma versão estranha e perigosa de sua própria vida."
    }
];

function Home() {
    const visibleCount = 5;
    const [startIndex, setStartIndex] = useState(0);

    const visibleBooks = (() => {
        if (books.length <= visibleCount) return books;

        const endIndex = startIndex + visibleCount;
        return endIndex <= books.length
            ? books.slice(startIndex, endIndex)
            : books.slice(startIndex).concat(books.slice(0, endIndex - books.length));
    })();

    const handlePrev = () => {
        setStartIndex((prevIndex) => {
            const nextIndex = prevIndex - visibleCount;
            return nextIndex < 0 ? books.length + nextIndex : nextIndex;
        });
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + visibleCount) % books.length);
    };

    return (
        <div className="home-wrapper">
            <Header />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:ital,wght@0,700;1,400&family=Poppins:wght@500;700&display=swap" rel="stylesheet"></link>
            {/* Banner Principal */}
            <img src="/banner-principal.jpg" alt="Bem-vindo à JDL Biblioteca" className="banner" />

            {/* Botões de Ação Rápida */}
            <div className="quick-actions-section">
                <Link to="/renovar" className="quick-action-btn btn-renew">
                    Renovar Empréstimo
                </Link>
                <Link to="/reservar" className="quick-action-btn btn-reserve">
                    Reservar Livro
                </Link>
            </div>

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
                            <Link to="/catalogo?categoria=Fantasia" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-fantasia.png" alt="Fantasia" className="image-fantasia" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Card 2: HQ e Manga */}
                        <div className="item" style={{ '--position': 2 }}>
                            <Link to="/catalogo?categoria=Mistério" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-hq-manga.png" alt="HQs e Mangás" className="image-fantasia" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Card 3: Amor e Drama */}
                        <div className="item" style={{ '--position': 3 }}>
                            <Link to="/catalogo?categoria=Drama" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-amor-drama.png" alt="Amor e Drama" className="image-fantasia" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Card 4: Mistério */}
                        <div className="item" style={{ '--position': 4 }}>
                            <Link to="/catalogo?categoria=Mistério" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-misterio-investigacao.png" alt="Mistério" className="image-fantasia" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Card 5: Poesia */}
                        <div className="item" style={{ '--position': 5 }}>
                            <Link to="/catalogo?categoria=Poesia" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-poesias-cronicas.png" alt="Poesias" className="image-fantasia" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Card 6: Aventura */}
                        <div className="item" style={{ '--position': 6 }}>
                            <Link to="/catalogo?categoria=Aventura" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-aventura.png" alt="Aventura" className="image-fantasia" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Card 7: Literatura Brasileira */}
                        <div className="item" style={{ '--position': 7 }}>
                            <Link to="/catalogo?categoria=Literatura Brasileira" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-literaturabrasileira.png" alt="Literatura Brasileira" className="image-fantasia" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Card 8: Biografia */}
                        <div className="item" style={{ '--position': 8 }}>
                            <Link to="/catalogo?categoria=Biografia" className="card-link">
                                <div className="card">
                                    <div className="image_container">
                                        <img src="/image-biografias.png" alt="Biografia" className="image-fantasia" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="showcase-container">
                    <div className="showcase-header">
                        <h2>Livros em Destaque</h2>
                        <div className="nav-buttons">
                            <button type="button" aria-label="Livros anteriores" onClick={handlePrev}>❮</button>
                            <button type="button" aria-label="Próximos livros" onClick={handleNext}>❯</button>
                        </div>
                    </div>

                    <div className="books-grid">
                        {visibleBooks.map((book) => (
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

                <div className="library-info-section">
                    <div className="library-info-header">
                        <h2>Regras e Serviços da Biblioteca</h2>
                        <p>Fique por dentro das regras de empréstimo, valores e benefícios para alunos e professores</p>
                    </div>
                    <div className="library-info-grid">
                        <div className="library-info-card">
                            <h3>Limite de Empréstimo</h3>
                            <p>Cada aluno pode levar até 3 livros por vez. Se precisar, é possível renovar enquanto não houver reserva.</p>
                        </div>
                        <div className="library-info-card">
                            <h3>Valor da Diária</h3>
                            <p>A multa é R$ 0,25 por livro por dia de atraso. Entregue no prazo para manter a conta em dia.</p>
                        </div>
                        <div className="library-info-card">
                            <h3>Tempo de Empréstimo</h3>
                            <p>O período padrão é de 14 dias. Depois disso, você pode renovar por mais 7 dias se o livro não estiver reservado.</p>
                        </div>
                        <div className="library-info-card">
                            <h3>Serviços Extras</h3>
                            <p>Fazemos empréstimo de livros, reserva online, indicação de leitura e espaço para estudo com Wi-Fi.</p>
                        </div>
                    </div>
                </div>
                <section className="clube-livro-section">
                    <div className="clube-livro-container">

                        {/* Imagem com detalhe decorativo */}
                        <div className="clube-livro-image-area">
                            <div className="decorator-box"></div>
                            <img
                                src="https://scontent-gru2-1.xx.fbcdn.net/v/t51.82787-15/568882018_18489359881073081_7081161621605463211_n.webp?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=wNo_xNs0llYQ7kNvwHMTsM5&_nc_oc=AdrJilPb3zUw0KI1NuJ6_D-ihwJi1krpvR3jxZJAN88CAZtHY-AvERraX5ZcsIsWKaw&_nc_zt=23&_nc_ht=scontent-gru2-1.xx&_nc_gid=Qgp2ozCSQ5wH1342U2PkyA&_nc_ss=7a389&oh=00_AfxabVlh-xruSjHNoetUpPE0GMU9T-veB3DvbhWtEvDzLA&oe=69D049EA"
                                alt="Integrantes do Clube do Livro"
                                className="clube-livro-img"
                            />
                        </div>

                        {/* Conteúdo de Texto */}
                        <div className="clube-livro-content">
                            <h2 className="clube-livro-title">
                                Faça parte do nosso <br />
                                <span className="clube-livro-highlight">Clube do Livro</span>
                            </h2>

                            <p className="clube-livro-text">
                                Compartilhe ideias, descubra novas perspectivas e conecte-se com outros leitores apaixonados. Nossos encontros semanais são o lugar perfeito para quem busca mergulhar fundo na literatura.
                            </p>

                            <div className="clube-livro-actions">
                                <a href="/" className="btn-clube-primary">Participar Agora</a>
                                <a href="/" className="btn-clube-outline">Ver Próximas Leituras</a>
                            </div>

                            <div className="clube-livro-footer">
                                <span className="dot-active"></span>
                                Encontros: Terças e Sextas, às 19h
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <Footer />
        </div>

    );
}

export default Home;