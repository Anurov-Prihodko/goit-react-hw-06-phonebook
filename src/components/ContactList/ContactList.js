import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
// import { connect } from 'react-redux';
// import {
//   toggleCompleted,
//   getVisibleContacts,
// } from '../../redux/phonebook/phonebook-actions';

const ContactList = ({ contacts, onDeleteContact, onToggleCompleted }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number, completed }) => (
      <li key={id} className={classNames(s.item, { [s.completed]: completed })}>
        <input
          type="checkbox"
          className={s.checkbox}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className={s.text}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={s.pug}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   onToggleCompleted: contactId => dispatch(toggleCompleted(contactId)),
//   contacts: dispatch(getVisibleContacts()),
// });

// const mapStateToProps = state => {
//   return {
//     contacts: state,
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactList);

export default ContactList;
