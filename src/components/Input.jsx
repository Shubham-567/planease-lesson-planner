const Input = ({
  onChange,
  value,
  type = "text",
  id,
  label,
  Icon,
  placeholder,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className='block text-sm font-semibold tracking-wider text-neutral mb-2'>
        {label ? label : "Label"}
      </label>
      <div className='relative'>
        <input
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className='bg-base-100 text-neutral mt-1 p-2 pl-10 ring ring-base-300 rounded-md focus:ring-2 focus:ring-primary outline-none block w-full'
        />

        {Icon && (
          <Icon className='absolute top-1/2 left-3 -translate-y-1/2 text-neutral-muted/80 size-4' />
        )}
      </div>
    </>
  );
};

export default Input;
