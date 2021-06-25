import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export { default as Navigation } from "./base-components/Navigation/Navigation";
export { default as HomePage } from "./packages/home/src/components/HomePage/HomePage";
export { default as About } from "./pages/About/About";
export { default as Contact } from "./pages/Contact/Contact";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
