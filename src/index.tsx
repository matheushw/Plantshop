import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './store/reducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import mySaga from './store/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

export { default as Navigation } from "./base-components/navigation";
export { default as HomePage } from "./packages/home/src/components/HomePage/HomePage";

const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 25});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
