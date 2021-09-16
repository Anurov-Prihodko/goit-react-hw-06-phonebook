import shortid from 'shortid';
import {
  ADD,
  DELETE,
  TOGGLE_COMPLETED,
  CHANGE_FILTER,
  GET_VISIBLE_CONTACTS,
  GET_COMPLETED,
} from './phonebook-types';

const addContact = (name, number) => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
    completed: false,
  },
});

// const toggleCompleted = contactId => ({
//   type: TOGGLE_COMPLETED,
//   payload: contactId,
// });

export { addContact };

// const getVisibleContacts = () => ({
//   type: GET_VISIBLE_CONTACTS,
//   payload: '',
// });

// const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });
