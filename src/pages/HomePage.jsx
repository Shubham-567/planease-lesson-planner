import CallToAction from "../components/CallToAction";
import FeaturesSection from "../sections/HomePageSections/FeaturesSection";
import HeroSection from "../sections/HomePageSections/HeroSection";
import HowItWorksSection from "../sections/HomePageSections/HowItWorksSection";
import TestimonialsSection from "../sections/HomePageSections/TestimonialsSection";

const HomePage = () => {
  return (
    <main className='min-h-screen overflow-x-hidden'>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CallToAction />
    </main>
  );
};

export default HomePage;
