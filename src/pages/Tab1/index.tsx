import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { AppDispatch } from '../../store';
import { updateForm } from '../../store/form/reducer';
import { selectForm } from '../../store/form/selectors';
import { setPageActive } from '../../store/main/reducer';

import { InputField } from '../../components/InputField';
import { NavBtnsBar } from '../../components/NavBtnsBar';

import { IInfoInputs } from '../../types';

export const Tab1 = () => {
  const dispatch: AppDispatch = useDispatch();

  const { sex } = useSelector(selectForm);

  const methods = useForm<IInfoInputs>({
    mode: 'onChange',
  });
  const {
    register,
    watch,
    formState: { isValid },
  } = methods;

  useEffect(() => {
    dispatch(setPageActive(0));
  }, []);

  useEffect(() => {
    const subscription = watch((form) => {
      dispatch(updateForm(form));
    });
    return () => subscription.unsubscribe();
  }, [dispatch, watch]);

  return (
    <FormProvider {...methods}>
      <div className="tab">
        <h2 className="visually-hidden">Info Tab</h2>
        <form className="tab__form">
          <InputField
            name="nickname"
            id="field-nickname"
            lbl="Nickname"
            type="text"
            placeholder="Moonpie"
            options={{
              required: { value: true, message: 'enter your nickname' },
              minLength: { value: 4, message: 'min 4 symbols' },
            }}
          />
          <InputField
            name="name"
            id="field-name"
            lbl="Name"
            type="text"
            placeholder="Sheldon"
            options={{
              required: { value: true, message: 'enter your first name' },
              minLength: { value: 4, message: 'min 4 symbols' },
            }}
          />
          <InputField
            name="surname"
            id="field-surname"
            lbl="Surname"
            type="text"
            placeholder="Cooper"
            options={{
              required: { value: true, message: 'enter your last name' },
              minLength: { value: 2, message: 'min 2 symbols' },
            }}
          />
          <label htmlFor="sex" className="input_lbl">
            Sex
          </label>
          <select
            className="input__field"
            id="field-sex"
            {...register('sex', { required: true })}
            value={sex}
          >
            <option value="">Please choose an option</option>
            <option value="man">man</option>
            <option value="woman">woman</option>
          </select>
        </form>
        <NavBtnsBar pathBack="/" pathForward="/form/1" isValid={isValid} />
      </div>
    </FormProvider>
  );
};
