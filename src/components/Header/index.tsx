import { Link } from 'react-router-dom';

export const Header = () => {
  {
    return (
      <ul>
        <li>
          <Link to="/">1</Link>
        </li>
        <li>
          <Link to="details">2</Link>
        </li>
        <li>
          <Link to="text">3</Link>
        </li>
      </ul>
    );
  }
};
