import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export { default as Navigation } from "./base-components/Navigation/Navigation";
export { default as Home } from "./pages/Home/Home";
export { default as About } from "./pages/About/About";
export { default as Contact } from "./pages/Contact/Contact";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
