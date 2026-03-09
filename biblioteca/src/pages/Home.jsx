import '../pages/Home.css';
import Header from '../components/Header';

function Home() {
    return (
        <div>
            <Header />
            
            {/* Banner Principal */}
            <img src="/banner-principal.png" alt="Bem-vindo à JDL Biblioteca" className="banner" />
            
            {/* Seção de Gêneros */}
            <div className="generos">
                <h1 className='titulo-genero'>Gêneros</h1>
                {/* Card 1: Fantasia */}
                <a href="/catalogo/fantasia" className="card-link">
                    <div className="card">
                        <div className="image_container">
                            <img src="/image-fantasia.png" alt="Gênero Fantasia" className="image-fantasia" />
                        </div>
                    </div>
                </a>

                {/* Card 2: HQ e Manga */}
                <a href="/catalogo/hqs" className="card-link">
                    <div className="card">
                        <div className="image_container">
                            <img src="/image-hq-manga.png" alt="Gênero HQs e Mangás" className="image-fantasia" />
                        </div>
                    </div>
                </a>

                {/* Card 3: Amor e Drama */}
                <a href="/catalogo/amor" className="card-link">
                    <div className="card">
                        <div className="image_container">
                            <img src="/image-amor-drama.png" alt="Gênero Amor e Drama" className="image-fantasia" />
                        </div>
                    </div>
                </a>

                {/* Card 4: Mistério e Investigação */}
                <a href="/catalogo/misterio" className="card-link">
                    <div className="card">
                        <div className="image_container">
                            <img src="/image-misterio-investigacao.png" alt="Gênero Mistério e Investigação" className="image-fantasia" />
                        </div>
                    </div>
                </a>
                {/* Card 5: Poesias e Crônicas*/}
                <a href="/catalogo/poesia" className="card-link">
                    <div className="card">
                        <div className="image_container">
                            <img src="/image-poesias-cronicas.png" alt="Gênero Poesias e Crônicas" className="image-fantasia" />
                        </div>
                    </div>
                </a>
                {/* Card 6: Aventura*/}
                <a href="/catalogo/aventura" className="card-link">
                    <div className="card">
                        <div className="image_container">
                            <img src="/image-aventura.png" alt="Gênero Aventura" className="image-fantasia" />
                        </div>
                    </div>
                </a>
                
            </div>
        </div>
    );
}

export default Home;