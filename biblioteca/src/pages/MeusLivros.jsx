import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './MeusLivros.css';

function MeusLivros() {
  const [livros, setLivros] = useState([]);

  const livrosDisponiveis = [ 
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Literatura", capa: "https://i.pinimg.com/1200x/cb/b5/ac/cbb5ac9e879c51ef9117b784026a1f2b.jpg"},
    { id: 2, titulo: "Capitães da Areia", autor: "Jorge Amado", categoria: "Literatura", capa: "https://i.pinimg.com/736x/5e/42/18/5e4218fba25ee8af9d50b1d4cd457a21.jpg" },
    { id: 3, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Clássico", capa: "https://i.pinimg.com/736x/a5/1c/2e/a51c2e9e6bd2f1662c4f07b2a6386be1.jpg" },
    { id: 4, titulo: "Manual de Assassinato para Boas Garotas", autor: "Holly Jackson", categoria: "Mistério", capa: "https://i.pinimg.com/1200x/16/af/d7/16afd7ec50df7f3e560e5124f6a5811d.jpg" },
    { id: 5, titulo: "A Cantiga dos Pássaros e das Serpentes", autor: "Suzanne Collins", categoria: "Ficção", capa: "https://m.media-amazon.com/images/I/711wgxr7SDL._UF1000,1000_QL80_.jpg" },
    { id: 6, titulo: "Mentirosos", autor: "E. Lockhart", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/71bJYZfcrKL.jpg" },
    { id: 7, titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg" },
    { id: 8, titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg" },
    { id: 9, titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/6132ndvQdiL.jpg" },
    { id: 10, titulo: "Heartstopper", autor: "Alice Oseman", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/8129HX+5JGL.jpg" },
    { id: 11, titulo: "Sombra e Ossos", autor: "Leigh Bardugo", categoria: "Fantasia", capa: "https://i.pinimg.com/736x/80/be/59/80be59ecd08839af3fc7d3916e99ce95.jpg" },
    { id: 12, titulo: "A Piada Mortal", autor: "Alan Moore", categoria: "HQs", capa: "https://i.pinimg.com/736x/06/98/0a/06980af76db316212266b051e8155544.jpg" },
    { id: 13, titulo: "Os Sete Maridos de Evelyn Hugo", autor: "Taylor Jenkins Reid", categoria: "Drama", capa: "https://i.pinimg.com/736x/0e/f0/dd/0ef0dd82fbbaf3a27d8f7796cf86003f.jpg" },
    { id: 14, titulo: "Um de Nós Está Mentindo", autor: "Karen M. McManus", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/81r6K6pVipL._AC_UF1000,1000_QL80_.jpg" },
    { id: 15, titulo: "Antologia Poética", autor: "Vinicius de Moraes", categoria: "Poesia", capa: "https://i.pinimg.com/736x/52/a9/87/52a987ac928afce53a6ba78dae3ae1d4.jpg" },
    { id: 16, titulo: "O Diário de Anne Frank", autor: "Anne Frank", categoria: "Biografia", capa: "https://i.pinimg.com/736x/b5/a3/c6/b5a3c6c04fc8376294f333bc3be481b2.jpg" },
    { id: 17, titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/81qMLIEhMYL.jpg" },
    { id: 18, titulo: "O Homem de Giz", autor: "C.J. Tudor", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/91o6FMAy8UL._AC_UF1000,1000_QL80_.jpg" },
    { id: 19, titulo: "A Rainha Vermelha", autor: "Victoria Aveyard", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/718rKQisF7L.jpg" },
    { id: 20, titulo: "Verity", autor: "Colleen Hoover", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/91SDZ2eUj+L.jpg" },
    { id: 21, titulo: "Torto Arado", autor: "Itamar Vieira Junior", categoria: "Literatura", capa: "https://m.media-amazon.com/images/I/71gXpS2PAgL._AC_UF1000,1000_QL80_.jpg" },
    { id: 22, titulo: "O Sol é Para Todos", autor: "Harper Lee", categoria: "Clássico", capa: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg" },
    { id: 23, titulo: "É Assim que Acaba", autor: "Colleen Hoover", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/9112cWOV-OL._UF1000,1000_QL80_.jpg" }
];

  useEffect(() => {
    const salvas = JSON.parse(localStorage.getItem('minhasReservas') || '[]');
    setLivros(salvas);
  }, []);

  return (
    <div className="meus-livros-wrapper">
      <Header />
      <main className="meus-livros-content">
        <h1>Meus Empréstimos e Reservas</h1>
        <div className="livros-grid">
          {livros.length > 0 ? (
            livros.map((livro, index) => (
              <div key={index} className="livro-item-card">
                <img src={livro.capa} alt={livro.titulo} />
                <div className="livro-item-detalhes">
                  <h3>{livro.titulo}</h3>
                  <p>Status: <span className="badge-status em-dia">Reservado</span></p>
                </div>
              </div>
            ))
          ) : (
            <p className="vazio-msg">Você ainda não reservou nenhum livro.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MeusLivros;