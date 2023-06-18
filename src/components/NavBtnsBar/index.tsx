import { NavBtn } from '../NavBtn';

type NavBtnsBarProps = {
  pathBack: string,
  pathForward: string,
  isValid: boolean,
};

export const NavBtnsBar = ({ pathBack, pathForward, isValid }: NavBtnsBarProps) => {
  return (
    <nav className="nav-btns-bar">
      <NavBtn text="Назад" path={pathBack} isValid />
      <NavBtn text="Далее" path={pathForward} isValid={isValid} />
    </nav>
  );
};
