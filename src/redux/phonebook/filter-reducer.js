// import { combineReducers } from 'redux';
import { CHANGE_FILTER } from './phonebook-types';

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload.toLowerCase().trim();

    default:
      return state;
  }
};

export { filter };
