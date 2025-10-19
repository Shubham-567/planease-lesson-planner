import { Users, Feather, Zap, Brain } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";
import ValuesCard from "../../components/ValuesCard";

const CoreValuesSection = () => {
  const coreValues = [
    {
      icon: <Users className='size-7 text-primary' />,
      title: "Teacher-Centric",
      description:
        "Our compass is the educator. Every feature is built and tested with real teachers to ensure it solves real problems and genuinely lightens their workload.",
    },
    {
      icon: <Feather className='size-7 text-primary' />,
      title: "Effortless Simplicity",
      description:
        "Great technology should feel invisible. We are obsessed with creating a simple, intuitive experience that feels like a partner, not another piece of software to learn.",
    },
    {
      icon: <Zap className='size-7 text-primary' />,
      title: "Empowerment, Not Replacement",
      description:
        "We use AI to empower, not replace. Our goal is to handle the 90% of tedious work, freeing educators to focus on the 10% that matters most: human connection and inspiration.",
    },
    {
      icon: <Brain className='size-7 text-primary' />,
      title: "Responsible Innovation",
      description:
        "We are thoughtful about the power of AI in education. We are committed to ethical development, data privacy, and building tools that enhance creativity and critical thinking.",
    },
  ];

  return (
    <section className='bg-base-100 w-full'>
      <div className='container py-24'>
        {/* Section Header */}
        <SectionHeader
          heading='Core Values'
          subHeading='The Principles That Guide Us'
          description='Our values are the foundation of our work and the lens through which we build PlanEase for educators around the world.'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16'>
          {coreValues.map((value, index) => (
            <ValuesCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
