import classNames from 'classnames';
import Logo from '../../elements/logo/Logo';
import styles from './header.module.scss';
import Menu from '../nav/Menu';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames('container', styles.wrapper)}>
        <Logo />
        <Menu />
        {/* <div className={styles.navigation}>
          <Nav />
          <div className={styles.buttons}>
            <Button text='Login' classes={stylesBtn.transparent} />
            <Button text='Sing Up' />
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
