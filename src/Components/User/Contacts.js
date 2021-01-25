import React from 'react';
import ContactContext from '../../Context/ContactContext';
import ContactForm from './ContactForm';

const Contacts = () => {
  const contactContext = React.useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <>
      <ContactForm />
      <div className="wrapper animeLeft">
        <h1 className="text-primary">Contatos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.nome}</td>
                <td>{contact.email}</td>
                <td>
                  <button className="editBtn">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="deleteBtn">
                    <i className="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contacts;
