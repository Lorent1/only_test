import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/MainPage';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <div className="app">
      <MainPage />
    </div>
  </React.StrictMode>
);
