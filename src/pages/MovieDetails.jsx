// import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieInfo } from 'api/movies-service';
import { MovieInfo } from 'components/movieInfo/movieInfo';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    // const asyncWrapper = async () => {
    //   try {
    //     // setIsLoading(true);
    //     const data = await getTrendingMovies();
    //     setMovies(data);
    //   } catch (error) {
    //     setError('Oops');
    //   } finally {
    //     // setIsLoading(false);
    //   }
    // };
    // asyncWrapper();

    (async () => {
      try {
        // setIsLoading(true);
        const data = await getMovieInfo(movieId);
        setMovie(data);
      } catch (error) {
        setError('Oops');
      } finally {
        // setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <div>
      {movie && <MovieInfo {...movie} />}
      {/* <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="rewiews">Reviews</Link>
        </li>
      </ul> */}
      {/* <Outlet /> */}
    </div>
  );
};
