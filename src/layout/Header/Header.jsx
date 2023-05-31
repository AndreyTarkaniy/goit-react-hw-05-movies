import { Link } from 'react-router-dom';

// import { HeaderWrapp, List } from './Header.styled';

export const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
