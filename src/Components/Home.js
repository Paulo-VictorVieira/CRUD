import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container animeLeft">
      {' '}
      <h1 className="title">React - CRUD</h1>
      <p>Sistema para adicionar, editar e deletar usuários.</p>
      <p style={{ fontWeight: 'bold' }}>
        Ir para
        <Link to="user"> Usuários</Link>
      </p>
    </div>
  );
};

export default Home;
