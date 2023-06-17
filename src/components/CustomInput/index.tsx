import { RegisterOptions, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectForm } from '../../store/form/selectors';
import { IFormState } from '../../types';

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

  const formState = useSelector(selectForm);

  console.log(formState);
  return (
    <label className="lbl" htmlFor={name}>
      {lbl}
      <input
        type={type}
        // eslint-disable-next-line prettier/prettier
        value={formState[name as keyof IFormState] }
        id={name}
        className="input"
        placeholder={placeholder}
        {...register(name, options)}
      />
      {errors[name] && <span className="err">{String(errors[name]?.message)}</span>}
    </label>
  );
};
