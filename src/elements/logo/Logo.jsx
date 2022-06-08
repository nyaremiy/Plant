import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to={'/'} className={styles['logo-link']}>
        Plant
      </Link>
    </div>
  );
};

export default Logo;
