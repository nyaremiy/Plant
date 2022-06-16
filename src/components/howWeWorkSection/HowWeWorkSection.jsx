import styles from './howWeWorkSection.module.scss';
import classNames from 'classnames';
import imageSction from '../../assets/images/how-we-work.jpg';
import Advantage from '../advantage/Advantage';

const HowWeWorkSection = () => {
  return (
    <div className={styles.howWeWorkSection}>
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.greenBlock}></div>
        <div className={styles.imageBox}>
          <img src={imageSction} alt='ImageSection' className={styles.image} />
        </div>
        <div className={styles.block}>
          <div className={styles.headers}>
            <h2 className={styles.title}>How we Work?</h2>
            <div className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              felis vulputate nec cursus pharetra.
            </div>
          </div>
          <div className={styles.ourAdvantages}>
            <Advantage
              nameIcon='free-shipping'
              title='Free Shipping'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis vulputate nec cursus pharetra.'
            />
            <Advantage
              nameIcon='open-24-hours'
              title='24/7 Dedicated Support'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis vulputate nec cursus pharetra.'
            />
            <Advantage
              nameIcon='money-back'
              title='100% Money Beck'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis vulputate nec cursus pharetra.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWorkSection;
