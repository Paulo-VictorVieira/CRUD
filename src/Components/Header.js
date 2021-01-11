import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              end
              activeClassName={styles.active}
              className={styles.link}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              activeClassName={styles.active}
              className={styles.link}
            >
              Usuários
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
