import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ReviewsInfo } from 'components/reviews/reviewsInfo';
import { getReviewsInfo } from 'api/movies-service';
import { Loader } from 'components/loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getReviewsInfo(movieId);
        setReviews(data);
      } catch (error) {
        setError('Oops');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <div>
      {reviews.length !== 0 ? (
        <ReviewsInfo reviews={reviews} />
      ) : (
        <p>We, don't have any reviews for this movie.</p>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Reviews;
