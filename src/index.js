import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ModalProvider from './assets/context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);