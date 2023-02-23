import React from "react";
import logo from '../../assets/logo.jpeg';
import Card from './components/Card/card'
import Icons from "./components/Icons/icons";
import { Main, Container } from "./styles";
import { links } from '../../data/links';

export default () => {
    return (
        <Main>
            <Container>
                <header>
                    <img src={logo} alt="Logo do usuário" />
                    <h3>Murilo Mendes</h3>
                </header>

                <section>
                    {
                        links.map(({ title, href }, key) => (
                            <Card
                                title={title}
                                href={href}
                                key={key}
                            />
                        ))
                    }
                </section>

                <footer>
                    <Icons />
                </footer>
            </Container>
        </Main>
    );
};