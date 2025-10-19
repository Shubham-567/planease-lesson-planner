const ValuesCard = ({ icon, title, description, index }) => {
  return (
    <div
      key={index}
      className='relative bg-base-200 p-8 rounded-2xl border border-base-300 shadow-lg shadow-primary/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden'>
      {/* number in background */}
      <div className='absolute -top-4 -right-4 text-9xl font-bold font-serif text-primary/10 select-none z-0'>
        0{index + 1}
      </div>

      <div className='relative z-10'>
        <div className='flex items-center gap-4 mb-3'>
          {icon}
          <h3 className='text-2xl font-bold font-serif text-neutral'>
            {title}
          </h3>
        </div>
        <p className='text-base text-neutral-muted leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValuesCard;
