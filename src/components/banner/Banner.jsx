import classNames from 'classnames';
import Button from '../../elements/button/Button';
import styles from './banner.module.scss';
import imgBanner from '../../assets/images/banner-img.png';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.block}>
          <h1 className={styles.title}>Grow Your Own Favorite Plant Life</h1>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            felis vulputate nec cursus pharetra, faucibus sapien nullam. Vel
            varius leo augue adipiscing ullamcorper eu favorite plant life.
          </div>
          <div className={styles.button}>
            <Button text='Get Started' />
          </div>
        </div>
        <div className={styles.imageBox}>
          <img src={imgBanner} alt='Banner Image' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
