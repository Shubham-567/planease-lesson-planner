import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import HeroIllustration from "../../components/illustrations/HeroIllustration";

const HeroSection = () => {
  return (
    <section className='container relative flex items-center justify-between gap-4 min-h-[95vh] mt-10'>
      {/* background circles */}
      <div className='absolute -top-20 right-0 size-120 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 -z-10'></div>

      <div className='absolute bottom-20 left-0 size-120 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 -z-10'></div>

      {/* left side - text content */}
      <div className='md:w-1/2 space-y-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-serif'>
          Craft Exceptional Lesson Plans,{" "}
          <span className='text-primary'>Effortlessly</span>.
        </h1>

        <p className='sm:text-lg text-neutral-muted'>
          Turn your topic into a comprehensive, standards-aligned lesson plan
          complete with engaging activities, assessments, and differentiation
          strategies in minutes.
        </p>

        <Link to='/planner' className='primary-btn'>
          <Zap className='size-6' />
          <span>Start Creating Free</span>
        </Link>
      </div>

      {/* right side - illustration */}
      <HeroIllustration />
    </section>
  );
};

export default HeroSection;
