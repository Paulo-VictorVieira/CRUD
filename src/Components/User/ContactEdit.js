import React from 'react';
import ContactContext from '../../Context/ContactContext';

const ContactEdit = () => {
  const contactContext = React.useContext(ContactContext);
  const { current, clearCurrent, updateContact } = contactContext;

  React.useEffect(() => {
    if (current !== null) {
      setUser(current);
    }
  }, [current]);

  const [user, setUser] = React.useState(current);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleCheck = () => {
    updateContact(user);
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };
  const editTable = (
    <>
      <tr>
        <td>{user.id}</td>
        <td>
          <input
            type="text"
            id="input-value"
            name="nome"
            value={user.nome}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="email"
            id="input-value"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </td>
        <td>
          <button onClick={handleCheck}>
            <i className="fas fa-check"></i>
          </button>
          <button className="deleteBtn" onClick={() => clearCurrent()}>
            <i className="fas fa-times"></i>
          </button>
        </td>
      </tr>
    </>
  );
  return <>{editTable}</>;
};

export default ContactEdit;
