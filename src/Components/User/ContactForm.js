import React from 'react';
import ContactContext from '../../Context/ContactContext';

const ContactForm = () => {
  const contactContext = React.useContext(ContactContext);
  const { addContact } = contactContext;

  const [contact, setContact] = React.useState({
    id: null,
    nome: '',
    email: '',
  });

  const { nome, email } = contact;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome === '' || email === '') {
      window.alert('Digite um contato !');
    } else {
      addContact(contact);
      setContact({
        id: null,
        nome: '',
        email: '',
      });
    }
  };

  return (
    <div className="wrapper animeLeft">
      <h1 className="text-primary">Cadastre um Contato</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="nome" className="label">
          Nome
        </label>
        <input
          className="input"
          type="text"
          name="nome"
          id="nome"
          value={nome}
          onChange={handleChange}
        />
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
        <button className="addBtn">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
