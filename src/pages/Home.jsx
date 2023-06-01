import { useState } from 'react';
import { MoviesList } from 'components/moviesList/moviesList';
import { useEffect } from 'react';
import { getTrendingMovies } from 'api/movies-service';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  console.log(getTrendingMovies());

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        // setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError('Oops');
      } finally {
        // setIsLoading(false);
      }
    };
    asyncWrapper();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
      {/* {isLoading && <Loader/>} */}
    </div>
  );
};

export default Home;
