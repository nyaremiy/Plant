import styles from './rightPlant.module.scss';
import classNames from 'classnames';
import TypePlantCard from '../typePlantCard/TypePlantCard';

const RightPlant = () => {
  return (
    <div className={styles.rightPlant}>
      <div className={classNames('container', styles.wrapper)}>
        <h2 className={styles.title}>Need help to Chooseing the Right Plant</h2>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          felis vulputate nec cursus pharetra.
        </div>
        <div className={styles.cards}>
          <TypePlantCard
            nameIcon='garden'
            title='Garden Plant'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis vulputate nec cursus pharetra, faucibus sapien.'
          />
          <TypePlantCard
            nameIcon='office'
            title='Office Plant'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis vulputate nec cursus pharetra, faucibus sapien.'
          />
          <TypePlantCard
            nameIcon='home'
            title='Home Plant'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis vulputate nec cursus pharetra, faucibus sapien.'
          />
        </div>
      </div>
    </div>
  );
};

export default RightPlant;
