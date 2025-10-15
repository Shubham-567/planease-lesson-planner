import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className='relative flex items-center justify-between gap-4 min-h-[80vh] mt-10'>
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
      <div className='relative hidden md:block w-1/2'>
        <div className='bg-base-200 p-3 rounded-2xl transform md:-rotate-2 border border-base-300 max-w-lg mx-auto'>
          <div className='aspect-[4/3] bg-base-100 rounded-lg p-6'>
            <div className='flex justify-between items-start mb-4'>
              <div>
                <h2 className='font-bold text-xl font-serif text-neutral'>
                  Photosynthesis & Plant Cells
                </h2>
                <p className='text-sm text-neutral-muted'>
                  Subject: Biology | Grade: 7
                </p>
              </div>
              <span className='text-sm px-3 py-1 bg-accent/10 text-accent rounded-full font-semibold'>
                45 min
              </span>
            </div>
            <div className='space-y-4'>
              <div>
                <h3 className='text-xs font-bold uppercase tracking-wider text-primary mb-1'>
                  Objectives
                </h3>
                <div className='flex items-center gap-2'>
                  <svg
                    className='size-4 text-secondary flex-shrink-0'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={3}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <div className='h-2.5 bg-base-300 rounded-full w-3/4'></div>
                </div>
              </div>

              <div>
                <h3 className='text-xs font-bold uppercase tracking-wider text-primary mb-1'>
                  Activities
                </h3>
                <div className='flex items-start gap-2'>
                  <div className='size-4 mt-0.5 bg-primary/50 rounded-full flex-shrink-0'></div>
                  <div className='space-y-1.5 w-full'>
                    <div className='h-2.5 bg-base-300 rounded-full w-full'></div>
                    <div className='h-2.5 bg-base-300 rounded-full w-5/6'></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-xs font-bold uppercase tracking-wider text-primary mb-1'>
                  Assessment
                </h3>
                <div className='flex items-start gap-2'>
                  <div className='size-4 mt-0.5 bg-green-500/50 rounded-full flex-shrink-0'></div>
                  <div className='h-2.5 bg-base-300 rounded-full w-full'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
