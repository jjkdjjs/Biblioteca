import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const books = [
    // FANTASIA
    {
        id: 2,
        title: "Percy Jackson e o Ladrão de Raios",
        category: "Fantasia",
        author: "Rick Riordan",
        image: "https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg",
        avatar: "https://www.btsb.com/btsbcontent/uploads/2013/12/rick-riordan.jpg",
        desc: "Percy descobre que é filho de um deus grego e embarca em uma missão perigosa."
    },
    {
        id: 8,
        title: "Sombra e Ossos",
        category: "Fantasia",
        author: "Leigh Bardugo",
        image: "https://i.pinimg.com/736x/80/be/59/80be59ecd08839af3fc7d3916e99ce95.jpg",
        avatar: "https://images4.penguinrandomhouse.com/author/2140351",
        desc: "Uma jovem descobre um poder que pode finalmente libertar sua nação da escuridão."
    },
    // HQs E MANGÁS
    {
        id: 5,
        title: "Heartstopper: Dois Garotos, Um Encontro",
        category: "HQs",
        author: "Alice Oseman",
        image: "https://m.media-amazon.com/images/I/8129HX+5JGL.jpg",
        avatar: "https://www.hayfestival.com/images/product/large/20066.jpg",
        desc: "Uma história doce sobre amizade e o florescer de um romance entre dois adolescentes."
    },
    {
        id: 13,
        title: "A Piada Mortal",
        category: "HQs",
        author: "Alan Moore",
        image: "https://i.pinimg.com/736x/06/98/0a/06980af76db316212266b051e8155544.jpg",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Alan_Moore_at_the_ICA_on_June_2nd_2009.jpg",
        desc: "Um dos exames mais profundos da relação entre o Batman e o Coringa."
    },
    // DRAMA / AMOR
    {
        id: 3,
        title: "Extraordinário",
        category: "Drama",
        author: "R.J. Palacio",
        image: "https://m.media-amazon.com/images/I/6132ndvQdiL.jpg",
        avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/41sroqaj9t16luqfel9b9hkmfn.jpg",
        desc: "Auggie enfrenta os desafios de entrar na escola pela primeira vez com uma condição facial rara."
    },
    {
        id: 9,
        title: "Os Sete Maridos de Evelyn Hugo",
        category: "Drama",
        author: "Taylor Jenkins Reid",
        image: "https://i.pinimg.com/736x/0e/f0/dd/0ef0dd82fbbaf3a27d8f7796cf86003f.jpg",
        avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/80rvrf599r2ernjs2f4qf8ne70.jpg",
        desc: "Uma lendária estrela de Hollywood decide contar sua verdadeira história de vida."
    },
    // MISTÉRIO / INVESTIGAÇÃO
    {
        id: 4,
        title: "Um de Nós Está Mentindo",
        category: "Mistério",
        author: "Karen M. McManus",
        image: "https://m.media-amazon.com/images/I/81r6K6pVipL._AC_UF1000,1000_QL80_.jpg",
        avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/oi2ase2qm4v5i4neohill8bnr1.jpg",
        desc: "Cinco estudantes entram em detenção, mas apenas quatro saem vivos. Todos são suspeitos."
    },
    {
        id: 7,
        title: "Manual de Assassinato para Boas Garotas",
        category: "Mistério",
        author: "Holly Jackson",
        image: "https://i.pinimg.com/1200x/16/af/d7/16afd7ec50df7f3e560e5124f6a5811d.jpg",
        avatar: "https://images1.penguinrandomhouse.com/author/2159079",
        desc: "Pip decide investigar por conta própria um crime que abalou sua cidade há cinco anos."
    },
    // AVENTURA
    {
        id: 1,
        title: "Jogos Vorazes",
        category: "Aventura",
        author: "Suzanne Collins",
        image: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg",
        avatar: "https://m.media-amazon.com/images/M/MV5BMTQyODc5Nzc2MF5BMl5BanBnXkFtZTcwNDAwODgxOA@@._V1_.jpg",
        desc: "Em um futuro distópico, Katniss luta pela sobrevivência em um jogo cruel transmitido ao vivo."
    },
    // LITERATURA BRASILEIRA
    {
        id: 11,
        title: "Dom Casmurro",
        category: "Literatura",
        author: "Machado de Assis",
        image: "https://i.pinimg.com/1200x/cb/b5/ac/cbb5ac9e879c51ef9117b784026a1f2b.jpg",
        avatar: "https://s2.glbimg.com/KG8gfhr1FsNqexT1l5cU8DsVTUk=/e.glbimg.com/og/ed/f/original/2017/06/21/o-olhar-de-machado-de-assis.jpg",
        desc: "A clássica dúvida da literatura brasileira: Capitu traiu ou não traiu Bentinho?"
    },
    {
        id: 12,
        title: "Capitães da Areia",
        category: "Literatura",
        author: "Jorge Amado",
        image: "https://i.pinimg.com/736x/5e/42/18/5e4218fba25ee8af9d50b1d4cd457a21.jpg",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QcCKH-biKJajorJc5rV86ThqREguMMfiVQ&s",
        desc: "Acompanhe as aventuras e lutas de um grupo de meninos abandonados nas ruas de Salvador."
    },
    // POESIA E CRÔNICAS
    {
        id: 14,
        title: "Antologia Poética",
        category: "Poesia",
        author: "Vinicius de Moraes",
        image: "https://i.pinimg.com/736x/52/a9/87/52a987ac928afce53a6ba78dae3ae1d4.jpg",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/1/19/Vinicius.jpg",
        desc: "Uma seleção dos melhores versos de um dos maiores poetas da nossa língua."
    },
    // BIOGRAFIAS
    {
        id: 15,
        title: "O Diário de Anne Frank",
        category: "Biografia",
        author: "Anne Frank",
        image: "https://i.pinimg.com/736x/b5/a3/c6/b5a3c6c04fc8376294f333bc3be481b2.jpg",
        avatar: "https://wjc-dev.imgix.net/about-holocaust/assets/YgPNe5dI/anne-frank-cropped-e1542142756434.png?auto=format&fit=crop&fm=jpg&h=480&lossless=true&q=60&w=750",
        desc: "O relato emocionante de uma menina judia escondida durante a ocupação nazista."
    }
];

