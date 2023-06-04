import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'layout/Layout/layout';

const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Home = lazy(() => import('pages/Home'));
const Cast = lazy(() => import('components/cast/cast'));
const Reviews = lazy(() => import('components/reviews/reviews'));

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
