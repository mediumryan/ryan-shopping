import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// css
import './CSS/index.css';
// components
import ScrollTop from './ScrollTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <RecoilRoot>
                <ScrollTop />
                <App />
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>
);
