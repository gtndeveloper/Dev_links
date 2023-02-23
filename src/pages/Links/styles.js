import styled from "styled-components";

export const Main = styled.main`
    position: relative;
    padding-inline: 2rem;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(235.77deg, rgba(0, 0, 0, 0.2) 54.79%, rgba(0, 130, 255, 0.1) 155%), rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;

    width: 29rem;
    height: 39rem;

    // TOPO DA PÁGINA
    & header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        & img {
            max-width: 8rem;
            border-radius: 100%;
        }

        & h3 {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 18px;

            color: #FFFFFF;
        }
    }

    // SESSÃO DE CARDS
    & section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 0.8rem;
        
        width: 100%;

        & > a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;

            text-decoration: none;

            width: 100%;
            height: 4.6rem;

            background: rgba(65, 65, 65, 0.06);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 0.3rem;

            font-family: 'Roboto';
            font-weight: 400;
            font-size: 1.3rem;
            color: #FFFFFF;

            transition: all .3s linear;

            &:hover {
                background: rgba(65, 65, 65, 0.15);
            }
        }

        & a#special {
            background: rgba(0, 50, 109, 0.33);
            border: 2px solid rgba(0, 117, 255, 0.6);

            cursor: pointer;

            &:hover {
                background: rgba(0, 50, 109, 0.4);
            }
        }
    }

    // RODAPÉ DA PÁGINA

    & footer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3rem;

        width: 12.3rem;

        & svg {
            cursor: pointer;
            transition: all .3s;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
`;