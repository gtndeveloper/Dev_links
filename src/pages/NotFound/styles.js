import styled from 'styled-components';

export const Responsive = [
    `
        @media (max-width: 940px) {
            & #content #buttons {
                width: 100%;
                flex-direction: column;

                height: auto;

                & button {
                    width: 100%;
                }
            }
        }
    `,
    `
        @media (max-width: 750px) {
            flex-direction: column;
            gap: 0;

            height: auto;
            max-width: 100%;

            & #content {
                height: auto;
            }

            & img {
                max-height: 32rem;
            }
        }
    `,
    `
    @media (max-width: 412px) {
        & #content {
            gap: 2rem;

            & > div:nth-child(1):not(#buttons) {
                    & img {

                    }
                    & h2 {
                        margin-block-end: 1rem;
                        font-size: 2.2rem;
                        line-height: 150%;
                    }

                    & p {
                        line-height: 110%;
                        font-size: 1.4rem;

                        max-width: 80%;
                    }
                }
            }
        }

        & img {
            max-height: 28rem;
        }
    `,

    `
        @media (max-width: 375px) {
            & img {
                max-height: 25rem;
            }
        }
    `
]

export const Main = styled.main`
    position: relative;
    padding-inline: 5rem;

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
    gap: 2.3rem;

    padding: 0px;

    width: 100rem;
    height: 37rem;

    & > img {
        max-height: 100%;
    }

    & #content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 4rem;
        
        padding: 0px;

        max-width: 59rem;
        height: 17rem;

        & > div:nth-child(1):not(#buttons) {
            width: 100%;
            font-family: 'Poppins', sans-serif;

            & h2 {
                font-weight: 700;
                font-size: 2.8rem;
                line-height: 4.3rem;

                color: #FFFFFF;
                width: 100%;
            }

            & p {
                max-width: 60%;

                font-family: 'Poppins';
                font-weight: 500;
                font-size: 1.6rem;
                line-height: 2.4rem;

                color: rgba(255, 255, 255, 0.5);
            }
        }

        & #buttons {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0px;
            gap: 1.8rem;

            width: 62%;
            height: 4.1rem;

            & button {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .6rem;

                width: 48%;
                height: 4rem;

                background-color: transparent;
                border-radius: .4rem;

                font-family: 'Poppins';
                font-weight: 500;
                letter-spacing: 0.02em;

                transition: all .5s linear;
                
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

    ${Responsive.map(mq => mq)} // return media querys
`