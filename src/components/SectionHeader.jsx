const SectionHeader = ({ heading, subHeading, description }) => {
  return (
    <div className='space-y-3'>
      <h2 className='text-sm tracking-widest font-bold font-sans text-secondary flex items-center gap-4 uppercase'>
        {heading ? heading : "Section Heading"}
        {/* horizontal line */}
        <div className='h-[2px] w-12 bg-secondary my-3' />
      </h2>
      <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-neutral'>
        {subHeading ? subHeading : "Section Sub Heading"}
      </h3>
      <p className='sm:text-lg text-neutral-muted max-w-2xl'>
        {description ? description : "Description of the section goes here."}
      </p>
    </div>
  );
};

export default SectionHeader;
