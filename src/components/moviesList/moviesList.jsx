import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from 'components/moviesList/moviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  // console.log(location.state);
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link
              className={css.link}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};
