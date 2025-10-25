const PageHeader = ({ title, heading, description }) => {
  return (
    <div>
      <span className='text-base tracking-widest font-bold font-sans text-primary flex items-center gap-4 uppercase'>
        {title ? title : "Page Title"}
      </span>

      <h1 className='text-4xl md:text-5xl lg:text-6xl leading-tight font-bold font-serif py-3'>
        {heading ? heading : "Page Heading"}
      </h1>

      <p className='sm:text-lg text-neutral-muted'>
        {description ? description : "Description of the page goes here."}
      </p>
    </div>
  );
};

export default PageHeader;