function Home() {
    const [startIndex, setStartIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const visibleCount = 5;

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const visibleBooks = (() => {
        if (books.length <= visibleCount) return books;
        const endIndex = startIndex + visibleCount;
        return endIndex <= books.length
            ? books.slice(startIndex, endIndex)
            : books.slice(startIndex).concat(books.slice(0, endIndex - books.length));
    })();

    const handlePrev = () => {
        setStartIndex((prevIndex) => {
            const nextIndex = prevIndex - 1; // Mudei para 1 para o scroll ser mais suave
            return nextIndex < 0 ? books.length - 1 : nextIndex;
        });
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % books.length);
    };

    return (
        <div className="home-wrapper">
            <Header />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:ital,wght@0,700;1,400&family=Poppins:wght@500;700&display=swap" rel="stylesheet" />

            <img src="/banner-principal.jpg" alt="Bem-vindo" className="banner" />

            <div className="quick-actions-section">
                <Link to="/renovar" className="quick-action-btn btn-renew">Renovar Empréstimo</Link>
                <Link to="/reservar" className="quick-action-btn btn-reserve">Reservar Livro</Link>
            </div>

            <div className="generos">
                <h1 className='titulo-genero'>Categorias de Livros</h1>

                <div className="slider" style={{ '--width': '160px', '--height': '160px', '--quantity': '8', '--duration': '40s' }}>
                    <div className="list">
                        <div className="item" style={{ '--position': 1 }}><Link to="/catalogo?categoria=Fantasia"><div className="card"><div className="image_container"><img src="/image-fantasia.png" alt="Fantasia" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 2 }}><Link to="/catalogo?categoria=HQs"><div className="card"><div className="image_container"><img src="/image-hq-manga.png" alt="HQs" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 3 }}><Link to="/catalogo?categoria=Drama"><div className="card"><div className="image_container"><img src="/image-amor-drama.png" alt="Drama" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 4 }}><Link to="/catalogo?categoria=Mistério"><div className="card"><div className="image_container"><img src="/image-misterio-investigacao.png" alt="Mistério" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 5 }}><Link to="/catalogo?categoria=Poesia"><div className="card"><div className="image_container"><img src="/image-poesias-cronicas.png" alt="Poesia" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 6 }}><Link to="/catalogo?categoria=Aventura"><div className="card"><div className="image_container"><img src="/image-aventura.png" alt="Aventura" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 7 }}><Link to="/catalogo?categoria=Literatura"><div className="card"><div className="image_container"><img src="/image-literaturabrasileira.png" alt="Literatura" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 8 }}><Link to="/catalogo?categoria=Biografia"><div className="card"><div className="image_container"><img src="/image-biografias.png" alt="Biografia" /></div></div></Link></div>
                    </div>
                </div>

                <div className="showcase-container">
                    <div className="showcase-header">
                        <h2>Livros em Destaque</h2>
                        <div className="nav-buttons">
                            <button type="button" onClick={handlePrev}>❮</button>
                            <button type="button" onClick={handleNext}>❯</button>
                        </div>
                    </div>

                    <div className="books-grid">
                        {visibleBooks.map((book) => (
                            <div key={book.id} className="book-card">
                                <Link to={`/livro/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <img src={book.image} alt={book.title} className="book-cover" />
                                    <div className="book-info">
                                        <h3>{book.title}</h3>
                                        <p className="book-description">{book.desc}</p>
                                        <div className="author-section">
                                            <img src={book.avatar} alt={book.author} className="author-avatar" />
                                            <div className="author-text">
                                                <span className="category">{book.category}</span>
                                                <span className="name">{book.author}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="clube-livro-section">
                    <div className="clube-livro-container">
                        <div className="clube-livro-image-area">
                            <div className="decorator-box"></div>
                            <img src="/ClubeLivroFoto.png" alt="Clube" className="clube-livro-img" />
                        </div>
                        <div className="clube-livro-content">
                            <h2 className="clube-livro-title">Faça parte do nosso <br /><span className="clube-livro-highlight">Clube do Livro</span></h2>
                            <p className="clube-livro-text">Conecte-se com outros leitores apaixonados.</p>
                            <div className="clube-livro-actions">
                                <button onClick={() => openModal("participar")} className="btn-clube-primary">Participar Agora</button>
                                <button onClick={() => openModal("agenda")} className="btn-clube-outline">Ver Próximas Leituras</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>&times;</button>
                        <h2>{modalType === "participar" ? "Inscrição Clube do Livro" : "Agenda de Leituras"}</h2>
                        <form action="https://api.staticforms.xyz/submit" method="post">
                            <input type="hidden" name="accessKey" value="sf_4156f109abaca6a3b983318b" />
                            <div className="input-group">
                                <label>Nome</label>
                                <input type="text" name="name" required placeholder="Seu nome..." />
                            </div>
                            <div className="input-group">
                                <label>E-mail</label>
                                <input type="email" name="email" required placeholder="seu@email.com" />
                            </div>
                            <button type="submit" className="btn-submit-modal">Enviar Dados</button>
                        </form>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Home;