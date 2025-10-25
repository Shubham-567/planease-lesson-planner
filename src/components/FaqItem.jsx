import { Minus } from "lucide-react";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`bg-base-200 border-l-4 rounded-r-2xl transition-all duration-300 ring ring-base-300 ${
        isOpen ? "border-primary" : "border-base-300"
      }`}>
      <button
        className='flex items-center justify-between w-full cursor-pointer p-6'
        onClick={onToggle}
        aria-expanded={isOpen}>
        <p
          className={`text-lg font-bold font-serif text-left ${
            isOpen ? "text-primary" : "text-neutral"
          }`}>
          {question}
        </p>
        <div className='text-neutral-muted flex-shrink-0 ml-4'>
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}>
            <Minus size={20} />
          </div>
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}>
        <div className='overflow-hidden'>
          <p className='text-base text-neutral-muted px-6 pb-6 pt-0 leading-relaxed'>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
