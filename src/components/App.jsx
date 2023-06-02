import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Layout from 'layout/Layout/layout';
import Movies from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './cast/cast';
import { Reviews } from 'components/reviews/reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
