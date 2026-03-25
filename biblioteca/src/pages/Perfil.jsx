import './Perfil.css';

export default function Perfil({ aluno }) {
  if (!aluno) {
    return (
      <div className="container">
        <div className="perfil-box">
          <p>Carregando informações do perfil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="perfil-box">

        <div className="perfil-header">
          <img src="/perfil1.png" alt="Perfil" className="avatar" />
          <h1>{aluno.nome}</h1>
          <p>{aluno.email}</p>
        </div>

        <div className="perfil-info">
          <h2>Informações do Aluno</h2>
          <p><strong>Matrícula:</strong> {aluno.matricula}</p>
          <p><strong>Curso:</strong> {aluno.curso}</p>
          <p><strong>Turma:</strong> {aluno.turma}</p>
        </div>

        <div className="perfil-section">
          <h2>Livros Reservados</h2>
          <ul>
            {aluno.livrosReservados?.map((livro, index) => (
              <li key={index}>{livro}</li>
            ))}
          </ul>
        </div>

        <div className="perfil-section">
          <h2>Livros Favoritos</h2>
          <ul>
            {aluno.livrosFavoritos?.map((livro, index) => (
              <li key={index}>{livro}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}