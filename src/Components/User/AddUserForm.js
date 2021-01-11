import React from 'react';
import styles from './AddUserForm.module.css';

const AddUserForm = ({ addUser }) => {
  const [user, setUser] = React.useState({ id: null, nome: '', email: '' });

  // setting the values from the input
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  // extracting the values from the state object
  const handleSubmit = (event) => {
    event.preventDefault();

    addUser(user);
    setUser({ id: null, nome: '', email: '' });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Cadastre um Usuário</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="nome" className={styles.label}>
          Nome
        </label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={user.nome}
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          className={styles.input}
        />
        <button className={styles.addBtn}>
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
