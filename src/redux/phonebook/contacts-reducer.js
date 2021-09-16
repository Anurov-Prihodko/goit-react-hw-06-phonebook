import { combineReducers } from 'redux';
import {
  ADD,
  DELETE,
  TOGGLE_COMPLETED,
  CHANGE_FILTER,
  GET_VISIBLE_CONTACTS,
  GET_COMPLETED,
} from './phonebook-types';

const contactsArray = [
  {
    id: '',
    name: '',
    number: '',
    completed: false,
  },
];

const contacts = (state = contactsArray, { type, payload }) => {
  switch (type) {
    case ADD:
      if (state.find(contact => contact.name === payload.name)) {
        return alert(`${payload.name} is already in contacts.`);
      } else {
        return [...state, payload];
      }

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
});

// export { contacts };
