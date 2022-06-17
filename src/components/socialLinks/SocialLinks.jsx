import styles from './socialLinks.module.scss';
import classNames from 'classnames';

const SocialLinks = ({ nameIcon }) => {
  return (
    <div className={styles.socialLinks}>
      <svg className={classNames('icon', styles.icon)}>
        <use xlinkHref={`#icon-${nameIcon}`}></use>
      </svg>
    </div>
  );
};

export default SocialLinks;
