import FeaturesSection from "../sections/HomePageSections/FeaturesSection";
import HeroSection from "../sections/HomePageSections/HeroSection";

const HomePage = () => {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
