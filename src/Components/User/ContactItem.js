import React from 'react';
import ContactContext from '../../Context/ContactContext';

const ContactItem = ({ contact }) => {
  const contactContext = React.useContext(ContactContext);
  const { setCurrent, deleteContact } = contactContext;

  const { id, nome, email } = contact;

  const handleDelete = () => {
    deleteContact(id);
  };

  const table = (
    <>
      <tr>
        <td>{id}</td>
        <td>
          <input type="text" id="input-value" value={nome} />
        </td>
        <td>
          <input type="email" id="input-value" value={email} />
        </td>
        <td>
          <button
            className="editBtn"
            onClick={() => {
              console.log(contact);
              setCurrent(contact);
            }}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button className="deleteBtn" onClick={handleDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </>
  );

  return <>{table}</>;
};

export default ContactItem;
