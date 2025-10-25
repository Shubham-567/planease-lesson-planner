import CallToAction from "../components/CallToAction";
import CoreValuesSection from "../sections/aboutPageSections/CoreValuesSection";
import HeroSection from "../sections/aboutPageSections/HeroSection";
import OurJourneySection from "../sections/aboutPageSections/OurJourneySection";

const AboutPage = () => {
  return (
    <main className='min-h-screen overflow-hidden'>
      <HeroSection />
      <OurJourneySection />
      <CoreValuesSection />
      <CallToAction />
    </main>
  );
};

export default AboutPage;
