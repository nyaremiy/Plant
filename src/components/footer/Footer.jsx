import classNames from 'classnames';
import NavigationFooter from '../navigationFooter/NavigationFooter';
import SocialLinks from '../socialLinks/SocialLinks';
import styles from './footer.module.scss';

const Footer = () => {
  const navigationItems = [
    {
      value: 'Home',
      to: '/',
    },
    {
      value: 'Product',
      to: '/',
    },
    {
      value: 'About',
      to: '/',
    },
    {
      value: 'Blog',
      to: '/',
    },
  ];

  const aboutUsItems = [
    {
      value: 'Contact',
      to: '/',
    },
    {
      value: 'Address',
      to: '/',
    },
    {
      value: 'About Us',
      to: '/',
    },
  ];

  const helpItems = [
    {
      value: 'Customers Services',
      to: '/',
    },
    {
      value: 'FAQs',
      to: '/',
    },
    {
      value: 'We Are Hiring',
      to: '/',
    },
    {
      value: 'Returns',
      to: '/',
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.wrapper)}>
        <div className={styles.block}>
          <h4 className={styles.title}>Plant</h4>
          <div className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adi piscing elit. Phasellus
            felis vulputate nec cur sus pharetra, faucibus sapien nullam.
          </div>
          <div className={styles.socialBox}>
            <SocialLinks nameIcon='Twitter' />
            <SocialLinks nameIcon='Facebook' />
            <SocialLinks nameIcon='Instagram' />
          </div>
        </div>
        <NavigationFooter title='Navigation' items={navigationItems} />
        <NavigationFooter title='About Us' items={aboutUsItems} />
        <NavigationFooter title='Help' items={helpItems} />
      </div>
    </footer>
  );
};

export default Footer;
