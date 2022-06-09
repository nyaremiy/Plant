import classNames from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../elements/button/Button';
import styles from './menu.module.scss';

const Menu = () => {
  const [burger, setBurger] = useState(false);

  const setActive = ({ isActive }) => (isActive ? styles.activeLink : null);

  return (
    <div className={styles.menu}>
      {/* Burger */}
      <div
        className={classNames(
          styles.burger,
          burger ? styles.burgerActive : null
        )}
        onClick={() => setBurger(!burger)}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      {/* Navigation block */}
      <div
        className={classNames(styles.blockNav, burger ? styles.showMenu : null)}
      >
        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink to='/' className={setActive}>
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to='services' className={setActive}>
                Services
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to='about' className={setActive}>
                About Us
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to='blog' className={setActive}>
                Blog
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to='contact' className={setActive}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Buttons */}
        <div className={styles.buttons}>
          <Button text='Login' classes='transparent' />
          <Button text='Sing Up' />
        </div>
      </div>
    </div>
  );
};

export default Menu;
