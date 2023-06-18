import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import { AppDispatch } from '../../store';
import { setPageActive, setPageReady } from '../../store/main/reducer';
import { clearForm, updateForm } from '../../store/form/reducer';
import { selectForm } from '../../store/form/selectors';
import { postForm } from '../../store/main/actions';
import { selectMain } from '../../store/main/selectors';

import { NavBtn } from '../../components/NavBtn';
import { Modal } from '../../components/Modal';

import { ITextInputs } from '../../types';

export const Tab3 = () => {
  const dispatch: AppDispatch = useDispatch();
  const formState = useSelector(selectForm);
  const { error } = useSelector(selectMain);

  const [isModal, setIsModal] = useState(false);
  const closeModal = () => setIsModal(false);

  useEffect(() => {
    dispatch(setPageActive(2));
    dispatch(setPageReady(1));
  }, []);

  const [symbols, setSymbols] = useState(formState.about.trim().length);
  const [spaces, setSpaces] = useState(formState.about.lastIndexOf.length - symbols);

  const methods = useForm<ITextInputs>({ mode: 'onChange' });
  const {
    register,
    formState: { isValid, errors },
  } = methods;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setSymbols(text.trim().length);
    setSpaces(text.length - symbols);
    dispatch(
      updateForm({
        about: text,
      })
    );
  };

  const handleSubmitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isValid) {
      dispatch(postForm(formState));
      dispatch(clearForm());
      setIsModal(true);
    }
  };

  const submitBtnClass = classNames({
    btn: true,
    'btn-submit': true,
    btn_disabled: !isValid,
  });
  return (
    <div className="tab">
      {isModal && <Modal error={!!error} close={closeModal} />}
      <h2 className="visually-hidden">Text Tab</h2>
      <form>
        <div className="input">
          <label className="lbl">About</label>
          <textarea
            className="textarea"
            placeholder="I love trains and flags"
            value={formState.about}
            {...register('about', {
              onChange: handleChange,
              required: true,
              maxLength: { value: 200 + spaces, message: 'Max length 200 symbols' },
            })}
          ></textarea>
          <p className="counter">{`${200 - symbols} / 200`}</p>
          {errors.about && <span className="input__err">{String(errors.about?.message)}</span>}
        </div>
        <div className="tab__btns">
          <NavBtn isValid path="/form/1" text="Назад"></NavBtn>
          <button className={submitBtnClass} onClick={handleSubmitForm}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};
