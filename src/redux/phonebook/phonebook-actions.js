import shortid from 'shortid';
import {
  ADD,
  DELETE,
  TOGGLE_COMPLETED,
  CHANGE_FILTER,
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

const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});

const toggleCompleted = contactId => ({
  type: TOGGLE_COMPLETED,
  payload: contactId,
});

export { addContact, deleteContact, changeFilter, toggleCompleted };
