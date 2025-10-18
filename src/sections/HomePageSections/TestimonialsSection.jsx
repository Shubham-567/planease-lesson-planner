import SectionHeader from "../../components/SectionHeader";
import TestimonialCard from "../../components/TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      title: "7th Grade Science Teacher",
      quote:
        "PlanEase has revolutionized my workflow. I can now create detailed, engaging lesson plans in a fraction of the time. It's a game-changer for any educator looking to reclaim their evenings.",
      profilePic: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael B.",
      title: "High School History Teacher",
      quote:
        "As a new teacher, I was overwhelmed with lesson planning. PlanEase's AI suggestions are incredibly helpful and align perfectly with our curriculum standards. I feel so much more confident in my teaching.",
      profilePic: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Emily R.",
      title: "Elementary School Principal",
      quote:
        "The ability to differentiate activities for diverse learners is built right in. This tool doesn't just save time; it helps you become a more effective and inclusive teacher. Highly recommended!",
      profilePic: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <section className='bg-base-200 min-h-[42rem] w-full'>
      <div className='container py-12 space-y-10'>
        <SectionHeader
          heading='Testimonials'
          subHeading='Loved by Educators Worldwide'
          description="Don't just take our word for it. Hear what teachers, administrators and curriculum designers are saying about PlanEase."
        />

        {/* Testimonials Cards grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              testimonial={testimonial}
              key={index}
              className={index === 0 ? "md:col-span-2" : "md:col-span-1"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
