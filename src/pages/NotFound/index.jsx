import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Main, Container } from './styles';
import Text_404 from '../../assets/Text_404.png';

export default () => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  return (
    <Main>
      <Container>
        <img src={Text_404} alt="Not Found Image" />
        <div id="content">
          <div>
            <h2>Ops! Algo deu errado, Tente novamente.</h2>
            <p>Infelizmente não encontramos a página que você está procurando...</p>
          </div>
          <div id="buttons">
            <button onClick={goToHome}>Voltar</button>
            <button onClick={goToHome}>Página Inicial</button>
          </div>
        </div>
      </Container>
    </Main>
  );
}
