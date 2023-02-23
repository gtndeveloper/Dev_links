import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
        --primaryColor: #692CD3;
    }

    ::selection {
        background-color: var(--primaryColor);
        color: #fff;
    }

    ::-webkit-scrollbar {
        width: .5rem;
        background: #121212;
    }

    * {
        margin: 0;
        padding: 0;

        outline: none;
        resize: none;
        user-select: none;
        box-sizing: border-box;
        
        color: #fff;
        border: none;
    }

    button,
    [type="button"] {
        cursor: pointer;

        display: grid;
        place-items: center;
    }

    body, 
    #root {
        height: 100vh;
        width: 100vw;

        overflow-x: hidden;
        overflow-y: auto;

        background-color: #101010;
    }
`;
