import { Link } from 'react-router-dom';

import css from 'layout/Header/Header.module.css';

export const Header = () => {
  return (
    <nav className={css.headerNav}>
      <ul className={css.headerList}>
        <li>
          <Link className={css.headerItem} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={css.headerItem} to="/movies">
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};
