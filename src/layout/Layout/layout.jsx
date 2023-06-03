import { Outlet } from 'react-router-dom';

import css from 'layout/Layout/layout.module.css';
import { Header } from '../Header/Header';

const Layout = () => {
  return (
    <div className={css.wrap}>
      <Header />
      <main>{<Outlet />}</main>
    </div>
  );
};

export default Layout;
