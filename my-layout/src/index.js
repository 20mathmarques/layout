import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './Home';
import ModalMobile from './components/ModalMobile/ModalMobile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* fazer validação de tamanho */}
    <ModalMobile/> 
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
