import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import s from './App.module.css';

function App({ contacts }) {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? [
  //     {
  //       id: '',
  //       name: '',
  //       number: '',
  //       completed: false,
  //     },
  //   ],
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const getCompletedContactCount = () => {
    return contacts.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  const totalContactsCount = contacts.length;
  const completeContactsCount = getCompletedContactCount();

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <p className={s.text}>All contacts: {totalContactsCount}</p>
      <p className={s.text}>Number of selected: {completeContactsCount} </p>

      <ContactForm />
      <h2 className={s.mainTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.mainState.contacts,
  };
};

export default connect(mapStateToProps)(App);
