import { Activity, CheckCircle, ClipboardCheck } from "lucide-react";

const HeroIllustration = () => {
  return (
    <div className='relative hidden w-1/2 p-4 md:block'>
      <div className='bg-base-200 p-3 rounded-2xl transform md:-rotate-2 border border-base-300 max-w-lg mx-auto transition-all duration-600 ease-in-out hover:rotate-0 hover:scale-105 hover:shadow-xl shadow-primary/10'>
        <div className='aspect-[4/3] bg-base-100 rounded-lg p-6'>
          {/* Header */}
          <div className='flex justify-between items-start mb-6'>
            <div>
              <h2 className='font-bold text-xl font-serif text-neutral'>
                Photosynthesis & Plant Cells
              </h2>
              <p className='text-sm text-neutral/70'>
                Subject: Biology | Grade: 7
              </p>
            </div>
            <span className='text-sm px-3 py-1 bg-accent/10 text-accent rounded-full font-semibold whitespace-nowrap'>
              45 min
            </span>
          </div>
          {/* Sections */}
          <div className='space-y-6'>
            {/* Objectives */}
            <div>
              <h3 className='text-xs font-bold uppercase tracking-wider text-primary mb-2'>
                Objectives
              </h3>
              <div className='flex items-center gap-2'>
                <CheckCircle className='size-4 text-secondary' />
                <div className='h-2.5 bg-base-300 rounded-full w-3/4'></div>
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className='text-xs font-bold uppercase tracking-wider text-primary mb-2'>
                Activities
              </h3>
              <div className='flex items-start gap-2'>
                <Activity className='size-4 text-accent' />
                <div className='space-y-1.5 w-full'>
                  <div className='h-2.5 bg-base-300 rounded-full w-6/6'></div>
                  <div className='h-2.5 bg-base-300 rounded-full w-5/6'></div>
                </div>
              </div>
            </div>

            {/* Assessment */}
            <div>
              <h3 className='text-xs font-bold uppercase tracking-wider text-primary mb-2'>
                Assessment
              </h3>
              <div className='flex items-start gap-2'>
                <ClipboardCheck className='size-4 text-secondary' />
                <div className='h-2.5 bg-base-300 rounded-full w-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroIllustration;
