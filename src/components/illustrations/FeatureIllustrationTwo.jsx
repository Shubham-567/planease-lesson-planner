import { Clock, Files, FileText, Zap } from "lucide-react";

const FeatureIllustrationTwo = () => {
  return (
    <>
      {/* time-saving workflow illustration */}
      <div className='relative p-4 block'>
        <div className='bg-base-200 p-3 rounded-2xl transform border border-base-300 max-w-lg mx-auto transition-transform duration-600 ease-in-out hover:-rotate-3 hover:scale-105 hover:shadow-xl shadow-primary/10'>
          <div className='aspect-[4/3] bg-base-100 rounded-lg p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <Clock className='size-6 text-accent' />
              <h2 className='font-bold text-xl font-serif text-neutral'>
                Efficient Workflow
              </h2>
            </div>

            {/* main content */}
            <div className='space-y-5'>
              {/* step 1: Generate */}
              <div className='flex items-center gap-3'>
                <div className='size-8 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0'>
                  <Zap className='size-5' />
                </div>
                <div className='space-y-1 w-full'>
                  <div className='h-2.5 bg-base-300 rounded-full w-full'></div>
                  <p className='text-xs text-neutral/60 -mt-1'>
                    Generate plan in seconds
                  </p>
                </div>
              </div>
              {/* Separator line */}
              <div className='ml-4 w-px h-6 bg-base-300 transform -translate-y-2'></div>
              {/* step 2: Adapt */}
              <div className='flex items-center gap-3 -mt-4'>
                <div className='size-8 flex items-center justify-center rounded-full bg-secondary/10 text-secondary flex-shrink-0'>
                  <Files className='size-5' />
                </div>
                <div className='space-y-1 w-full'>
                  <div className='h-2.5 bg-base-300 rounded-full w-4/5'></div>
                  <p className='text-xs text-neutral/60 -mt-1'>
                    Duplicate & adapt plans
                  </p>
                </div>
              </div>
              {/* Separator line */}
              <div className='ml-4 w-px h-6 bg-base-300 transform -translate-y-2'></div>
              {/* step 3: Export */}
              <div className='flex items-center gap-3 -mt-4'>
                {" "}
                <div className='size-8 flex items-center justify-center rounded-full bg-accent/10 text-accent flex-shrink-0'>
                  <FileText className='size-5' />
                </div>
                <div className='space-y-1 w-full'>
                  <div className='h-2.5 bg-base-300 rounded-full w-full'></div>
                  <p className='text-xs text-neutral/60 -mt-1'>
                    Export to favorite format
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureIllustrationTwo;
