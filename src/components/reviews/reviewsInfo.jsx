import PropTypes from 'prop-types';

export const ReviewsInfo = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h2>Author:{author}</h2>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

ReviewsInfo.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
