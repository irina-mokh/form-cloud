import { RegisterOptions, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectForm } from '../../store/form/selectors';
import { IInfoInputs } from '../../types';

type CustomInputProps = {
  lbl?: string,
  type: string,
  name: string,
  placeholder: string,
  options: RegisterOptions,
  id: string,
};

export const InputField = ({ lbl, type, name, options, placeholder, id }: CustomInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const formState = useSelector(selectForm);
  // get value from state
  // eslint-disable-next-line prettier/prettier
  let value = formState[name as keyof IInfoInputs];
  if (name.includes('advantage')) {
    const i = +name.split('-')[1];
    value = formState.advantages[i];
  } 
  return (
    <div className="input">
      {lbl && <label className="input__lbl" htmlFor={name}> {lbl} </label>}
      <input
        type={type}
        value={value}
        id={id}
        className="input__field"
        placeholder={placeholder}
        {...register(name, options)}
      />
      {errors[name] && <span className="input__err">{String(errors[name]?.message)}</span>}
    </div>
  );
};
