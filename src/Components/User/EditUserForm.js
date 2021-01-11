import React from 'react';
import styles from './EditUserForm.module.css';

const EditUserForm = ({ setEditing, currentUser, updateUser }) => {
  const [user, setUser] = React.useState(currentUser);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(user.id, user);
  };

  React.useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className={styles.wrapper}>
      <h1>Edite um Usuário</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="nome" className={styles.label}>
          Nome
        </label>
        <input
          type="text"
          name="nome"
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
          value={user.email}
          onChange={handleChange}
          className={styles.input}
        />
        <button className={styles.check}>
          <i class="fas fa-check"></i>
        </button>
        <button className={styles.exit} onClick={() => setEditing(false)}>
          <i class="fas fa-times"></i>
        </button>
      </form>
    </div>
  );
};

export default EditUserForm;
