import { CheckCircle, Sparkles } from "lucide-react";

const FeatureCard = ({ title, description, features, icon }) => {
  return (
    <div className='flex flex-col justify-center gap-6 w-full md:w-1/2'>
      <div className='flex items-center gap-3 sm:gap-4'>
        <div className='bg-primary/10 rounded-xl p-3'>
          {icon ? icon : <Sparkles className='size-6 text-primary' />}
        </div>

        <h4 className='text-2xl md:text-3xl font-bold font-serif'>
          {title ? title : "Feature Title"}
        </h4>
      </div>

      <p className='text-sm text-neutral-muted'>
        {description ? description : "Description of the feature goes here."}
      </p>

      <div className='space-y-4'>
        {features &&
          features.map((feature, index) => (
            <div key={index} className='flex items-center gap-2'>
              <CheckCircle className='size-5 text-secondary' />
              <p className='text-sm text-neutral-muted'>{feature}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeatureCard;
