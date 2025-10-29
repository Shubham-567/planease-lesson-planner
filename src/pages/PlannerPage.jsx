import { FileText } from "lucide-react";
import PageHeader from "../components/PageHeader";

import InputForm from "../sections/PlannerPageSections/InputForm";

const PlannerPage = () => {
  return (
    <main className='min-h-screen overflow-hidden'>
      <div className='container pt-24 pb-24'>
        <section className='relative mb-16'>
          <div className='md:w-2/3 space-y-4 w-full'>
            <PageHeader
              title='AI Lesson Planner'
              heading="Let's Create a Lesson Plan"
              description='Fill in the details below to generate a comprehensive, engaging lesson plan tailored to your needs. Our AI will craft a structured plan complete with activities, assessments, and differentiation strategies.'
            />
          </div>
        </section>

        <section className='mb-16 flex flex-col lg:flex-row items-center gap-4'>
          <div className='lg:max-w-1/3 space-y-4 w-full'>
            <InputForm />
          </div>

          <div className='w-full space-y-4'>
            <div className='bg-base-200 rounded-2xl w-full shadow-lg border-2 border-base-300 border-dashed'>
              {/* empty state */}
              <div className='flex flex-col items-center justify-center gap-3 w-full md:max-w-xl mx-auto h-full min-h-[550px] text-center'>
                <FileText className='size-18 text-primary' />
                <h3 className='font-bold text-2xl font-serif text-neutral'>
                  Your Lesson Plan Awaits
                </h3>
                <p className='text-base text-neutral-muted'>
                  Fill out the form on the left, and your AI-generated lesson
                  plan will appear here ready for you to review and edit.
                </p>
              </div>

              {/*  */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PlannerPage;
