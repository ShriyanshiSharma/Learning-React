import React from 'react';
import ReactDOM from 'react-dom/client';
import './ReactMenu/index.css';
import App from './ReactMenu/App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);