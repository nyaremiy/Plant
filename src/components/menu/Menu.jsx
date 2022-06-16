import classNames from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../elements/button/Button';
import styles from './menu.module.scss';

const Menu = () => {
  // Стан бургера
  const [burger, setBurger] = useState(false);

  // Додаю клас до активної силки
  const setActive = ({ isActive }) => (isActive ? styles.activeLink : null);

  // TODO: Доробити
  // const deleteScroll = () => {
  //   if (!burger) {
  //     document.querySelector('body').classList.toggle('no-scroll');
  //   }
  // };

  // Закриваю бургер
  const closeMenu = () => {
    setBurger(false);
  };

  return (
    <div className={styles.menu}>
      {/* Blur */}
      <div
        className={burger ? styles.blur : null}
        onClick={closeMenu}
        onTouchMove={closeMenu}
      ></div>
      {/* Burger */}
      <div
        className={classNames(
          styles.burger,
          burger ? styles.burgerActive : null
        )}
        onClick={() => {
          setBurger(!burger);
        }}
      >
        <span
          className={classNames(styles.line, burger ? styles.whiteLine : null)}
        ></span>
        <span
          className={classNames(styles.line, burger ? styles.whiteLine : null)}
        ></span>
        <span
          className={classNames(styles.line, burger ? styles.whiteLine : null)}
        ></span>
      </div>
      {/* Navigation block */}
      <div
        className={classNames(styles.blockNav, burger ? styles.showMenu : null)}
      >
        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink to='/' className={setActive} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to='services' className={setActive} onClick={closeMenu}>
                Services
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to='about' className={setActive} onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to='blog' className={setActive} onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to='contact' className={setActive} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Buttons */}
        <div className={styles.buttons}>
          <Button text='Login' classes='transparent' onClick={closeMenu} />
          <Button text='Sing Up' onClick={closeMenu} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
