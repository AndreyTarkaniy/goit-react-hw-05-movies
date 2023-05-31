import { SearchForm } from 'components/searchForm/searchForm';
import { MoviesList } from 'components/moviesList/moviesList';

export const Movies = () => {
  return (
    <div>
      <SearchForm />
      <MoviesList />
    </div>
  );
};
