import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import hotelReducer from './reducer'
import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'

const store = createStore(hotelReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
