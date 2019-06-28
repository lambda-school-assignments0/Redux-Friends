import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import styles
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import redux dependencies
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// import logger
import logger from 'redux-logger';

// import reducers
import rootReducer from './reducers';

// create store
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
    );

// render to root
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
    );