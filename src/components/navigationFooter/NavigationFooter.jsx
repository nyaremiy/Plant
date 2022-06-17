import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navigationFooter.module.scss';
import classNames from 'classnames';

const NavigationFooter = ({ title, items }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div className={styles.navigationFooter}>
      <h6 className={styles.title} onClick={() => setActive(!active)}>
        {title}
      </h6>
      <ul
        className={classNames(styles.list, active ? styles.list_active : null)}
      >
        {items.map((item, key) => (
          <li key={item + key} className={styles.item}>
            <Link to={item.to} className={styles.link}>
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationFooter;
