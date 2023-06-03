import PropTypes from 'prop-types';

export const CastInfo = ({ actors }) => {
  return (
    <ul>
      {actors.map(({ id, profile_path, name, character }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <h3>{name}</h3>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

CastInfo.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
