import FeaturesSection from "../sections/HomePageSections/FeaturesSection";
import HeroSection from "../sections/HomePageSections/HeroSection";
import HowItWorksSection from "../sections/HomePageSections/HowItWorksSection";

const HomePage = () => {
  return (
    <main className='min-h-screen overflow-x-hidden'>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
  );
};

export default HomePage;
