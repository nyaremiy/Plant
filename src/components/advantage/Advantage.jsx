import classNames from 'classnames';
import styles from './advantage.module.scss';

const Advantage = ({ nameIcon, title, desc }) => {
  return (
    <div className={styles.advantage}>
      <div className={styles.blockIcon}>
        <svg className={classNames('icon', styles.icon)}>
          <use xlinkHref={`#icon-${nameIcon}`}></use>
        </svg>
      </div>
      <div className={styles.block}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  );
};

export default Advantage;
