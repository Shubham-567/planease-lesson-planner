import { Sparkles } from "lucide-react";

const JourneyCard = ({ icon, title, description, index, className }) => {
  return (
    <div
      className={`flex flex-col bg-base-100 p-8 rounded-2xl ring ring-base-300 shadow-lg shadow-primary/5 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden ${className}`}>
      <div className='flex items-center gap-4 mb-4'>
        <div className='text-primary/70'>
          {icon ? icon : <Sparkles className='size-8' />}
        </div>
        <h4 className='text-xl font-bold font-serif text-neutral'>
          {title ? title : "Card Title"}
        </h4>
      </div>
      <p className='text-sm text-neutral-muted leading-relaxed'>
        {description ? description : "Description of the card goes here."}
      </p>
    </div>
  );
};

export default JourneyCard;


