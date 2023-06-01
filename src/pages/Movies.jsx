import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getByName } from 'api/movies-service';

import { SearchForm } from 'components/searchForm/searchForm';
import { MoviesList } from 'components/moviesList/moviesList';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  // const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  console.log(searchParams.get('query'));
  const querySearchForm = searchParams.get('query');

  useEffect(() => {
    if (!querySearchForm) {
      return;
    }

    const asyncWrapper = async () => {
      try {
        // setIsLoading(true);
        const data = await getByName(querySearchForm);
        setMovies(data);
      } catch (error) {
        setError('Oops');
      } finally {
        // setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [querySearchForm]);

  return (
    <div>
      <h1>Movies</h1>
      <SearchForm />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
