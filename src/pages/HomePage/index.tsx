import { Link } from 'react-router-dom';
import { IDevInfo } from '../../components/App';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { updateForm } from '../../store/form/reducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { IHomeInputs } from '../../types';
import { selectForm } from '../../store/form/selectors';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { maskNumber } from '../../utils';

type HomePageProps = {
  dev: IDevInfo,
};

export const HomePage = ({ dev }: HomePageProps) => {
  const { gh, tg, cv, firstName, lastName } = dev;
  const dispatch: AppDispatch = useDispatch();
  const { tel, email } = useSelector(selectForm);

  const {
    register,
    watch,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<IHomeInputs>({
    mode: 'onChange',
  });

  useEffect(() => {
    if (tel !== getValues('tel')) {
      setValue('tel', tel);
    }
  }, [tel]);

  useEffect(() => {
    const subscription = watch((form) => {
      dispatch(
        updateForm({ ...form, tel: form.tel !== tel ? maskNumber(form.tel || '') : form.tel })
      );
    });
    return () => subscription.unsubscribe();
  }, [dispatch, watch]);

  const btnClass = classNames({
    btn: true,
    btn_disabled: !isValid,
  });

  return (
    <div className="home container">
      <h2 className="visually-hidden">Info Tab</h2>
      <header className="user">
        <div className="user__avatar">{firstName[0] + lastName[0]}</div>
        <nav>
          <h3 className="user__name">{firstName + ' ' + lastName}</h3>
          <ul className="user__links">
            <li className="user__link">
              <Link to={tg} target="_blank" className="href">
                Telegram
              </Link>
            </li>
            <li className="user__link">
              <Link to={gh} target="_blank" className="href">
                Github
              </Link>
            </li>
            <li className="user__link">
              <Link to={cv} target="_blank" className="href">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <form className="home__form">
        <label className="lbl" htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            placeholder="tim.jennings@example.com"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              value: email,
            })}
            className="input"
          />
        </label>
        <label className="lbl" htmlFor="tel">
          Номер телефона
          <input
            type="text"
            id="tel"
            placeholder="+7 (999) 999-99-99"
            {...register('tel', {
              required: { value: true, message: 'Required field' },
              maxLength: { value: 18, message: '11 digits allowed' },
            })}
            className="input"
          />
          {errors.tel && <span className="err">{errors.tel.message}</span>}
        </label>
      </form>
      <Link to="form/info" className={btnClass}>
        Начать
      </Link>
    </div>
  );
};
