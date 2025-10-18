import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className='bg-base-100'>
      <div className='container mx-auto px-6 py-12'>
        <div className='relative bg-base-100 rounded-2xl shadow-xl overflow-hidden ring ring-base-300'>
          {/* Background Blobs */}
          <div
            className='absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 size-[30rem] bg-primary/20 rounded-full filter blur-3xl'
            aria-hidden='true'
          />
          <div
            className='absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 size-[30rem] bg-accent/20 rounded-full filter blur-3xl'
            aria-hidden='true'
          />

          {/* The Glassmorphism Card */}
          <div className='relative m-4 sm:m-8 bg-neutral/10 backdrop-blur-lg rounded-xl shadow-lg ring ring-neutral/20'>
            <div className='p-8 sm:p-12'>
              <div className='flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left'>
                <div className='max-w-3xl'>
                  <h2 className='text-3xl md:text-4xl font-serif font-bold text-neutral tracking-tight'>
                    Ready to Transform Your Planning?
                  </h2>
                  <p className='mt-4 text-lg text-neutral-muted'>
                    Join thousands of educators who are saving time and
                    designing more impactful lessons. Get started with PlanEase
                    for free today.
                  </p>
                </div>
                <div className='flex-shrink-0'>
                  <Link to='/planner' className='btn-secondary'>
                    <Zap className='size-5' />
                    Start Creating Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
