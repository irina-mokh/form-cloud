import { Link } from 'react-router-dom';

export const Header = () => {
  {
    return (
      <header className="header">
        <ul className="header__list">
          <li>
            <Link to="form/info"></Link>
          </li>
          <li>
            <Link to="form/details">2</Link>
          </li>
          <li>
            <Link to="form/text">3</Link>
          </li>
        </ul>
      </header>
    );
  }
};
