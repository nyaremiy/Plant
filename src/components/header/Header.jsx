import classNames from 'classnames';
import Button from '../../elements/button/Button';
import Logo from '../../elements/logo/Logo';
import Nav from '../nav/Nav';
import styles from './header.module.scss';
import stylesBtn from '../../elements/button/button.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.wrapper)}>
        <Logo />
        <Nav />
        <div className={styles.buttons}>
          <Button text='Login' classes={stylesBtn.transparent} />
          <Button text='Sing Up' />
        </div>
      </div>
    </header>
  );
};

export default Header;
