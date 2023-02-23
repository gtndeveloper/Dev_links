import React from 'react';
import { Main, Container } from './styles';
import perfil from '../../assets/perfil.png'
import { useNavigate } from 'react-router-dom';

export default () => {

  const navigate = useNavigate('');

  return (
    <Main>
      <Container>
        <div>
          <img src={perfil} alt="Perfil Image" />
        </div>
        <div id="content">
          <header>
            <h3>Fala Dev!</h3>
            <div>
              <h2>Murilo Mendes</h2>
              <h3>Frontend Developer & UI Designer</h3>
            </div>
          </header>
          <p>Olá, meu nome é Murilo Mendes, apaixonado por tecnologia, trabalho com desenvolvimento front end, tenho diversos projetos pessoais, e já forneço inúmeras soluções para a comunidade. Gosto de desenvolver interfaces bonitas, atraentes e amigáveis com a intenção de trazer uma boa experiência ao usuário.</p>
          <div id="buttons">
            <button onClick={() => navigate('/links')}>Contatos</button>
            <a
              type="button"
              target="_blank"
              href="https://github.com/gtndeveloper"
            >
              Github
            </a>
          </div>
        </div>
      </Container>
    </Main>
  );
}