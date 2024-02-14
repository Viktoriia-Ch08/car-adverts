import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <div>
        <Link to="/">home</Link>
        <Link to="/catalog">catalog</Link>
        <Link to="/favorites">favorites</Link>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
