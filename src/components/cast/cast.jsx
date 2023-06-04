import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CastInfo } from 'components/cast/castInfo';
import { getCastInfo } from 'api/movies-service';
import { Loader } from 'components/loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getCastInfo(movieId);
        setActors(data);
      } catch (error) {
        setError('Oops');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <div>
      <CastInfo actors={actors} />
      {isLoading && <Loader />}
    </div>
  );
};

export default Cast;
