import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Profile from './components/Profile';
import ModalProvider from './assets/context/ModalContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/components/Profile' element={<Profile/>}/>
          <Route path='*' element={<h2>not found</h2>}/>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>
);