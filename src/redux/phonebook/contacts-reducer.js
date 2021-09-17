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
      if (state.find(({ name }) => name === payload.name)) {
        return alert(`${payload.name} is already in contacts.`);
      } else {
        return [...state, payload];
      }

    case DELETE:
      return state.filter(({ id }) => id !== payload);

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

// export { contacts };
