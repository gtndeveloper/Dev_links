import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from "./styleSheets/globalStyle.js";
import Routes from './routes/routes'
// gtn#3696

ReactDOM.createRoot(document.getElementById('root'))
    .render(<>
        <BrowserRouter>
            <Routes />
            <GlobalStyle />
        </BrowserRouter>
    </>);
