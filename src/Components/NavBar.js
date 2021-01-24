import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ icon, title }) => {
  const guestLinks = (
    <>
      <li>
        {' '}
        <Link to="/" end className="link">
          Home
        </Link>
      </li>
      <li>
        {' '}
        <Link to="user" className="link">
          Usuário
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{guestLinks}</ul>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'React Crud',
  icon: 'fas fa-id-card-alt',
};

export default NavBar;
