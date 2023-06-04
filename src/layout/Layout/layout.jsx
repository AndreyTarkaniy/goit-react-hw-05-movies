import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import css from 'layout/Layout/layout.module.css';
import { Header } from '../Header/Header';

const Layout = () => {
  return (
    <div className={css.wrap}>
      <Header />
      <main>
        {' '}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
