import { Link } from 'react-router-dom';

export const Header = () => {
  {
    return (
      <header className="header">
        <ul className="header__list">
          <li>
            <Link to="/form">1</Link>
          </li>
          <li>
            <Link to="details">2</Link>
          </li>
          <li>
            <Link to="text">3</Link>
          </li>
        </ul>
      </header>
    );
  }
};
