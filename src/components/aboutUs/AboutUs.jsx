import styles from './aboutUs.module.scss';
import imageSction from '../../assets/images/about-us.jpg';
import classNames from 'classnames';
import Button from '../../elements/button/Button';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.imageBox}>
          <img src={imageSction} alt='ImageSection' />
        </div>
        <div className={styles.block}>
          <div className={styles.subtitle}>About Us</div>
          <h2 className={styles.title}>Early Establishment of Rooted</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            felis vulputate nec cursus pharetra, faucibus sapien nullam. Vel
            varius leo augue adipiscing at it now ullamcorper eu. Vitae nisl
            pretium volutpat donec ame. Eu tempus, erat faucibus aliquam vitae
            id facilisis.
          </p>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            felis vulputate nec cursus pharetra.
          </div>
          <div className={styles.button}>
            <Button text='Learn More' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
