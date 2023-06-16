import { Link } from 'react-router-dom';
import { IDevInfo } from '../../components/App';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IHomeInputs } from '../../types';

type HomePageProps = {
  dev: IDevInfo,
};

export const HomePage = ({ dev }: HomePageProps) => {
  const { gh, tg, cv, firstName, lastName } = dev;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IHomeInputs>();

  const onSubmit: SubmitHandler<IHomeInputs> = (data) => console.log(data);

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
            {...register('email', { required: true })}
            className="input"
          />
        </label>
        <label className="lbl" htmlFor="tel">
          Номер телефона
          <input
            type="tel"
            id="tel"
            placeholder="+7 999 999-99-99"
            {...register('tel', { required: true })}
            className="input"
          />
        </label>
      </form>
      <Link to="form/details" className="btn">
        Начать
      </Link>
    </div>
  );
};
