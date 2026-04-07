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
        desc: "Pip decide investigar por conta própria um crime que abalou sua cidade há cinco anos."
    },
    {
        id: 8,
        title: "Sombra e Ossos",
        category: "Story by",
        author: "Leigh Bardugo",
        image: "https://i.pinimg.com/736x/80/be/59/80be59ecd08839af3fc7d3916e99ce95.jpg",
        avatar: "https://images4.penguinrandomhouse.com/author/2140351",
        desc: "Uma jovem descobre um poder que pode finalmente libertar sua nação da escuridão."
    },
    {
        id: 9,
        title: "Os Sete Maridos de Evelyn Hugo",
        category: "Story by",
        author: "Taylor Jenkins Reid",
        image: "https://i.pinimg.com/736x/0e/f0/dd/0ef0dd82fbbaf3a27d8f7796cf86003f.jpg",
        avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/80rvrf599r2ernjs2f4qf8ne70.jpg",
        desc: "Uma lendária estrela de Hollywood decide contar sua verdadeira história de vida."
    },
    {
        id: 10,
        title: "Coraline",
        category: "Story by",
        author: "Neil Gaiman",
        image: "https://i.pinimg.com/1200x/ac/6a/cc/ac6acca3e94e308e2906b1bdb3e93922.jpg",
        avatar: "https://m.media-amazon.com/images/S/amzn-author-media-prod/3vt82n6mgsk5mqvmf0kbrghn01.jpg",
        desc: "Coraline encontra uma versão estranha e perigosa de sua própria vida atrás de uma porta secreta."
    }
];

