import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';
// import { addContact } from './redux/phonebook/phonebook-actions';

// console.log(store);
console.log(store.getState());

// console.log(store.dispatch(addContact()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
