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
