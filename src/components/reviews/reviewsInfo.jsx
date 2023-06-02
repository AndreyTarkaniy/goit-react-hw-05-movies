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
