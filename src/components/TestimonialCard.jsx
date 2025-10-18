import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial, className }) => {
  const { name, title, quote, profilePic } = testimonial;

  return (
    <div
      className={`flex flex-col justify-between bg-base-100 p-8 rounded-2xl border border-base-300 shadow-lg shadow-primary/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 ${className}`}>
      <div className='relative bg-primary/10 rounded-xl p-6'>
        <Quote className='absolute -top-3 -left-3 size-10 text-accent/50' />
        <p className='text-lg italic text-neutral-muted'>"{quote}"</p>
      </div>

      <div className='flex items-center gap-4 mt-6'>
        <img
          src={profilePic || "https://i.pravatar.cc/150"}
          alt={name}
          className='size-12 rounded-full object-cover flex-shrink-0'
        />
        <div>
          <h4 className='text-base font-bold font-serif text-neutral'>
            {name}
          </h4>
          <p className='text-sm text-neutral-muted'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
