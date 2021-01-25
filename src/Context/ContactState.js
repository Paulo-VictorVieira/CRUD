import React from 'react';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from './types';

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        nome: 'Paulo',
        email: 'paulo@gmail.com',
      },
      {
        id: 2,
        nome: 'Ingrid',
        email: 'ingrid@gmail.com',
      },
    ],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = React.useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = state.contacts.length + 1;
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
