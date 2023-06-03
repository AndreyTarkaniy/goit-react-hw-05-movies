import { Link, Outlet } from 'react-router-dom';

import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { getMovieInfo } from 'api/movies-service';
import { MovieInfo } from 'components/movieInfo/movieInfo';
import { Loader } from 'components/loader/Loader';
import { GoBackBtn } from 'components/goBack/GoBack';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  // console.log(location.state);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getMovieInfo(movieId);
        setMovie(data);
      } catch (error) {
        setError('Oops');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <div>
      <GoBackBtn path={backLink.current} />
      {movie && <MovieInfo {...movie} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>

        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      {isLoading && <Loader />}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
