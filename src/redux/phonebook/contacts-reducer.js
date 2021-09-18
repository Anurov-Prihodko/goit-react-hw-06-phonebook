import { combineReducers } from 'redux';
import {
  ADD,
  DELETE,
  TOGGLE_COMPLETED,
  CHANGE_FILTER,
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
      if (state.find(({ name }) => name === payload.name)) {
        alert(`${payload.name} is already in contacts.`);
        return [...state];
      }
      return [...state, payload];

    case DELETE:
      return state.filter(({ id }) => id !== payload);

    case TOGGLE_COMPLETED:
      return state.map(contact =>
        contact.id === payload
          ? { ...contact, completed: !contact.completed }
          : contact,
      );

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
