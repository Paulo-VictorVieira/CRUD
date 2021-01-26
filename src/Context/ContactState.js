import React from 'react';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
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

  // Update Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        updateContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
