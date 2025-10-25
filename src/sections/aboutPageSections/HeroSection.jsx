import PageHeader from "../../components/PageHeader";

const HeroSection = () => {
  return (
    <section className='container relative flex max-md:flex-col items-center md:justify-between gap-8 md:gap-4 min-h-[42rem] pt-24'>
      {/* background circles */}
      <div className='absolute -top-20 right-0 size-120 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 -z-10'></div>

      <div className='absolute bottom-20 left-0 size-120 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 -z-10'></div>

      {/* left side - text content */}
      <div className='md:w-1/2 space-y-4 w-full '>
        <PageHeader
          title='Our Mission'
          heading='Less Planning and More Teaching'
          description='PlanEase was born from a simple idea: give teachers their time back. We leverage AI to handle the tedious parts of lesson planning, so educators can focus on what they do best—inspiring students.'
        />
      </div>

      {/* right side - image */}
      <div className='md:w-1/2 relative h-80 lg:h-full fade-in-up'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3'></div>
        <img
          src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
          alt='a group of students collaborating around a laptop'
          className='relative w-full h-full object-cover rounded-2xl shadow-soft-lg transform hover:rotate-3 transition-transform duration-600 ease-in-out'
        />
      </div>
    </section>
  );
};

export default HeroSection;
