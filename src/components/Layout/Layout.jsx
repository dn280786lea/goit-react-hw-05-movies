import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import {} from './Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/movies" activeClassName="active" exact>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
