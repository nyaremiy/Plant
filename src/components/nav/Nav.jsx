import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss';

const Nav = () => {
  // Додаю клас до активної силки
  const setActive = ({ isActive }) => (isActive ? styles.active : '');

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to='/' className={setActive}>
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/services' className={setActive}>
            Services
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/about' className={setActive}>
            About Us
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/blog' className={setActive}>
            Blog
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/contact' className={setActive}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
