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
      </div>
    </header>
  );
};

export default Header;
