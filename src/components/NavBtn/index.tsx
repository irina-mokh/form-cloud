import classNames from 'classnames';
import { Link } from 'react-router-dom';

type NavBtnProps = {
  isValid: boolean,
  path: string,
  text: string,
};

export const NavBtn = ({ isValid, path, text }: NavBtnProps) => {
  const btnClass = classNames({
    btn: true,
    btn_disabled: !isValid,
  });
  return (
    <Link to={isValid ? path : '#'} className={btnClass}>
      {text}
    </Link>
  );
};
