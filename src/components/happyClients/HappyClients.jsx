import Button from '../../elements/button/Button';
import styles from './happyClients.module.scss';
import classNames from 'classnames';
import SwiperHappyClients from '../swiperHappyClients/SwiperHappyClients';

const HappyClients = () => {
  return (
    <div className={styles.happyClients}>
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.block}>
          <div className={styles.blockText}>
            <h2 className={styles.title}>What Our Happy Client Says</h2>
            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              felis vulputate nec cursus pharetra, faucibus sapien nullam.
            </div>
          </div>
          <Button text='View All' />
        </div>
      </div>
      <SwiperHappyClients />
    </div>
  );
};

export default HappyClients;
