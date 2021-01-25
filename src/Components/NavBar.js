import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavBar = ({ icon, title }) => {
  const guestLinks = (
    <>
      <li>
        {' '}
        <NavLink to="/" end className="link" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink to="contacts" className="link" activeClassName="active">
          Contatos
        </NavLink>
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
