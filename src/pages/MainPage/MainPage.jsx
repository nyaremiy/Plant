import AboutUs from '../../components/aboutUs/AboutUs';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import HappyClients from '../../components/happyClients/HappyClients';
import HowWeWorkSection from '../../components/howWeWorkSection/HowWeWorkSection';
import RightPlant from '../../components/rightPlant/RightPlant';
import WorkWithUs from '../../components/workWithUs/WorkWithUs';

const MainPage = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <RightPlant />
      <HowWeWorkSection />
      <WorkWithUs />
      {/* <HappyClients /> */}
      <Footer />
    </>
  );
};

export default MainPage;
