import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export { default as Navigation } from "./base-components/navigation";
export { default as HomePage } from "./packages/home/src/components/HomePage/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

