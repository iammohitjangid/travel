import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
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

const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

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

