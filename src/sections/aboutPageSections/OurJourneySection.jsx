import { Frown, Lightbulb, Zap } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";
import JourneyCard from "../../components/JourneyCard";

const OurJourneySection = () => {
  const journeyCards = [
    {
      title: "The Challenge",
      description:
        "The Challenge Teachers are passionate but overworked. We saw countless educators spending their nights and weekends buried in paperwork, manually aligning lessons to standards, and struggling to find fresh ideas. The administrative burden was overshadowing the joy of teaching.",
      icon: <Frown className='size-6 md:size-8 text-primary' />,
    },
    {
      title: "The Idea",
      description:
        "What if we could use AI not as a replacement, but as a creative partner? We envisioned an intelligent tool that could understand an educator's goals and instantly draft well-structured, engaging lesson plans. An assistant to handle the repetitive work, sparking creativity and freeing up valuable time.",
      icon: <Lightbulb className='size-6 md:size-8 text-secondary' />,
    },
    {
      title: "The Solution",
      description:
        "PlanEase was born. An intuitive platform that streamlines planning, sparks creativity, and gives educators the freedom to focus on what matters most: their students. It's more than a tool; it's a commitment to supporting the heroes in our classrooms.",
      icon: <Zap className='size-6 md:size-8 text-accent' />,
    },
  ];

  return (
    <section className='bg-base-200 min-h-[42rem] w-full'>
      <div className='container py-12'>
        {/* Section Header */}
        <SectionHeader
          heading='Our Journey'
          subHeading='From a Classroom Challenge to a Global Solution'
          description='The path to PlanEase was driven by a real need felt in classrooms everywhere.'
        />

        {/* Journey Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {journeyCards.map((card, index) => (
            <JourneyCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;
