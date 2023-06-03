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
            <span className={css.active}>Movies</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
