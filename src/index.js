import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Indica from './components/indica/indica';
import Cadastrar from './components/Cadastrar/cadastrar';
import Tabela from './components/Tabela/Tabela';
import App from './App';



import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/indica" element={<Indica />} />
        <Route path="/tabela" element={<Tabela />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

