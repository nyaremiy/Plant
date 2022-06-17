import styles from './swiperHappyClients.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import client1 from '../../assets/images/clients/client1.jpg';
import client2 from '../../assets/images/clients/client2.jpg';
import client3 from '../../assets/images/clients/client3.jpg';
import client4 from '../../assets/images/clients/client4.jpg';

const SwiperHappyClients = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      <SwiperSlide className={styles.item}>
        <div className={styles.itemSwiper}>
          <div className={styles.info}>
            <div className={styles.photo}>
              <img src={client1} alt='Client Photo' />
            </div>
            <div className={styles.infoClient}>
              <div className={styles.name}>Jisan William</div>
              <div className={styles.positionAtWork}>CEO, Plant Group</div>
              <div className={styles.boxStars}></div>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            felis vulputated nec cursus pharetra, faucibus sapien at nullam. Vel
            varius leo augue adipiscing ullamcorper eu.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.item}>
        <div className={styles.itemSwiper}>
          <div className={styles.info}>
            <div className={styles.photo}>
              <img src={client1} alt='Client Photo' />
            </div>
            <div className={styles.infoClient}>
              <div className={styles.name}>Jisan William</div>
              <div className={styles.positionAtWork}>CEO, Plant Group</div>
              <div className={styles.boxStars}></div>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            felis vulputated nec cursus pharetra, faucibus sapien at nullam. Vel
            varius leo augue adipiscing ullamcorper eu.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.item}>
        <div className={styles.itemSwiper}>
          <div className={styles.info}>
            <div className={styles.photo}>
              <img src={client1} alt='Client Photo' />
            </div>
            <div className={styles.infoClient}>
              <div className={styles.name}>Jisan William</div>
              <div className={styles.positionAtWork}>CEO, Plant Group</div>
              <div className={styles.boxStars}></div>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            felis vulputated nec cursus pharetra, faucibus sapien at nullam. Vel
            varius leo augue adipiscing ullamcorper eu.
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.item}>
        <div className={styles.itemSwiper}>
          <div className={styles.info}>
            <div className={styles.photo}>
              <img src={client1} alt='Client Photo' />
            </div>
            <div className={styles.infoClient}>
              <div className={styles.name}>Jisan William</div>
              <div className={styles.positionAtWork}>CEO, Plant Group</div>
              <div className={styles.boxStars}></div>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            felis vulputated nec cursus pharetra, faucibus sapien at nullam. Vel
            varius leo augue adipiscing ullamcorper eu.
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperHappyClients;
