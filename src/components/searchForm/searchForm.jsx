import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.prevenDefault();
    const search = e.target.query.value.toLowerCase().trim();
    if (!search) return;
    setSearchParams({ search });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" autoFocus name="query" />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
