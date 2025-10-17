import { Sparkles } from "lucide-react";

const Card = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col items-center gap-3 bg-base-200 p-8 rounded-2xl ring ring-base-300 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/50 hover:-translate-y-2 hover:-rotate-1'>
      <div className='flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0 p-4'>
        {icon ? icon : <Sparkles className='size-8 md:size-10' />}
      </div>
      <h4 className='text-lg font-bold font-serif text-primary mt-2'>
        {title ? title : "Card Title"}
      </h4>
      <p className='text-sm text-neutral-muted text-center'>
        {description ? description : "Description of the card goes here."}
      </p>
    </div>
  );
};

export default Card;
