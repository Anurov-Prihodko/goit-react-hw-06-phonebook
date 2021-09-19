import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import s from './App.module.css';

function App({ totalContactsCount, completeContactsCount }) {
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

App.propTypes = {
  totalContactsCount: PropTypes.number.isRequired,
  completeContactsCount: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  return {
    totalContactsCount: state.mainState.contacts.length,
    completeContactsCount: state.mainState.contacts.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    ),
  };
};

export default connect(mapStateToProps)(App);
