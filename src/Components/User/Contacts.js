import React from 'react';
import ContactContext from '../../Context/ContactContext';
import ContactEdit from './ContactEdit';
import ContactFilter from './ContactFilter';
import ContactForm from './ContactForm';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = React.useContext(ContactContext);
  const { contacts, current, filtered } = contactContext;

  const showCurrent = (
    <>
      {current === null ? (
        contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      ) : (
        <ContactEdit />
      )}
    </>
  );

  const showFiltered = (
    <>
      {filtered &&
        filtered.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </>
  );

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
          <ContactFilter />
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{filtered !== null ? showFiltered : showCurrent}</tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Contacts;
