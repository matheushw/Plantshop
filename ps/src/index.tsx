import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

export { default as Navigation } from "./base-components/navigation";
export { default as HomePage } from "./packages/home/src/components/HomePage/HomePage";

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

