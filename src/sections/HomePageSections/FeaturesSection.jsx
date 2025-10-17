import { CheckCircle, Clock, Lightbulb } from "lucide-react";
import FeatureIllustrationOne from "../../components/illustrations/FeatureIllustrationOne";
import FeatureIllustrationTwo from "../../components/illustrations/FeatureIllustrationTwo";
import FeatureCard from "../../components/FeatureCard";
import SectionHeader from "../../components/SectionHeader";

const FeaturesSection = () => {
  return (
    <section className='bg-base-200 min-h-[80vh] w-full'>
      <div className='container py-12'>
        {/* Section Header */}
        <SectionHeader
          heading='Core Features'
          subHeading='Why Educators Love PlanEase'
          description='Discover the tools that make lesson planning simpler, smarter, and more effective, giving you more time to focus on what matters most: your students'
        />

        {/* Feature Cards and Illustrations */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
          <FeatureCard
            title='Smart Assistance'
            description='Go beyond templates. Our AI provides intelligent suggestions for activities, assessments, and differentiation strategies to build dynamic, effective lesson plans.'
            features={[
              "Generate creative, standards-aligned activities and assessments.",
              "Get ideas for supporting diverse learners and accessibility needs.",
              "Ensure content is engaging and appropriate for your grade level.",
            ]}
            icon={<Lightbulb className='size-5 md:size-6 text-primary' />}
          />

          {/* Illustration */}

          <FeatureIllustrationOne />

          <FeatureIllustrationTwo />

          <FeatureCard
            title='Time-Saving Workflow'
            description='Our intuitive interface and powerful AI drastically reduce
              planning time, allowing you to generate, refine, and export
              complete lesson plans in minutes.'
            features={[
              "Generate a structured, detailed plan in under 60 seconds.",
              "Easily duplicate and adapt plans for different classes or days.",
              "Export to PDF, Google Docs, or copy to clipboard seamlessly.",
            ]}
            icon={<Clock className='size-5 md:size-6 text-primary' />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
