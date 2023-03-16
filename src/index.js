import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Pages/Header/Header';
import Main from './Pages/Main/Main';
import Restaurant from './Pages/Restaurant/Restaurant';
import Bar from './Pages/Bar/Bar';
import Uns from './Pages/Uns/Uns';
import Galerie from './Pages/Galerie/Galerie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Restaurant />
    <Bar />
    <Uns />
    <Galerie />
  </React.StrictMode>
);

