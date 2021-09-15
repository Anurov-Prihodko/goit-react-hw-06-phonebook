import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import s from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      {
        id: '',
        name: '',
        number: '',
        completed: false,
      },
    ],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
      completed: false,
    };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts(prevState => [...prevState, contact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  const toggleCompleted = contactId => {
    setContacts(prevState =>
      prevState.map(contact =>
        contact.id === contactId
          ? { ...contact, completed: !contact.completed }
          : contact,
      ),
    );
  };

  const hangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const getCompletedContactCount = () => {
    return contacts.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  const totalContactsCount = contacts.length;
  const visibleContacts = getVisibleContacts();
  const completeContactsCount = getCompletedContactCount();

  return (
    <div className={s.container}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <p className={s.text}>All contacts: {totalContactsCount}</p>
      <p className={s.text}>Number of selected: {completeContactsCount} </p>

      <ContactForm onSubmit={addContact} />
      <h2 className={s.mainTitle}>Contacts</h2>
      <Filter value={filter} onChange={hangeFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
        onToggleCompleted={toggleCompleted}
      />
    </div>
  );
}
