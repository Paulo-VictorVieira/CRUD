import React from 'react';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import styles from './User.module.css';
import userList from './UserList';

const User = () => {
  const [users, setUsers] = React.useState(userList);
  const [editing, setEditing] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    id: null,
    nome: '',
    email: '',
  });

  // Adding a new user
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // Deleting a user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Updating a user
  const editOn = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, nome: user.nome, email: user.email });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className={`${styles.wrapper} animeLeft`}>
      {!editing ? (
        <AddUserForm addUser={addUser} />
      ) : (
        <EditUserForm
          setEditing={setEditing}
          currentUser={currentUser}
          updateUser={updateUser}
        />
      )}
      <div>
        <h1>Usuários</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => editOn(user)}
                      className={styles.editBtn}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className={styles.deleteBtn}
                    >
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Sem Usuários Cadastrados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
