import { Header } from '@/components/venture-site/site/Header';
import { Footer } from '@/components/venture-site/site/Footer';
import TopBarArea from '@/components/top-bar/top-bar-area';
import HomeSixContent from '@/components/venture-home/home-six-content';

const HomeSixMain = () => {
  return (
    <>
      <div className="venture-top-strip">
        <TopBarArea />
      </div>
      <div className="venture-site">
        <Header />
        <HomeSixContent />
        <Footer />
      </div>
    </>
  );
};

export default HomeSixMain;
