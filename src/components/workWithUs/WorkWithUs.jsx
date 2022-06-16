import classNames from 'classnames';
import styles from './workWithUs.module.scss';
import company1 from '../../assets/images/company1.jpg';
import company2 from '../../assets/images/company2.jpg';
import company3 from '../../assets/images/company3.jpg';
import company4 from '../../assets/images/company4.jpg';
import company5 from '../../assets/images/company5.jpg';
import company6 from '../../assets/images/company6.jpg';
import company7 from '../../assets/images/company7.jpg';

const WorkWithUs = () => {
  return (
    <div className={styles.workWithUs}>
      <div className={classNames('container', styles.wrapper)}>
        <h2 className={styles.title}>Partner who work with us</h2>
        <div className={styles.block}>
          <img src={company1} alt='Company1' className={styles.image} />
          <img src={company2} alt='Company2' className={styles.image} />
          <img src={company3} alt='Company3' className={styles.image} />
          <img src={company4} alt='Company4' className={styles.image} />
          <img src={company5} alt='Company5' className={styles.image} />
          <img src={company6} alt='Company6' className={styles.image} />
          <img src={company7} alt='Company7' className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
