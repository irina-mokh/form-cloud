import { useEffect } from 'react';
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

const CHECK_GROUP = [1, 2, 3];
const RADIO_GROUP = [1, 2, 3];

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
    register,
    formState: { isValid },
  } = methods;

  // render fields for advantages
  const fields = advantages.map((item, i) => (
    <li key={i} className="fieldset__item">
      <InputField
        type="text"
        id={'field-advantages-' + i}
        name={'advantages-' + i}
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
  ));

  // render checkbox group
  const checkboxes = CHECK_GROUP.map((item, i) => (
    <li key={'checkbox' + i} className="fieldset__item checkbox">
      <input
        type="checkbox"
        id={'field-checkbox-' + i}
        value={item}
        className="checkbox__input"
        checked={checkGroup.includes(item)}
        {...register('checkGroup', { required: true })}
      ></input>
      <label htmlFor={'field-checkbox-' + i} className="checkbox__lbl">
        {item}
      </label>
    </li>
  ));

  // render radio group
  const radios = RADIO_GROUP.map((item, i) => (
    <li key={'radio' + i} className="fieldset__item radio">
      <input
        type="radio"
        id={'field-radio-' + i}
        value={item}
        className="radio__input"
        checked={radioGroup.includes(item)}
        {...register('radioGroup', { required: true })}
      ></input>
      <label htmlFor={'field-radio-' + i} className="radio__lbl">
        {item}
      </label>
    </li>
  ));
  const handleAddField = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addField());
  };

  // update store on every change
  useEffect(() => {
    const subscription = watch((form) => {
      // collect advantages into array
      const entries = Object.entries(form);
      const advantagesArr = entries
        .filter((item) => item[0].includes('advantage'))
        .map((adv) => adv[1]);

      // convert string values of checkboxes to numbers
      const numCheckGroup = form.checkGroup?.length
        ? form.checkGroup.map((s) => (s ? +s : null))
        : [];

      const formData = {
        advantages: advantagesArr,
        checkGroup: [...numCheckGroup],
        radioGroup: [form.radioGroup ? +form.radioGroup : null],
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
          <fieldset className="fieldset">
            <legend>Checkbox group</legend>
            <ul>{checkboxes}</ul>
          </fieldset>
          <fieldset className="fieldset">
            <legend>Radio group</legend>
            <ul>{radios}</ul>
          </fieldset>
        </form>
      </div>
      <NavBtnsBar pathBack="/form/0" pathForward="/form/2" isValid={isValid} />
    </FormProvider>
  );
};
