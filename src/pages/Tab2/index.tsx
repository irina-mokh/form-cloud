import { useEffect, useRef } from 'react';
import { NavBtnsBar } from '../../components/NavBtnsBar';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { setPageActive, setPageReady } from '../../store/main/reducer';
import { FormProvider, useForm } from 'react-hook-form';
import { IGroupInputs } from '../../types';
import { addField, deleteField, updateForm } from '../../store/form/reducer';
import { InputField } from '../../components/InputField';
import { useSelector } from 'react-redux';
import { selectForm } from '../../store/form/selectors';

export const Tab2 = () => {
  const dispatch: AppDispatch = useDispatch();
  const { advantages, radioGroup, checkGroup } = useSelector(selectForm);

  useEffect(() => {
    dispatch(setPageActive(1));
    dispatch(setPageReady(0));
  }, []);

  const methods = useForm<IGroupInputs>({
    mode: 'onChange',
  });
  const {
    watch,
    formState: { isValid },
  } = methods;

  const fields = advantages.map((item, i) => {
    return (
      <li key={i} className="fieldset__item">
        <InputField
          type="text"
          name={'advantage-' + i}
          placeholder="genius"
          options={{}}
        ></InputField>
        <button
          className="btn_delete"
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteField(i));
          }}
        ></button>
      </li>
    );
  });

  const handleAddField = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addField());
  };

  useEffect(() => {
    const subscription = watch((form) => {
      const entries = Object.entries(form);

      const advantagesArr = entries
        .filter((item) => item[0].includes('advantage'))
        .map((adv) => adv[1]);

      const formData = {
        advantages: advantagesArr,
      };
      dispatch(updateForm(formData));
    });
    return () => subscription.unsubscribe();
  }, [dispatch, watch]);
  return (
    <FormProvider {...methods}>
      <div className="tab">
        <h2 className="visually-hidden">Advantages</h2>
        <form className="tab__form">
          <fieldset className="fieldset">
            <legend>Advantages</legend>
            <ul>{fields}</ul>
            <button className="btn btn_add" onClick={handleAddField}>
              +
            </button>
          </fieldset>
        </form>
      </div>
      <NavBtnsBar pathBack="/form/0" pathForward="/form/2" isValid={isValid} />
    </FormProvider>
  );
};
