import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useFavoritos } from '../contexts/FavoritosContext';
import './LivroDetalhe.css';

function LivroDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { adicionarFavorito, isFavorito } = useFavoritos();

  const livros = [
    { 
        id: 1, 
        titulo: "Dom Casmurro", 
        autor: "Machado de Assis", 
        categoria: "Literatura", 
        capa: "https://i.pinimg.com/1200x/cb/b5/ac/cbb5ac9e879c51ef9117b784026a1f2b.jpg",
        editora: 'Companhia das Letras', 
        ano: 1899, 
        paginas: 208, 
        resumo: 'Romance psicológico que narra a história de Bentinho e Capitu, explorando temas como ciúme, traição e a natureza humana.' 
    },
    { 
        id: 2, 
        titulo: "Capitães da Areia", 
        autor: "Jorge Amado", 
        categoria: "Literatura", 
        capa: "https://i.pinimg.com/736x/5e/42/18/5e4218fba25ee8af9d50b1d4cd457a21.jpg",
        editora: 'Companhia das Letras', 
        ano: 1937, 
        paginas: 256, 
        resumo: 'História de um grupo de meninos abandonados que formam uma gangue na cidade de Salvador, retratando a miséria e a esperança.' 
    },
    { 
        id: 3, 
        titulo: "O Pequeno Príncipe", 
        autor: "Antoine de Saint-Exupéry", 
        categoria: "Clássico", 
        capa: "https://i.pinimg.com/736x/a5/1c/2e/a51c2e9e6bd2f1662c4f07b2a6386be1.jpg",
        editora: 'Agir', 
        ano: 1943, 
        paginas: 96, 
        resumo: 'Fábula filosófica sobre um príncipe que viaja por planetas aprendendo lições sobre amizade, amor e responsabilidade.' 
    },
    { 
        id: 4, 
        titulo: "Manual de Assassinato para Boas Garotas", 
        autor: "Holly Jackson", 
        categoria: "Mistério", 
        capa: "https://i.pinimg.com/1200x/16/af/d7/16afd7ec50df7f3e560e5124f6a5811d.jpg",
        editora: 'Intrínseca', 
        ano: 2019, 
        paginas: 448, 
        resumo: 'Uma investigação escolar sobre um crime encerrado cinco anos atrás revela segredos sombrios de uma cidade pequena.' 
    },
    { 
        id: 5, 
        titulo: "A Cantiga dos Pássaros e das Serpentes", 
        autor: "Suzanne Collins", 
        categoria: "Ficção", 
        capa: "https://m.media-amazon.com/images/I/711wgxr7SDL._UF1000,1000_QL80_.jpg",
        editora: 'Rocco', 
        ano: 2020, 
        paginas: 576, 
        resumo: 'Prequela de Jogos Vorazes que narra a juventude de Coriolanus Snow e os primeiros passos de sua ascensão ao poder.' 
    },
    { 
        id: 6, 
        titulo: "Mentirosos", 
        autor: "E. Lockhart", 
        categoria: "Mistério", 
        capa: "https://m.media-amazon.com/images/I/71bJYZfcrKL.jpg",
        editora: 'Seguinte', 
        ano: 2014, 
        paginas: 272, 
        resumo: 'Uma família rica e perfeita, uma ilha particular e um acidente misterioso que esconde uma verdade terrível.' 
    },
    { 
        id: 7, 
        titulo: "Jogos Vorazes", 
        autor: "Suzanne Collins", 
        categoria: "Aventura", 
        capa: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg",
        editora: 'Rocco', 
        ano: 2008, 
        paginas: 400, 
        resumo: 'Em um futuro distópico, jovens lutam pela sobrevivência em um reality show mortal transmitido para toda a nação.' 
    },
    { 
        id: 8, 
        titulo: "Percy Jackson e o Ladrão de Raios", 
        autor: "Rick Riordan", 
        categoria: "Fantasia", 
        capa: "https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg",
        editora: 'Intrínseca', 
        ano: 2005, 
        paginas: 400, 
        resumo: 'Percy descobre ser um semideus filho de Poseidon e parte em uma missão para impedir uma guerra entre os deuses gregos.' 
    },
    { 
        id: 9, 
        titulo: "Extraordinário", 
        autor: "R.J. Palacio", 
        categoria: "Drama", 
        capa: "https://m.media-amazon.com/images/I/6132ndvQdiL.jpg",
        editora: 'Intrínseca', 
        ano: 2012, 
        paginas: 320, 
        resumo: 'A emocionante história de Auggie Pullman, um menino com uma deformidade facial enfrentando os desafios de uma escola regular.' 
    },
    { 
        id: 10, 
        titulo: "Heartstopper", 
        autor: "Alice Oseman", 
        categoria: "Romance", 
        capa: "https://m.media-amazon.com/images/I/8129HX+5JGL.jpg",
        editora: 'Seguinte', 
        ano: 2019, 
        paginas: 288, 
        resumo: 'A história de amor entre Charlie e Nick, explorando as alegrias e dificuldades do amadurecimento e da descoberta sexual.' 
    },
    { 
        id: 11, 
        titulo: "Sombra e Ossos", 
        autor: "Leigh Bardugo", 
        categoria: "Fantasia", 
        capa: "https://i.pinimg.com/736x/80/be/59/80be59ecd08839af3fc7d3916e99ce95.jpg",
        editora: 'Gutenberg', 
        ano: 2012, 
        paginas: 288, 
        resumo: 'Alina Starkov descobre um poder capaz de libertar seu país da Dobra das Sombras e entra no mundo da elite mágica Grisha.' 
    },
    { 
        id: 12, 
        titulo: "A Piada Mortal", 
        autor: "Alan Moore", 
        categoria: "HQs", 
        capa: "https://i.pinimg.com/736x/06/98/0a/06980af76db316212266b051e8155544.jpg",
        editora: 'Panini Comics', 
        ano: 1988, 
        paginas: 64, 
        resumo: 'Uma análise psicológica da relação entre Batman e Coringa, explorando as origens do vilão e os limites da sanidade.' 
    },
    { 
        id: 13, 
        titulo: "Os Sete Maridos de Evelyn Hugo", 
        autor: "Taylor Jenkins Reid", 
        categoria: "Drama", 
        capa: "https://i.pinimg.com/736x/0e/f0/dd/0ef0dd82fbbaf3a27d8f7796cf86003f.jpg",
        editora: 'Paralela', 
        ano: 2017, 
        paginas: 360, 
        resumo: 'Uma lenda de Hollywood decide contar a verdade sobre sua vida glamourosa, escandalosa e os grandes amores que viveu.' 
    },
    { 
        id: 14, 
        titulo: "Um de Nós Está Mentindo", 
        autor: "Karen M. McManus", 
        categoria: "Mistério", 
        capa: "https://m.media-amazon.com/images/I/81r6K6pVipL._AC_UF1000,1000_QL80_.jpg",
        editora: 'Rocco', 
        ano: 2017, 
        paginas: 368, 
        resumo: 'Cinco estudantes entram em detenção, mas apenas quatro saem vivos. Todos guardam segredos que podem incriminá-los.' 
    },
    { 
        id: 15, 
        titulo: "Antologia Poética", 
        autor: "Vinicius de Moraes", 
        categoria: "Poesia", 
        capa: "https://i.pinimg.com/736x/52/a9/87/52a987ac928afce53a6ba78dae3ae1d4.jpg",
        editora: 'Companhia das Letras', 
        ano: 1954, 
        paginas: 336, 
        resumo: 'Uma seleção de poemas que percorre as diversas fases do poetinha, focando no amor, na morte e na amizade.' 
    },
    { 
        id: 16, 
        titulo: "O Diário de Anne Frank", 
        autor: "Anne Frank", 
        categoria: "Biografia", 
        capa: "https://i.pinimg.com/736x/b5/a3/c6/b5a3c6c04fc8376294f333bc3be481b2.jpg",
        editora: 'Record', 
        ano: 1947, 
        paginas: 352, 
        resumo: 'O relato emocionante de uma jovem judia escondida dos nazistas durante a Segunda Guerra Mundial.' 
    },
    { 
        id: 17, 
        titulo: "Corte de Espinhos e Rosas", 
        autor: "Sarah J. Maas", 
        categoria: "Fantasia", 
        capa: "https://m.media-amazon.com/images/I/81qMLIEhMYL.jpg",
        editora: 'Galera Record', 
        ano: 2015, 
        paginas: 434, 
        resumo: 'Após matar um lobo na floresta, Feyre é levada para uma terra mágica por uma criatura bestial para pagar por suas ações.' 
    },
    { 
        id: 18, 
        titulo: "O Homem de Giz", 
        autor: "C.J. Tudor", 
        categoria: "Mistério", 
        capa: "https://m.media-amazon.com/images/I/91o6FMAy8UL._AC_UF1000,1000_QL80_.jpg",
        editora: 'Intrínseca', 
        ano: 2018, 
        paginas: 272, 
        resumo: 'Desenhos de giz estranhos ligam um crime do passado a um presente assustador em um suspense psicológico instigante.' 
    },
    { 
        id: 19, 
        titulo: "A Rainha Vermelha", 
        autor: "Victoria Aveyard", 
        categoria: "Fantasia", 
        capa: "https://m.media-amazon.com/images/I/718rKQisF7L.jpg",
        editora: 'Seguinte', 
        ano: 2015, 
        paginas: 408, 
        resumo: 'Em um mundo dividido pelo sangue, Mare descobre um poder impossível para alguém de seu status e inicia uma revolução.' 
    },
    { 
        id: 20, 
        titulo: "Verity", 
        autor: "Colleen Hoover", 
        categoria: "Mistério", 
        capa: "https://m.media-amazon.com/images/I/91SDZ2eUj+L.jpg",
        editora: 'Galera Record', 
        ano: 2018, 
        paginas: 320, 
        resumo: 'Uma escritora contratada para terminar uma série de livros descobre um manuscrito autobiográfico assustador de sua antecessora.' 
    },
    { 
        id: 21, 
        titulo: "Torto Arado", 
        autor: "Itamar Vieira Junior", 
        categoria: "Literatura", 
        capa: "https://m.media-amazon.com/images/I/71gXpS2PAgL._AC_UF1000,1000_QL80_.jpg",
        editora: 'Todavia', 
        ano: 2019, 
        paginas: 264, 
        resumo: 'Duas irmãs ligadas por um acidente de infância vivem em uma fazenda no sertão, lutando por terra, identidade e justiça.' 
    },
    { 
        id: 22, 
        titulo: "O Sol é Para Todos", 
        autor: "Harper Lee", 
        categoria: "Clássico", 
        capa: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg",
        editora: 'José Olympio', 
        ano: 1960, 
        paginas: 350, 
        resumo: 'Através dos olhos de uma criança, o livro aborda o racismo e a injustiça no sul dos Estados Unidos na década de 1930.' 
    },
    { 
        id: 23, 
        titulo: "É Assim que Acaba", 
        autor: "Colleen Hoover", 
        categoria: "Drama", 
        capa: "https://m.media-amazon.com/images/I/9112cWOV-OL._UF1000,1000_QL80_.jpg",
        editora: 'Galera Record', 
        ano: 2016, 
        paginas: 368, 
        resumo: 'Lily Bloom enfrenta um relacionamento abusivo e precisa encontrar forças para interromper o ciclo de violência.' 
    }
];

  const livro = livros.find(l => l.id === parseInt(id));

  if (!livro) {
    return (
      <div className="livro-detalhe-container">
        <Header />
        <main className="livro-detalhe-content">
          <div className="livro-nao-encontrado">
            <h1>Livro não encontrado</h1>
            <p>O livro que você está procurando não existe em nosso catálogo.</p>
            <Link to="/catalogo" className="btn-voltar">Voltar ao Catálogo</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="livro-detalhe-container">
      <Header />
      <main className="livro-detalhe-content">
        <div className="livro-detalhe-header">
          <button className="btn-voltar-detalhes" onClick={() => navigate(-1)}>
            ← Voltar
          </button>
        </div>

        <div className="livro-detalhe-main">
          <div className="livro-capa-section">
            <img
              src={livro.capa}
              alt={livro.titulo}
              className="livro-capa-grande"
              onError={(e) => e.target.src = '/capa-padrao.png'}
            />
            <button
              className={`favorito-btn-detalhes ${isFavorito(livro.id) ? 'favoritado' : ''}`}
              onClick={() => adicionarFavorito(livro)}
            >
              {isFavorito(livro.id) ? ' Remover dos Favoritos' : ' Adicionar aos Favoritos'}
            </button>
          </div>

          <div className="livro-info-section">
            <div className="livro-titulo-autor">
              <h1>{livro.titulo}</h1>
              <h2>por {livro.autor}</h2>
              <span className="categoria-badge">{livro.categoria}</span>
            </div>

            <div className="livro-detalhes-meta">
              <div className="meta-item">
                <strong>Editora:</strong> {livro.editora}
              </div>
              <div className="meta-item">
                <strong>Ano:</strong> {livro.ano}
              </div>
              <div className="meta-item">
                <strong>Páginas:</strong> {livro.paginas}
              </div>
            </div>

            <div className="livro-resumo">
              <h3>Sinopse</h3>
              <p>{livro.resumo}</p>
            </div>

            <div className="livro-acoes">
              <Link to="/reservar" className="btn-reservar-grande">
                Reservar Este Livro
              </Link>
              <Link to="/favoritos" className="btn-ver-favoritos">
                Ver Meus Favoritos
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LivroDetalhe;
