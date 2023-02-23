import styled from "styled-components";

const Responsive = [
    `
        @media (max-width: 950px) {
            & #content {
                gap: 2rem;

                & header {
                    width: 100%;

                    & div h3 { font-size: 1.5rem; }
                }

                & p { font-size: 1.4rem; }

                & #buttons {
                    width: 100%;
                    flex-direction: column;

                    height: auto;

                    & button,
                    a { width: 100%; }
                }
            }
        }
    `,
    `
        @media (max-width: 654px) {
            max-height: 43rem;
            flex-direction: column;
            
            & > div:not(#content) {
                min-height: 19rem;
                width: 100%;

                & img {
                    width: 100%;
                    min-height: 30rem;

                    position: relative;
                    bottom: 10%;
                }
            }
        }
    `,
    `
        @media (max-width: 398px) {
            gap: 1.2rem;

            & > #content {
                gap: 1rem;

                & header {
                    gap: 0;

                    & > h3 { font-size: 1.7rem; }
                    & div h2 { font-size: 2rem; }
                    & div h3 { line-height: 135%; }
                }

                & > p { font-size: 1.2rem; }
            }
        }
    `,
    `
        @media (max-width: 360px) {
            gap: 1rem;
        }
    `
];

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
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    width: 98rem;
    height: 43rem;

    padding-inline: 2rem;

    & > div:not(#content) {
        height: 100%;
        width: 100%;
        overflow: hidden;

        img {
            max-height: 100%;

            transition: all .25s linear;

            cursor: pointer;

            &:hover {
                transform: scale(1.01);
            }
        }
    }

    & > #content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 1.6rem;

        width: 100%;
        height: auto;

        & header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;

            max-width: 100%;
            width: 36rem;
            height: auto;

            & > h3 {
                font-family: 'Sora', sans-serif;
                font-weight: 400;
                font-size: 2.3rem;

                color: #0075FF;
            }

            & div {
                display: flex;
                flex-direction: column;

                width: 100%;
                height: auto;

                & h2 {
                    font-family: 'Sora', sans-serif;
                    font-weight: 600;
                    font-size: 3.2rem;
                    line-height: 4.2rem;
                }

                & h3 {
                    font-family: 'Poppins';
                    font-weight: 400;
                    font-size: 2rem;
                    line-height: 3rem;

                    color: #F2F2F2;
                }
            }
        }

        & > p {
            font-family: 'Inter', 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 160%;

            color: rgba(255, 255, 255, 0.6);

            max-width: 100%;
        }

        & #buttons {
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            gap: 1rem;

            width: 100%;
            height: 6rem;

           & button, 
           a {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .6rem;

                width: 40%;
                height: 4rem;

                background-color: transparent;
                border-radius: .4rem;

                font-family: 'Poppins';
                font-weight: 500;
                letter-spacing: 0.02em;

                transition: all .5s linear;
                text-decoration: none;
                
                &:nth-child(1) {
                    font-size: 1.6rem;
                    background: #0065FF;

                    &:hover {
                        background: #0055FF;
                    }
                }

                &:nth-child(2) {
                    font-size: 1.5rem;
                    border: 1px solid #0075FF;
                    color: #0075FF;

                    &:hover {
                        background: #0065ff;
                        color: #fff;
                    }
                }
            }
        }
    }

    ${Responsive.map(mq => mq)}
`;