import PropTypes from 'prop-types';

import css from 'components/movieInfo/movieInfo.module.css';

export const MovieInfo = ({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <div className={css.section}>
      <div className={css.imgBox}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
      </div>

      <div className={css.infoBox}>
        <h2 className={css.title}>
          {title}({release_date})
        </h2>
        <p className={css.score}>
          User Score: {(vote_average * 10).toFixed()}%
        </p>
        <ul className={css.list}>
          <li>
            <h3>Overview</h3>
            <p>{overview}</p>
          </li>

          <li>
            <h3>Genres</h3>
            <p>{genres.map(genre => genre.name).join(' ')}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};
