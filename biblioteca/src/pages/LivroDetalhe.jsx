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

  // Dados dos livros (em uma aplicação real, isso viria de uma API)
  const livros = [
    // Romance
    { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis', categoria: 'Romance', capa: 'https://i.pinimg.com/1200x/cb/b5/ac/cbb5ac9e879c51ef9117b784026a1f2b.jpg', editora: 'Companhia das Letras', ano: 1899, paginas: 208, resumo: 'Romance psicológico que narra a história de Bentinho e Capitu, explorando temas como ciúme, traição e a natureza humana. A narrativa é contada em primeira pessoa pelo protagonista, criando uma atmosfera de dúvida e suspeita ao longo da obra.' },
    { id: 2, titulo: 'Capitães da Areia', autor: 'Jorge Amado', categoria: 'Romance', capa: 'https://i.pinimg.com/736x/6d/56/b3/6d56b309afc1bd531d76fd284d030be3.jpg', editora: 'Companhia das Letras', ano: 1937, paginas: 256, resumo: 'História de um grupo de meninos abandonados que formam uma gangue na cidade de Salvador. A obra retrata a miséria, a violência e a esperança na Bahia dos anos 1930, com personagens marcantes e uma crítica social profunda.' },
    { id: 3, titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis', categoria: 'Romance', capa: 'https://i.pinimg.com/1200x/f1/52/2e/f1522ee9b09a8aa80e39097d1dadb768.jpg', editora: 'Companhia das Letras', ano: 1881, paginas: 192, resumo: 'Narrativa inovadora contada por um defunto, satirizando a sociedade brasileira do século XIX. O romance filosófico explora temas como a morte, a vaidade humana e as convenções sociais através de um narrador não confiável.' },
    { id: 4, titulo: 'Quincas Borba', autor: 'Machado de Assis', categoria: 'Romance', capa: 'https://i.pinimg.com/736x/d0/66/02/d0660246a95fcfe2ad7bac4d9e38e6c1.jpg', editora: 'Companhia das Letras', ano: 1891, paginas: 224, resumo: 'Romance filosófico que explora ideias do humanitismo através das vidas de Rubião e Quincas Borba. A obra critica o positivismo e a sociedade brasileira, misturando humor, loucura e reflexão filosófica.' },
    { id: 5, titulo: 'Iracema', autor: 'José de Alencar', categoria: 'Romance', capa: 'https://i.pinimg.com/736x/f5/62/fb/f562fb4f1d0c8d4e582184a6d0469752.jpg', editora: 'Companhia das Letras', ano: 1865, paginas: 176, resumo: 'Romance indianista que narra o amor entre Iracema, filha de um chefe tabajara, e Martim, um português. A obra simboliza o encontro entre o índio e o colonizador, com uma linguagem poética e elementos românticos.' },
    { id: 6, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', categoria: 'Romance', capa: 'https://i.pinimg.com/736x/bb/d0/2e/bbd02e95af990363cb7037e1dd1414d6.jpg', editora: 'Penguin Classics', ano: 1813, paginas: 432, resumo: 'Clássico da literatura inglesa que satiriza os costumes sociais e o casamento na Inglaterra do século XIX. A história de Elizabeth Bennet e Mr. Darcy explora temas de classe, orgulho e preconceito.' },

    // Fantasia
    { id: 7, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', categoria: 'Fantasia', capa: 'https://i.pinimg.com/1200x/af/24/f9/af24f9cf0942c17966cd15ab8bb73cf1.jpg', editora: 'Rocco', ano: 1997, paginas: 208, resumo: 'Primeiro livro da saga Harry Potter, onde um menino descobre ser um bruxo e inicia sua jornada em Hogwarts. A obra introduz o mundo mágico e estabelece os temas de amizade, coragem e luta entre o bem e o mal.' },
    { id: 8, titulo: 'Percy Jackson e o Ladrão de Raios', autor: 'Rick Riordan', categoria: 'Fantasia', capa: 'https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg', editora: 'Intrínseca', ano: 2005, paginas: 400, resumo: 'Percy Jackson descobre ser filho de Poseidon e embarca em uma aventura para recuperar o raio de Zeus. A série mistura mitologia grega com elementos modernos, criando uma narrativa empolgante e educativa.' },
    { id: 9, titulo: 'Senhor dos Anéis - A Sociedade do Anel', autor: 'J.R.R. Tolkien', categoria: 'Fantasia', capa: 'https://i.pinimg.com/736x/bb/f8/ad/bbf8ad84fed4fcca7cdf2caac291c411.jpg', editora: 'Martins Fontes', ano: 1954, paginas: 576, resumo: 'Primeiro volume da trilogia O Senhor dos Anéis, onde Frodo recebe a missão de destruir o Anel do Poder. A obra estabelece o universo da Terra-Média e seus habitantes, com temas épicos de poder e corrupção.' },
    { id: 10, titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', categoria: 'Fantasia', capa: 'https://i.pinimg.com/1200x/b9/db/fb/b9dbfb358fba4e023cd39f038dd2644d.jpg', editora: 'Martins Fontes', ano: 1937, paginas: 336, resumo: 'Aventura de Bilbo Bolseiro, um hobbit que é arrastado para uma jornada épica com anões. A obra é uma prequela do Senhor dos Anéis e introduz elementos fundamentais do universo tolkieniano.' },
    { id: 11, titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez', categoria: 'Fantasia', capa: 'https://i.pinimg.com/1200x/3e/c8/bf/3ec8bf13867398d10c0f99860aa3d644.jpg', editora: 'Record', ano: 1967, paginas: 448, resumo: 'Saga da família Buendía na cidade fictícia de Macondo, misturando realismo mágico e história. A obra explora temas de solidão, destino e a repetição da história familiar.' },
    { id: 12, titulo: 'Grande Sertão: Veredas', autor: 'João Guimarães Rosa', categoria: 'Fantasia', capa: 'https://i.pinimg.com/736x/39/ed/72/39ed72b62dbc0fc90e269ef90627ee34.jpg', editora: 'Nova Fronteira', ano: 1956, paginas: 608, resumo: 'Romance complexo ambientado no sertão brasileiro, narrado por Riobaldo. A obra mistura linguagem poética, filosofia e elementos míticos em uma narrativa não-linear.' },

    // Infantil
    { id: 13, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', categoria: 'Infantil', capa: 'https://i.pinimg.com/1200x/db/a9/5f/dba95f65f272d72461c40541d0c8d33b.jpg', editora: 'Agir', ano: 1943, paginas: 96, resumo: 'Fábula filosófica sobre um príncipe que viaja por diferentes planetas aprendendo lições sobre a vida. A obra combina elementos infantis com reflexões profundas sobre amizade, amor e responsabilidade.' },
    { id: 14, titulo: 'O Meu Pé de Laranja Lima', autor: 'José Mauro de Vasconcelos', categoria: 'Infantil', capa: 'https://i.pinimg.com/1200x/a8/46/2d/a8462d781540719280d62ca4ee42c537.jpg', editora: 'Melhoramentos', ano: 1968, paginas: 192, resumo: 'História autobiográfica de um menino pobre que encontra amizade em uma árvore de laranja. A obra retrata a infância no Brasil dos anos 1930 com ternura e realismo.' },
    { id: 15, titulo: 'Sítio do Picapau Amarelo', autor: 'Monteiro Lobato', categoria: 'Infantil', capa: 'https://i.pinimg.com/736x/2e/9d/2e/2e9d2e56c43e76577eaee22a32fdfb51.jpg', editora: 'Brasiliense', ano: 1920, paginas: 128, resumo: 'Aventuras da boneca Emília e seus amigos no sítio encantado. A obra mistura fantasia, educação e crítica social através de personagens cativantes.' },

    // Mistério
    { id: 16, titulo: 'Assassinato no Expresso do Oriente', autor: 'Agatha Christie', categoria: 'Mistério', capa: 'https://i.pinimg.com/736x/d7/50/09/d750099c9c075b670f33a00bb935aca9.jpg', editora: 'Nova Fronteira', ano: 1934, paginas: 256, resumo: 'Hercule Poirot investiga um assassinato a bordo do luxuoso trem Expresso do Oriente. A obra é um clássico do gênero whodunit com reviravoltas surpreendentes.' },
    { id: 17, titulo: 'O Código Da Vinci', autor: 'Dan Brown', categoria: 'Mistério', capa: 'https://i.pinimg.com/1200x/35/54/91/355491e1e2b2df931a44458f8e192c4a.jpg', editora: 'Sextante', ano: 2003, paginas: 480, resumo: 'Robert Langdon e Sophie Neveu desvenda mistérios relacionados ao Santo Graal. A obra mistura thriller, história e teoria da conspiração em uma narrativa frenética.' },
    { id: 18, titulo: 'Sherlock Holmes - Um Estudo Escarlate', autor: 'Arthur Conan Doyle', categoria: 'Mistério', capa: 'https://i.pinimg.com/736x/2c/bd/41/2cbd41cd5d85beb9f0321a09443296e1.jpg', editora: 'Zahar', ano: 1887, paginas: 224, resumo: 'Primeira aventura do detetive Sherlock Holmes e seu amigo Dr. Watson. A obra estabelece os personagens e o método dedutivo que caracterizam a série.' },
    { id: 19, titulo: 'Um de Nós Está Mentindo', autor: 'Karen M. McManus', categoria: 'Mistério', capa: 'https://m.media-amazon.com/images/I/81r6K6pVipL._AC_UF1000,1000_QL80_.jpg', editora: 'Rocco', ano: 2017, paginas: 368, resumo: 'Cinco estudantes entram em detenção, mas apenas quatro saem vivos. Todos são suspeitos. A obra explora temas de bullying, segredos e justiça através de múltiplas perspectivas.' },

    // Ficção Científica
    { id: 20, titulo: 'Fundação', autor: 'Isaac Asimov', categoria: 'Ficção Científica', capa: 'https://editoraaleph.com.br/cdn/shop/files/capas_site_700x1000_Fundacao.png?v=1714169773&width=1200', editora: 'Aleph', ano: 1951, paginas: 256, resumo: 'Primeiro livro da série Fundação, sobre a queda e reconstrução do Império Galáctico. A obra utiliza conceitos de psicohistória para prever o futuro da humanidade.' },
    { id: 21, titulo: '1984', autor: 'George Orwell', categoria: 'Ficção Científica', capa: 'https://i.pinimg.com/736x/84/53/49/84534989671c960ce66e724246527fd8.jpg', editora: 'Companhia das Letras', ano: 1949, paginas: 336, resumo: 'Distopia sobre um regime totalitário que controla todos os aspectos da vida. A obra alerta sobre os perigos do autoritarismo e da vigilância massiva.' },
    { id: 22, titulo: 'Eu, Robô', autor: 'Isaac Asimov', categoria: 'Ficção Científica', capa: 'https://i.pinimg.com/1200x/60/95/cc/6095cca1e31548954af2605b382f034f.jpg', editora: 'Aleph', ano: 1950, paginas: 256, resumo: 'Coletânea de contos sobre robôs e as Três Leis da Robótica. As histórias exploram dilemas éticos e filosóficos sobre inteligência artificial.' },
    { id: 23, titulo: 'Duna', autor: 'Frank Herbert', categoria: 'Ficção Científica', capa: 'https://i.pinimg.com/1200x/03/4a/f3/034af376ad179d85a965ebb0a7e937b3.jpg', editora: 'Aleph', ano: 1965, paginas: 688, resumo: 'Épica ambientada no planeta deserto Arrakis, onde se encontra a substância mais valiosa do universo. A obra explora temas de ecologia, religião e poder.' },

    // Literatura Brasileira
    { id: 24, titulo: 'Vidas Secas', autor: 'Graciliano Ramos', categoria: 'Literatura Brasileira', capa: 'https://i.pinimg.com/736x/ab/88/70/ab8870426d5d0e7ec25b690efddb9c93.jpg', editora: 'Record', ano: 1938, paginas: 176, resumo: 'Romance sobre a vida miserável de uma família de retirantes no sertão nordestino. A obra retrata a seca, a fome e a luta pela sobrevivência com linguagem seca e objetiva.' },
    { id: 25, titulo: 'A Hora da Estrela', autor: 'Clarice Lispector', categoria: 'Literatura Brasileira', capa: 'https://m.media-amazon.com/images/I/51BofHhKUEL._SX342_SY445_ML2_.jpg', editora: 'Rocco', ano: 1977, paginas: 96, resumo: 'Último romance de Clarice Lispector, narrado por Rodrigo S.M., sobre a nordestina Macabéa. A obra explora temas de identidade, solidão e a criação literária.' },
    { id: 26, titulo: 'O Cortiço', autor: 'Aluísio Azevedo', categoria: 'Literatura Brasileira', capa: 'https://i.pinimg.com/736x/1d/1a/6c/1d1a6c4895688dd28327e7a7e21f0756.jpg', editora: 'Companhia das Letras', ano: 1890, paginas: 304, resumo: 'Romance naturalista que retrata a vida no cortiço Cabeça de Porco, no Rio de Janeiro. A obra critica a imigração e as condições de vida na capital.' },
    { id: 27, titulo: 'O Alienista', autor: 'Machado de Assis', categoria: 'Literatura Brasileira', capa: 'https://i.pinimg.com/736x/9e/3f/c0/9e3fc0bba682fa3ed424fe2f73d24f58.jpg', editora: 'Companhia das Letras', ano: 1882, paginas: 112, resumo: 'Conto satírico sobre um médico que classifica a população de uma cidade como louca. A obra critica a psiquiatria e o poder médico na sociedade.' },

    // Drama
    { id: 28, titulo: 'Romeu e Julieta', autor: 'William Shakespeare', categoria: 'Drama', capa: 'https://i.pinimg.com/1200x/ef/dc/63/efdc634c5560d506d470bf182b5a9d47.jpg', editora: 'Penguin Classics', ano: 1597, paginas: 336, resumo: 'Tragédia clássica sobre o amor proibido entre dois jovens de famílias rivais. A obra explora temas de amor, ódio, destino e conflito familiar.' },
    { id: 29, titulo: 'O Fantasma da Ópera', autor: 'Gaston Leroux', categoria: 'Drama', capa: 'https://i.pinimg.com/736x/4c/2c/2f/4c2c2fe369c5036f7aecf50dfd055a99.jpg', editora: 'L&PM', ano: 1910, paginas: 272, resumo: 'Mistério romântico sobre um fantasma que assombra a Ópera de Paris. A obra combina elementos de horror, romance e música em uma narrativa envolvente.' },
    { id: 30, titulo: 'Hamlet', autor: 'William Shakespeare', categoria: 'Drama', capa: 'https://i.pinimg.com/736x/c3/b2/fc/c3b2fc513e43e5118911967ea2e78078.jpg', editora: 'Penguin Classics', ano: 1603, paginas: 352, resumo: 'Príncipe da Dinamarca busca vingar a morte de seu pai. A obra é considerada uma das maiores tragédias do teatro mundial.' },
    { id: 31, titulo: 'O Auto da Compadecida', autor: 'Ariano Suassuna', categoria: 'Drama', capa: 'https://i.pinimg.com/1200x/a3/26/7d/a3267d75ec3030a94cbd2d17e0accba9.jpg', editora: 'Nova Fronteira', ano: 1955, paginas: 208, resumo: 'Auto paraibano que mistura elementos do cordel com o teatro popular brasileiro. A obra satiriza a sociedade nordestina através de personagens folclóricos.' },

    // Poesia
    { id: 32, titulo: 'Claro Enigma', autor: 'Carlos Drummond de Andrade', categoria: 'Poesia', capa: 'https://i.pinimg.com/736x/e5/68/ee/e568eefea50d8f350bbbc2cd47830e14.jpg', editora: 'Companhia das Letras', ano: 1951, paginas: 128, resumo: 'Poesia moderna brasileira que explora temas existenciais e sociais. A obra representa um marco na poesia contemporânea brasileira.' },
    { id: 33, titulo: 'Mensagem', autor: 'Fernando Pessoa', categoria: 'Poesia', capa: 'https://i.pinimg.com/736x/4a/f2/38/4af238d545a78d318e195f5e74195865.jpg', editora: 'Companhia das Letras', ano: 1934, paginas: 96, resumo: 'Poema épico português escrito sob o heterônimo de Álvaro de Campos. A obra celebra a história e o destino de Portugal.' },
    { id: 34, titulo: 'Viagens na Minha Terra', autor: 'Almeida Garrett', categoria: 'Poesia', capa: 'https://i.pinimg.com/736x/13/32/c4/1332c4e592653553827846bd2392a2cd.jpg', editora: 'Livraria Garnier', ano: 1846, paginas: 320, resumo: 'Viagem poética e romântica através de Portugal. A obra combina prosa e verso em uma narrativa de viagem e reflexão.' },
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
                📚 Reservar Este Livro
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
