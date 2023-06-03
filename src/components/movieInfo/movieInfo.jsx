import PropTypes from 'prop-types';

export const MovieInfo = ({
  poster_path,
  title,
  release_date,
  popularity,
  overview,
  genres,
}) => {
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
      </div>

      <div>
        <h2>
          {title}({release_date})
        </h2>
        <p>User Score: {popularity}%</p>
        <ul>
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
