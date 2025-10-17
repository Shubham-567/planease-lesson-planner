import { FlaskConical, Lightbulb, Users } from "lucide-react";

const FeatureIllustrationOne = () => {
  return (
    <>
      {/* ai assistance illustration */}
      <div className='relative p-4 block'>
        <div className='bg-base-200 p-3 rounded-2xl transform border border-base-300 max-w-lg mx-auto transition-transform duration-600 ease-in-out hover:rotate-3 hover:scale-105 hover:shadow-xl shadow-primary/10'>
          <div className='aspect-[4/3] bg-base-100 rounded-lg p-6'>
            <div className='flex items-center gap-3 mb-6'>
              <Lightbulb className='size-6 text-accent' />
              <h2 className='font-bold text-xl font-serif text-neutral'>
                Smart Suggestions
              </h2>
            </div>

            {/* main content a mock chat interface */}
            <div className='space-y-4'>
              {/* user prompt */}
              <div className='flex justify-end'>
                <div className='bg-base-300 rounded-lg p-3 max-w-xs'>
                  <p className='text-sm text-neutral/80'>
                    "Suggest a creative activity for Photosynthesis."
                  </p>
                </div>
              </div>

              {/* ai response */}
              <div className='flex justify-start'>
                <div className='bg-primary/5 border border-primary/20 rounded-lg p-4 w-full'>
                  <div className='space-y-4'>
                    {/* suggestion 1: Activity Idea */}
                    <div>
                      <h3 className='text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2'>
                        <FlaskConical className='size-4' />
                        <span>Activity Idea</span>
                      </h3>
                      <div className='space-y-1.5 w-full pl-6'>
                        <div className='h-2.5 bg-base-300 rounded-full w-full'></div>
                        <div className='h-2.5 bg-base-300 rounded-full w-5/6'></div>
                      </div>
                    </div>

                    {/* suggestion 2: Accessibility */}
                    <div>
                      <h3 className='text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2'>
                        <Users className='size-4' />
                        <span>Accessibility</span>
                      </h3>
                      <div className='space-y-1.5 w-full pl-6'>
                        <div className='h-2.5 bg-base-300 rounded-full w-3/4'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureIllustrationOne;
