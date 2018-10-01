import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { cartReducer } from "./reducers/cartReducers";
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(cartReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> ,
    document.getElementById('root')
);
registerServiceWorker();
