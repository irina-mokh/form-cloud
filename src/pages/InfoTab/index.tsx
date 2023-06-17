import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { updateForm } from '../../store/form/reducer';
import { FormProvider, useForm } from 'react-hook-form';
import { IInfoInputs } from '../../types';
import { useEffect } from 'react';
import { CustomInput } from '../../components/CustomInput';
import { NavBtnsBar } from '../../components/NavBtnsBar';

export const InfoTab = () => {
  const dispatch: AppDispatch = useDispatch();

  const methods = useForm<IInfoInputs>({
    mode: 'onChange',
  });
  const {
    register,
    watch,
    formState: { isValid },
  } = methods;

  useEffect(() => {
    const subscription = watch((form) => {
      dispatch(updateForm(form));
    });
    return () => subscription.unsubscribe();
  }, [dispatch, watch]);

  return (
    <FormProvider {...methods}>
      <div className="info">
        <h2 className="visually-hidden">Info Tab</h2>
        <form className="info__form">
          <CustomInput
            name="nickname"
            lbl="Nickname"
            type="text"
            placeholder="Moonpie"
            options={{
              required: { value: true, message: 'enter your nickname' },
              minLength: { value: 4, message: 'min 4 symbols' },
            }}
          />
          <CustomInput
            name="name"
            lbl="Name"
            type="text"
            placeholder="Sheldon"
            options={{
              required: { value: true, message: 'enter your first name' },
              minLength: { value: 4, message: 'min 4 symbols' },
            }}
          />
          <CustomInput
            name="surname"
            lbl="Surname"
            type="text"
            placeholder="Cooper"
            options={{
              required: { value: true, message: 'enter your last name' },
              minLength: { value: 2, message: 'min 2 symbols' },
            }}
          />
          <label htmlFor="sex">Sex</label>
          <select className="input" id="sex" {...register('sex', { required: true })}>
            <option value="">Please choose an option</option>
            <option value="man">man</option>
            <option value="woman">woman</option>
          </select>
        </form>
        <NavBtnsBar pathBack="/" pathForward="details" isValid={isValid} />
      </div>
    </FormProvider>
  );
};
