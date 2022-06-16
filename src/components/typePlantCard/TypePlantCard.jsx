import classNames from 'classnames';
import styles from './typePlantCard.module.scss';

const TypePlantCard = ({ nameIcon, title, desc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        <svg className={classNames('icon', styles.icon)}>
          <use xlinkHref={`#icon-${nameIcon}`}></use>
        </svg>
      </div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default TypePlantCard;
