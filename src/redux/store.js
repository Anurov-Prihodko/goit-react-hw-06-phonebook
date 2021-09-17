import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contacts from './phonebook/contacts-reducer';
import filter from './phonebook/contacts-reducer';

const rootReducer = combineReducers({
  mainState: contacts,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
