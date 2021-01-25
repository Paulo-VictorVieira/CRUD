import React from 'react';
import { Link } from 'react-router-dom';
import list from '../Assets/list.svg';

const Home = () => {
  return (
    <div className="container animeLeft">
      <div className="grid-2 m-1">
        <div>
          <img src={list} alt="Tabela" />
        </div>
        <div>
          <h1 className="x-large text-center">React - CRUD</h1>
          <p className="text-center lead">
            Sistema para adicionar, editar e deletar contatos.
          </p>
          <p className="text-center lead">
            Ir para
            <Link to="contacts"> Contatos</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
