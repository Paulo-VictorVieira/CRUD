import React from 'react';
import ContactContext from '../../Context/ContactContext';
import ContactForm from './ContactForm';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = React.useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <>
      <ContactForm />
      {contacts !== null && contacts.length === 0 ? (
        <h4 className="text-center lead text-dark">
          Por favor, adicione um contato
        </h4>
      ) : (
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
                <ContactItem contact={contact} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Contacts;
