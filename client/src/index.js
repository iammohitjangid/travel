import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
//bootstrap

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
//redux setup
import thunk from 'redux-thunk';
import {createStore ,applyMiddleware,combineReducers,compose} from 'redux';
import {Provider } from 'react-redux';
import authReducer from './store/reducer/authReducer';
import locReducer from './store/reducer/locReducer';
import errorReducer from './store/reducer/errorReducer';

const rootReducer = combineReducers({
  auth:authReducer,
  loc:locReducer,
  err:errorReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

