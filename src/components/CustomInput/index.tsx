import { RegisterOptions, useFormContext } from 'react-hook-form';

type CustomInputProps = {
  lbl: string,
  type: string,
  name: string,
  placeholder: string,
  options: RegisterOptions,
};

export const CustomInput = ({ lbl, type, name, options, placeholder }: CustomInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <label className="lbl" htmlFor={name}>
      {lbl}
      <input
        type={type}
        id={name}
        className="input"
        placeholder={placeholder}
        {...register(name, options)}
      />
      {errors[name] && <span className="err">{String(errors[name]?.message)}</span>}
    </label>
  );
};
