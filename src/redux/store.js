import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contacts from './phonebook/contacts-reducer';
import { filter } from './phonebook/filter-reducer';

const rootReducer = combineReducers({
  allcont: contacts,
  filter: filter,
});

// const contacts = [
//   {
//     id: '',
//     name: 'Pug',
//     number: '435-10-23',
//     completed: false,
//     filter: '',
//   },
// ];

// const reducer = (state = contacts, { type, payload }) => {
//   switch (type) {
//     case ADD:
//       if (state.find(contact => contact.name === payload.name)) {
//         return alert(`${payload.name} is already in contacts.`);
//       } else {
//         return [...state, payload];
//       }

//     case TOGGLE_COMPLETED:
//       return state.map(contact =>
//         contact.id === payload.contactId
//           ? { ...contact, completed: !contact.completed }
//           : contact,
//       );

//     case GET_VISIBLE_CONTACTS:
//       const normalizedFilter = state.filter.filter.toLowerCase().trim();
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedFilter),
//       );
//     // case DELETE:
//     //   state.filter(contact => contact.id !== contactId)

//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

const store = createStore(rootReducer, composeWithDevTools());

export default store;