function Home() {
    // ESTADOS
    const [startIndex, setStartIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(""); // "participar" ou "agenda"
    const visibleCount = 5;

    // FUNÇÕES DO MODAL
    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    // LÓGICA DO SLIDER (CARROSSEL)
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
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:ital,wght@0,700;1,400&family=Poppins:wght@500;700&display=swap" rel="stylesheet" />

            {/* Banner Principal */}
            <img src="/banner-principal.jpg" alt="Bem-vindo à JDL Biblioteca" className="banner" />

            {/* Botões de Ação Rápida */}
            <div className="quick-actions-section">
                <Link to="/renovar" className="quick-action-btn btn-renew">Renovar Empréstimo</Link>
                <Link to="/reservar" className="quick-action-btn btn-reserve">Reservar Livro</Link>
            </div>

            {/* Seção de Gêneros / Categorias */}
            <div className="generos">
                <h1 className='titulo-genero'>Categorias de Livros</h1>

                <div className="slider" style={{ '--width': '160px', '--height': '160px', '--quantity': '8', '--duration': '40s', maxWidth: '1600px', margin: '0 auto' }}>
                    <div className="list">
                        <div className="item" style={{ '--position': 1 }}><Link to="/catalogo?categoria=Fantasia"><div className="card"><div className="image_container"><img src="/image-fantasia.png" alt="Fantasia" className="image-fantasia" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 2 }}><Link to="/catalogo?categoria=HQs"><div className="card"><div className="image_container"><img src="/image-hq-manga.png" alt="HQs" className="image-fantasia" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 3 }}><Link to="/catalogo?categoria=Drama"><div className="card"><div className="image_container"><img src="/image-amor-drama.png" alt="Drama" className="image-fantasia" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 4 }}><Link to="/catalogo?categoria=Mistério"><div className="card"><div className="image_container"><img src="/image-misterio-investigacao.png" alt="Mistério" className="image-fantasia" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 5 }}><Link to="/catalogo?categoria=Poesia"><div className="card"><div className="image_container"><img src="/image-poesias-cronicas.png" alt="Poesia" className="image-fantasia" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 6 }}><Link to="/catalogo?categoria=Aventura"><div className="card"><div className="image_container"><img src="/image-aventura.png" alt="Aventura" className="image-fantasia" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 7 }}><Link to="/catalogo?categoria=Literatura"><div className="card"><div className="image_container"><img src="/image-literaturabrasileira.png" alt="Literatura" className="image-fantasia" /></div></div></Link></div>
                        <div className="item" style={{ '--position': 8 }}><Link to="/catalogo?categoria=Biografia"><div className="card"><div className="image_container"><img src="/image-biografias.png" alt="Biografia" className="image-fantasia" /></div></div></Link></div>
                    </div>
                </div>

                {/* Livros em Destaque */}
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
                            </div>
                        ))}
                    </div>
                </div>

                {/* Seção de Regras */}
                <div className="library-info-section">
                    <div className="library-info-header">
                        <h2>Regras e Serviços da Biblioteca</h2>
                        <p>Fique por dentro das regras de empréstimo e benefícios</p>
                    </div>
                    <div className="library-info-grid">
                        <div className="library-info-card">
                            <h3>Limite de Empréstimo</h3>
                            <p>Até 3 livros por vez. Renovação disponível se não houver reserva.</p>
                        </div>
                        <div className="library-info-card">
                            <h3>Valor da Diária</h3>
                            <p>Multa de R$ 0,25 por dia de atraso. Mantenha suas leituras em dia!</p>
                        </div>
                        <div className="library-info-card">
                            <h3>Tempo de Empréstimo</h3>
                            <p>Prazo de 14 dias, renovável por mais 7 dias.</p>
                        </div>
                        <div className="library-info-card">
                            <h3>Serviços Extras</h3>
                            <p>Reserva online, Wi-Fi liberado e espaço para estudos em grupo.</p>
                        </div>
                    </div>
                </div>

                {/* Clube do Livro */}
                <section className="clube-livro-section">
                    <div className="clube-livro-container">
                        <div className="clube-livro-image-area">
                            <div className="decorator-box"></div>
                            <img src="https://scontent-gru2-1.xx.fbcdn.net/v/t51.82787-15/568882018_18489359881073081_7081161621605463211_n.webp?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=-eeG9vz-03sQ7kNvwGDUgGt&_nc_oc=AdoRJBjyWL0OsI1gwMg-WmIBG6ktbJ4-SJx1zv8Imsbl5KN0GUAI7yodEOy77lukRAQ&_nc_zt=23&_nc_ht=scontent-gru2-1.xx&_nc_gid=GymyV_0ccvq0n6MX4xYYYQ&_nc_ss=7a389&oh=00_Af2AuAiscdTsqObpnmtRYJZjLk64vjWh1aM06D9Un4166A&oe=69DA9DAA" alt="Clube" className="clube-livro-img" />
                        </div>
                        <div className="clube-livro-content">
                            <h2 className="clube-livro-title">Faça parte do nosso <br /><span className="clube-livro-highlight">Clube do Livro</span></h2>
                            <p className="clube-livro-text">Conecte-se com outros leitores apaixonados. Nossos encontros são semanais!</p>
                            <div className="clube-livro-actions">
                                <button onClick={() => openModal("participar")} className="btn-clube-primary">Participar Agora</button>
                                <button onClick={() => openModal("agenda")} className="btn-clube-outline">Ver Próximas Leituras</button>
                            </div>
                            <div className="clube-livro-footer"><span className="dot-active"></span> Terças e Sextas, às 19h</div>
                        </div>
                    </div>
                </section>
            </div>

            {/* MODAL (Só aparece se isModalOpen for true) */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>&times;</button>
                        <h2>{modalType === "participar" ? "Inscrição Clube do Livro" : "Agenda de Leituras"}</h2>
                        <p>Deixe seu contato para enviarmos tudo por e-mail!</p>

                        <form action="https://api.staticforms.xyz/submit" method="post">
                            {/* SUBSTITUA PELA SUA CHAVE ABAIXO */}
                            <input type="hidden" name="accessKey" value="sf_4156f109abaca6a3b983318b" />
                            <input type="hidden" name="subject" value={`Interesse: ${modalType}`} />

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