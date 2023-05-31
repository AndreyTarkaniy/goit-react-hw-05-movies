import { Link } from 'react-router-dom';
import { MovieInfo } from 'components/movieInfo/movieInfo';

export const MovieDetails = () => {
  return (
    <div>
      <MovieInfo />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="rewiews">Reviews</Link>
        </li>
      </ul>
      {/* <Outlet /> */}
    </div>
  );
};
